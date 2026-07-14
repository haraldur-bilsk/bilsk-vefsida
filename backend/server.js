// Bílskúrinn – bakendi sem tengist henry.rogg XML API-inu.
//
// AF HVERJU BAKENDI YFIRHÖFUÐ?
// - henry.rogg krefst APIKEY í hverri fyrirspurn. Ef vafri notandans sendi
//   fyrirspurnina beint myndi APIKEY liggja opið í netumferðinni (Network tab).
// - Henry hvítlistar líka IP-tölu netþjónsins sem má gera fyrirspurnir - það
//   virkar bara fyrir OKKAR netþjón, ekki fyrir IP-tölur allra vefsíðugesta.
// - Þess vegna: vafri -> okkar netþjónn (þessi skrá) -> henry.rogg.
//   APIKEY er aldrei sýnilegt vafranum.
//
// ATH: Nákvæm slóð/skjal-uppbygging XML-svarsins er ekki staðfest ennþá.
// Reitirnir í mapVehicle() hér að neðan eru merktir "TODO" og þarf að
// uppfæra þá út frá raunverulegu XML-svari um leið og API-aðgangur fæst.

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { XMLParser } = require('fast-xml-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;
const CACHE_TTL = Number(process.env.CACHE_TTL_SECONDS || 30) * 1000;

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024, files: 20 },
});

// ---------------------------------------------------------------------------
// Tölvupóstsending fyrir fyrirspurnir/bókanir/sölu/innflutning - kemur í stað
// gömlu mailto:-krækjanna svo notandinn þurfi ekki að opna sinn eigin
// tölvupóstforrit til að senda erindið.
// ---------------------------------------------------------------------------
const mailTransport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || 465),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

async function sendMail({ subject, text, html, attachments, replyTo, fromName }) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    throw new Error('EMAIL_USER / EMAIL_APP_PASSWORD er ekki stillt í .env');
  }
  await mailTransport.sendMail({
    from: `${fromName || 'bilsk.is'} <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || 'bilskurinn@bilsk.is',
    replyTo: replyTo || undefined,
    subject,
    text,
    html,
    attachments,
  });
}

// Litlar hjálparfallanir fyrir fallega HTML-útgáfu af tölvupóstunum (feitletraðir
// reitir) - text-útgáfan er alltaf send líka sem varaleið fyrir póstforrit sem
// sýna ekki HTML.
function escapeHtml(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}
function emailRow(label, value) {
  return `<p style="margin:4px 0"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value) || '-'}</p>`;
}
function emailWrapper(intro, rowsHtml, extraLabel, extraValue) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111">
<p>${escapeHtml(intro)}</p>
${rowsHtml}
${extraLabel ? `<p style="margin:16px 0 4px"><strong>${escapeHtml(extraLabel)}:</strong></p><p style="margin:0;white-space:pre-wrap">${escapeHtml(extraValue)}</p>` : ''}
</div>`;
}

