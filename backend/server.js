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

const app = express();
const PORT = process.env.PORT || 3000;
const CACHE_TTL = Number(process.env.CACHE_TTL_SECONDS || 30) * 1000;

app.use(cors());

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

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Bílskúrinn bakendi keyrir á http://localhost:${PORT}`);
});
