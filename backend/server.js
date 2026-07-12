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

async function fetchHenryFeed() {
  const now = Date.now();
  if (cache.data && now - cache.fetchedAt < CACHE_TTL) {
    return cache.data;
  }

  const url = process.env.HENRY_API_URL;
  const apiKey = process.env.HENRY_API_KEY;
  if (!url || !apiKey || url.includes('xml-feed-url-hér') || apiKey.includes('set-inn')) {
    throw new Error(
      'HENRY_API_URL / HENRY_API_KEY er ekki stillt ennþá. Fylltu út .env (sjá .env.example).'
    );
  }

  // TODO: staðfesta hvort APIKEY á að fara í header, query-param eða body.
  // Algengast hjá svona feed-um er annað af þessu tvennu:
  //   1) Header:      Authorization: Bearer <APIKEY>   (eða X-API-Key)
  //   2) Query-param: ?apikey=<APIKEY>&dealerId=<HENRY_DEALER_ID>
  // Núna er gert ráð fyrir query-param + header samtímis - fjarlægðu það sem á ekki við.
  const dealerId = process.env.HENRY_DEALER_ID || '';
  const requestUrl = `${url}${url.includes('?') ? '&' : '?'}apikey=${encodeURIComponent(apiKey)}${dealerId ? `&dealerId=${encodeURIComponent(dealerId)}` : ''}`;

  const res = await fetch(requestUrl, {
    headers: {
      'X-API-Key': apiKey,
      Accept: 'application/xml, text/xml',
    },
  });

  if (!res.ok) {
    throw new Error(`Henry API skilaði villu: ${res.status} ${res.statusText}`);
  }

  const xml = await res.text();
  const json = parser.parse(xml);

  cache = { data: json, fetchedAt: now };
  return json;
}

// Umbreytir einni bíla-færslu úr Henry XML-inu yfir í sniðið sem
// framendinn (script.js -> carCard/renderDetail) notar nú þegar:
// { id, name, year, km, fuel, gear, price, brand, body, image, features }
function mapVehicle(raw) {
  // TODO: Reitanöfnin hér (raw.Id, raw.Make o.s.frv.) eru ágiskun byggð á
  // algengum bílasölu-feed-um. Uppfæra um leið og raunverulegt XML-svar
  // liggur fyrir - einfaldast er að vista eitt raunverulegt svar í
  // backend/sample-response.xml og bera saman reitanöfn.
  const images = [].concat(raw.Images?.Image || raw.Photos?.Photo || []);
  const firstImage = (Array.isArray(images) ? images[0] : images) || null;

  return {
    id: String(raw.Id ?? raw['@_id'] ?? raw.RegNumber ?? ''),
    name: [raw.Make, raw.Model, raw.Variant].filter(Boolean).join(' '),
    year: Number(raw.Year || raw.ModelYear || 0),
    km: Number(raw.Mileage || raw.Km || 0),
    fuel: raw.FuelType || raw.Fuel || '',
    gear: raw.Transmission || raw.Gear || '',
    price: Number(raw.Price || raw.SalePrice || 0),
    brand: raw.Make || '',
    body: raw.BodyType || raw.Body || '',
    image: (typeof firstImage === 'string' ? firstImage : firstImage?.['#text']) || null,
    features: [].concat(raw.Equipment?.Item || raw.Features?.Feature || []).filter(Boolean),
  };
}

app.get('/api/cars', async (req, res) => {
  try {
    const feed = await fetchHenryFeed();
    // TODO: leiðin niður að listanum af bílum (feed.Vehicles.Vehicle) fer eftir
    // raunverulegu XML-skema. Uppfæra þegar það liggur fyrir.
    const rawList = [].concat(
      feed?.Vehicles?.Vehicle || feed?.vehicles?.vehicle || feed?.Cars?.Car || []
    );
    const cars = rawList.map(mapVehicle).filter((c) => c.id);
    res.json(cars);
  } catch (err) {
    console.error('[/api/cars] villa:', err.message);
    res.status(502).json({ error: 'Gat ekki sótt bíla frá Henry API', detail: err.message });
  }
});

app.get('/api/cars/:id', async (req, res) => {
  try {
    const feed = await fetchHenryFeed();
    const rawList = [].concat(
      feed?.Vehicles?.Vehicle || feed?.vehicles?.vehicle || feed?.Cars?.Car || []
    );
    const car = rawList.map(mapVehicle).find((c) => c.id === req.params.id);
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