// Einföld vörn gegn ruslsendingum: hámark 10 sendingar á 15 mín. á hverja IP-tölu.
const submissionLog = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
function checkRateLimit(ip) {
  const now = Date.now();
  const arr = (submissionLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  arr.push(now);
  submissionLog.set(ip, arr);
  return arr.length <= RATE_LIMIT_MAX;
}

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

let cache = { data: null, fetchedAt: 0 };
let cacheRefreshing = null; // Promise sem er í gangi, ef verið er að endurnýja núna
let codesCache = { data: null, fetchedAt: 0 };
// Skjöl Rögg biðja sérstaklega um að kóðar séu ekki sóttir í sífellu - "t.d.
// einu sinni á dag" er nefnt sem hæfilegt - því er þessi skyndiminni mun
// lengra en fyrir söluskrána sjálfa.
const CODES_CACHE_TTL = 24 * 60 * 60 * 1000;

// Staðfest 13.07.2026 út frá alvöru svari: bilasolur.is/Henry XML-svarið er
// STAÐBUNDIÐ (positional) - <meta fields="ID,EIGANDI,ARGERD,..."/> skilgreinir
// röð reitanna, og hver <v F0=".." F1=".." .../> hnútur hefur tölusett
// eigindi sem samsvara þeirri röð. Reitalistinn er LESINN ÚR SVARINU sjálfu í
// hvert sinn (ekki harðkóðaður) svo kóðinn haldi áfram að virka þó Rögg bæti
// reitum við eða breyti röðinni.
function henryFieldNames(meta) {
  return String(meta?.['@_fields'] || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

// Býr til { ID:'..', EIGANDI:'..', ARGERD:'..', ... } úr einum <v> hnút með
// því að para F0,F1,F2... við reitalistann.
function henryVehicleFields(v, fieldNames) {
  const obj = {};
  fieldNames.forEach((name, i) => {
    obj[name] = v[`@_F${i}`];
  });
  return obj;
}

// Byggir myndaslóð út frá {imgurl} sniðmátinu í <meta>, t.d.
// "https://bilasolur.is/CarImage.aspx?s={v.EXT_BILASALAID}&c={v.ID}&p={p.ID}&w={width}"
function henryBuildImageUrl(template, fields, photoId, width) {
  if (!template) return null;
  return template
    .replace('{v.EXT_BILASALAID}', encodeURIComponent(fields.EXT_BILASALAID || ''))
    .replace('{v.ID}', encodeURIComponent(fields.ID || ''))
    .replace('{p.ID}', encodeURIComponent(photoId || ''))
    .replace('{width}', String(width || 1200));
}

// Býr til uppflettitöflu { '3':'ABS hemlakerfi', ... } úr t.d.
// <aukahlutir><a id="3" n="ABS hemlakerfi"/>...</aukahlutir>
function henryBuildCodeMap(list) {
  const map = {};
  [].concat(list || []).forEach((item) => {
    const id = item?.['@_id'];
    if (id !== undefined && id !== null) map[String(id)] = item?.['@_n'] || '';
  });
  return map;
}

// Sækir codes.aspx (systurslóð við get.aspx) og býr til uppflettitöflur fyrir
// eldsneyti, gírkassategund, drif, lit, flokk (yfirflokk/body) og aukahluti -
// þessir reitir eru tölukóðar í söluskránni sjálfri.
async function fetchHenryCodes(baseUrl, apiKey) {
  const now = Date.now();
  if (codesCache.data && now - codesCache.fetchedAt < CODES_CACHE_TTL) {
    return codesCache.data;
  }
  const codesUrl = baseUrl.replace(/get\.aspx.*$/, 'codes.aspx');
  const sep = codesUrl.includes('?') ? '&' : '?';
  const requestUrl = `${codesUrl}${sep}apikey=${encodeURIComponent(apiKey)}`;
  const res = await fetch(requestUrl, { headers: { Accept: 'application/xml, text/xml' } });
  if (!res.ok) {
    throw new Error(`Henry codes.aspx skilaði villu: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const json = parser.parse(xml);
  const d = json?.data || {};
  const codes = {
    eldsneyti: henryBuildCodeMap(d.eldsneyti?.e),
    girartegund: henryBuildCodeMap(d.girartegund?.g),
    drif: henryBuildCodeMap(d.drif?.d),
    litir: henryBuildCodeMap(d.litir?.l),
    flokkar: henryBuildCodeMap(d.flokkar?.f),
    aukahlutir: henryBuildCodeMap(d.aukahlutir?.a),
  };
  codesCache = { data: codes, fetchedAt: now };
  return codes;
}

async function fetchHenryPage(baseUrl, apiKey, page) {
  const sep = baseUrl.includes('?') ? '&' : '?';
  // Staðfest í skjölum Rögg (v3.2): &page=x sækir tiltekna blaðsíðu og
  // &pagesize=x stillir fjölda færslna á síðu (sjálfgefið 30, hámark 50).
  // Notum hámarkið til að lágmarka fjölda fyrirspurna.
  const requestUrl = `${baseUrl}${sep}apikey=${encodeURIComponent(apiKey)}&page=${page}&pagesize=50`;
  const res = await fetch(requestUrl, { headers: { Accept: 'application/xml, text/xml' } });
  if (!res.ok) {
    throw new Error(`Henry API skilaði villu (síða ${page}): ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  return parser.parse(xml);
}

// Umbreytir einni bíla-færslu (þegar búið er að para F0,F1... við nöfn) yfir
// í sniðið sem framendinn (script.js -> carCard/renderDetail) notar nú þegar.
// `codes` er uppflettitöflusettið úr fetchHenryCodes() - þýðir tölukóða
// (ELDSNEYTI, GIRARTEGUND, DRIF, LITUR, FLOKKUR, AUKAHLUTIR) yfir í texta.
function mapVehicle(fields, imgUrlTemplate, codes) {
  const photos = [].concat(fields.__photos || []);
  const images = photos
    .slice()
    .sort((a, b) => Number(a['@_so'] || 0) - Number(b['@_so'] || 0))
    .map((p) => henryBuildImageUrl(imgUrlTemplate, fields, p['@_id'], 1200))
    .filter(Boolean);

  const featureIds = String(fields.AUKAHLUTIR || '')
    .split('$')
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    id: String(fields.ID || ''),
    name: [fields.EXT_MODFRAMLEIDANDI, fields.EXT_MODGERD].filter(Boolean).join(' '),
    year: Number(fields.EXT_ARGERD || fields.ARGERD || 0),
    km: Number(fields.EXT_EKINNKM || fields.EKINN || 0),
    // ATH: raunveruleg gildi hér eru t.d. "Bensín","Dísel","Rafmagn","Vetni",
    // "Metan","Hybrid","Plug-in hybrid" - vefurinn (cars.html) er núna bara
    // með síuhnappa fyrir "Rafmagn","Dísel","Bensín","Bensín/Rafmagn". Þarf
    // hugsanlega að uppfæra þá valmöguleika svo þeir passi við alvöru gögnin.
    fuel: codes.eldsneyti[fields.ELDSNEYTI] || '',
    gear: codes.girartegund[fields.GIRARTEGUND] || '',
    drive: codes.drif[fields.DRIF] || '',
    color: codes.litir[fields.LITUR] || '',
    price: Number(fields.VERD || 0) * 1000, // VERD er í þúsundum kr. skv. skjölum Rögg
    brand: fields.EXT_MODFRAMLEIDANDI || '',
    body: codes.flokkar[fields.FLOKKUR] || '',
    image: images[0] || null,
    images,
    doors: Number(fields.DYR || 0),
    seats: Number(fields.MANNA || 0),
    hp: Number(fields.HESTOFL || 0),
    features: featureIds.map((id) => codes.aukahlutir[id]).filter(Boolean),
    // Skjöl Rögg: "Er ökutæki á staðnum; inniheldur tölugildi ef ökutæki er á
    // staðnum en er tómt ef ökutæki er ekki á staðnum." - þ.e. SPOT er annað
    // hvort tómt (ekki á staðnum) eða inniheldur eitthvert tölugildi (á staðnum).
    inStock: fields.SPOT !== undefined && fields.SPOT !== null && String(fields.SPOT).trim() !== '',
  };
}

// Sækir ALLAR síður frá Henry og skilar tilbúnum bílalista. Þetta er "þunga"
// vinnan - sjálf netföngin til Henry geta tekið smá tíma, sérstaklega þegar
// margar síður eru sóttar. Sjá fetchHenryFeed() fyrir neðan fyrir hvernig
// þetta er notað án þess að notandinn þurfi að bíða eftir þessu í hvert sinn.
async function refreshHenryFeed() {
  const url = process.env.HENRY_API_URL;
  const apiKey = process.env.HENRY_API_KEY;
  if (!url || !apiKey || url.includes('xml-feed-url-hér') || apiKey.includes('set-inn')) {
    throw new Error(
      'HENRY_API_URL / HENRY_API_KEY er ekki stillt ennþá. Fylltu út .env (sjá .env.example).'
    );
  }

  const codes = await fetchHenryCodes(url, apiKey);

  // Svarið er BLAÐSÍÐUSKIPT (t.d. pages=4, records=96, pagesize=30 í fyrstu
  // síðunni sem við prófuðum) - við sækjum allar síður og söfnum saman í
  // einn lista, með varnir gegn tvítekningum ef blaðsíðuskiptingin virkar
  // ekki nákvæmlega eins og gert er ráð fyrir.
  const first = await fetchHenryPage(url, apiKey, 1);
  const meta = first?.data?.meta || {};
  const totalPages = Number(meta['@_pages'] || 1);
  const fieldNames = henryFieldNames(meta);
  const imgUrlTemplate = meta['@_imgurl'] || '';

  const byId = new Map();
  const ingestPage = (pageData) => {
    const nodes = [].concat(pageData?.data?.vs?.v || []);
    nodes.forEach((v) => {
      const fields = henryVehicleFields(v, fieldNames);
      fields.__photos = [].concat(v.ps?.p || []);
      const car = mapVehicle(fields, imgUrlTemplate, codes);
      if (car.id) byId.set(car.id, car);
    });
  };
  ingestPage(first);

  // Sækjum hinar síðurnar SAMHLIÐA (Promise.all) í stað þess að bíða eftir
  // hverri á fætur annarri - flýtir verulega fyrir þegar bílafjöldi krefst
  // margra síðna, þar sem Henry-þjónustan getur verið nokkuð sein í svörum.
  if (totalPages > 1) {
    const restPages = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) => fetchHenryPage(url, apiKey, i + 2))
    );
    restPages.forEach(ingestPage);
  }

  const cars = Array.from(byId.values());
  cache = { data: cars, fetchedAt: Date.now() };
  return cars;
}

// Skilar núverandi skyndiminni STRAX (jafnvel þótt úrelt sé) og endurnýjar í
// bakgrunni ef CACHE_TTL er útrunnið - þannig þarf enginn notandi að bíða
// eftir Henry-svarinu sjálfur nema á allra fyrstu fyrirspurninni eftir að
// vefþjónninn ræsir (þá er ekkert til í minni ennþá og við verðum að bíða).
async function fetchHenryFeed() {
  const now = Date.now();
  const isStale = !cache.data || now - cache.fetchedAt >= CACHE_TTL;

  if (isStale && !cacheRefreshing) {
    cacheRefreshing = refreshHenryFeed()
      .catch((err) => {
        if (!cache.data) throw err;
        // Endurnýjun mistókst en við eigum eldri gögn - höldum þeim frekar en
        // að henda villu framan í notandann.
        console.error('[fetchHenryFeed] bakgrunns-endurnýjun mistókst, held í eldri gögn:', err.message);
        return cache.data;
      })
      .finally(() => {
        cacheRefreshing = null;
      });
  }

  if (cache.data) return cache.data;
  return cacheRefreshing;
}

app.get('/api/cars', async (req, res) => {
  try {
    const cars = await fetchHenryFeed();
    res.json(cars);
  } catch (err) {
    console.error('[/api/cars] villa:', err.message);
    res.status(502).json({ error: 'Gat ekki sótt bíla frá Henry API', detail: err.message });
  }
});

app.get('/api/cars/:id', async (req, res) => {
  try {
    const cars = await fetchHenryFeed();
    const car = cars.find((c) => c.id === req.params.id);
    if (!car) return res.status(404).json({ error: 'Bíll fannst ekki' });
    res.json(car);
  } catch (err) {
    console.error(`[/api/cars/${req.params.id}] villa:`, err.message);
    res.status(502).json({ error: 'Gat ekki sótt bíl frá Henry API', detail: err.message });
  }
});

app.post('/api/inquiry', async (req, res) => {
  if (!checkRateLimit(req.ip)) return res.status(429).json({ error: 'Of margar sendingar - reyndu aftur síðar.' });
  try {
    const { name = '', email = '', phone = '', message = '', carId = '', carName = '' } = req.body || {};
    if (!name || !(email || phone)) return res.status(400).json({ error: 'Vantar nafn og netfang/símanúmer.' });
    const text = `Ný fyrirspurn af bilsk.is\n\nNafn: ${name}\nNetfang: ${email}\nSímanúmer: ${phone}\nBíll: ${carName ? carName + ' (' + carId + ')' : '-'}\n\nSkilaboð:\n${message}`;
    const html = emailWrapper('Ný fyrirspurn af bilsk.is',
      emailRow('Nafn', name) + emailRow('Netfang', email) + emailRow('Símanúmer', phone) + emailRow('Bíll', carName ? carName + ' (' + carId + ')' : '-'),
      'Skilaboð', message);
    await sendMail({ subject: `Fyrirspurn um ${carName || 'bíl'} - Bílskúrinn`, text, html, replyTo: email, fromName: 'bilsk.is (fyrirspurn)' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[/api/inquiry] villa:', err.message);
    res.status(502).json({ error: 'Gat ekki sent fyrirspurn.' });
  }
});

app.post('/api/booking', async (req, res) => {
  if (!checkRateLimit(req.ip)) return res.status(429).json({ error: 'Of margar sendingar - reyndu aftur síðar.' });
  try {
    const { name = '', email = '', phone = '', date = '', time = '', carId = '', carName = '' } = req.body || {};
    if (!name || !(email || phone)) return res.status(400).json({ error: 'Vantar nafn og netfang/símanúmer.' });
    const text = `Ný bókun á skoðun af bilsk.is\n\nNafn: ${name}\nNetfang: ${email}\nSímanúmer: ${phone}\nBíll: ${carName ? carName + ' (' + carId + ')' : '-'}\nDagsetning: ${date}\nTímasetning: ${time}`;
    const html = emailWrapper('Ný bókun á skoðun af bilsk.is',
      emailRow('Nafn', name) + emailRow('Netfang', email) + emailRow('Símanúmer', phone) + emailRow('Bíll', carName ? carName + ' (' + carId + ')' : '-') + emailRow('Dagsetning', date) + emailRow('Tímasetning', time));
    await sendMail({ subject: `Bókun á skoðun - ${carName || 'bíll'} - Bílskúrinn`, text, html, replyTo: email, fromName: 'bilsk.is (bókun)' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[/api/booking] villa:', err.message);
    res.status(502).json({ error: 'Gat ekki sent bókun.' });
  }
});

app.post('/api/import', async (req, res) => {
  if (!checkRateLimit(req.ip)) return res.status(429).json({ error: 'Of margar sendingar - reyndu aftur síðar.' });
  try {
    const {
      fullName = '', email = '', phone = '', make = '', model = '', year = '',
      budget = '', fuel = '', mileage = '', color = '', desc = '',
    } = req.body || {};
    if (!fullName || !(email || phone)) return res.status(400).json({ error: 'Vantar nafn og netfang/símanúmer.' });
    const text = `Ný innflutningsbeiðni af bilsk.is\n\nFullt nafn: ${fullName}\nNetfang: ${email}\nSímanúmer: ${phone}\nTegund: ${make}\nModel: ${model}\nÁrgerð: ${year}\nVerð hugmynd: ${budget ? budget + ' kr.' : ''}\nEldsneyti: ${fuel}\nKeyrður: ${mileage}\nÆskilegur litur: ${color}\n\nLýsing:\n${desc}`;
    const html = emailWrapper('Ný innflutningsbeiðni af bilsk.is',
      emailRow('Fullt nafn', fullName) + emailRow('Netfang', email) + emailRow('Símanúmer', phone) + emailRow('Tegund', make) + emailRow('Model', model) + emailRow('Árgerð', year) + emailRow('Verð hugmynd', budget ? budget + ' kr.' : '') + emailRow('Eldsneyti', fuel) + emailRow('Keyrður', mileage) + emailRow('Æskilegur litur', color),
      'Lýsing', desc);
    await sendMail({ subject: 'Innflutningsbeiðni - Bílskúrinn', text, html, replyTo: email, fromName: 'bilsk.is (innflutningur)' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[/api/import] villa:', err.message);
    res.status(502).json({ error: 'Gat ekki sent innflutningsbeiðni.' });
  }
});

app.post('/api/sell', upload.array('photos', 20), async (req, res) => {
  if (!checkRateLimit(req.ip)) return res.status(429).json({ error: 'Of margar sendingar - reyndu aftur síðar.' });
  try {
    const {
      fullName = '', email = '', phone = '', plate = '', make = '', model = '',
      year = '', mileage = '', price = '', extra = '',
    } = req.body || {};
    if (!fullName || !(email || phone)) return res.status(400).json({ error: 'Vantar nafn og netfang/símanúmer.' });
    const files = req.files || [];
    const text = `Ný sölubeiðni af bilsk.is\n\nFullt nafn: ${fullName}\nNetfang: ${email}\nSímanúmer: ${phone}\nFastanúmer/bílnúmer: ${plate}\nTegund: ${make}\nModel: ${model}\nÁrgerð: ${year}\nAkstur: ${mileage ? mileage + ' km.' : ''}\nÓskað verð: ${price ? price + ' kr.' : ''}\nFjöldi mynda: ${files.length}\n\nViðbótarupplýsingar:\n${extra}`;
    const html = emailWrapper('Ný sölubeiðni af bilsk.is',
      emailRow('Fullt nafn', fullName) + emailRow('Netfang', email) + emailRow('Símanúmer', phone) + emailRow('Fastanúmer/bílnúmer', plate) + emailRow('Tegund', make) + emailRow('Model', model) + emailRow('Árgerð', year) + emailRow('Akstur', mileage ? mileage + ' km.' : '') + emailRow('Óskað verð', price ? price + ' kr.' : '') + emailRow('Fjöldi mynda', String(files.length)),
      'Viðbótarupplýsingar', extra);
    const attachments = files.map((f) => ({ filename: f.originalname, content: f.buffer }));
    await sendMail({ subject: 'Beiðni um sölu á bíl - Bílskúrinn', text, html, attachments, replyTo: email, fromName: 'bilsk.is (sala)' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[/api/sell] villa:', err.message);
    res.status(502).json({ error: 'Gat ekki sent sölubeiðni.' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Bílskúrinn bakendi keyrir á http://localhost:${PORT}`);
});
