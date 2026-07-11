# Bílskúrinn – bakendi fyrir henry.rogg API

Þessi litla Node/Express þjónusta stendur á milli vefsíðunnar og henry.rogg
XML-straumsins. Hún geymir APIKEY á öruggan hátt og skilar bílalistanum sem
JSON á `/api/cars` og `/api/cars/:id`.

## Af hverju þarf þetta yfir höfuð?

henry.rogg krefst APIKEY í hverri fyrirspurn og hvítlistar IP-tölu
netþjónsins sem má nota lykilinn. Vafri hvers gests hefur sína eigin IP og
getur ekki sent lykilinn beint - þess vegna þarf einn miðlægan netþjón sem
talar við Henry og vefsíðan talar svo við hann.

## Uppsetning

1. `npm install`
2. Afrita `.env.example` í `.env` og fylla út `HENRY_API_URL` og
   `HENRY_API_KEY` þegar þau liggja fyrir (sjá "Næstu skref" hér að neðan).
3. `npm start` – þjónninn keyrir þá á `http://localhost:3000`.

## Staða þessarar útgáfu

Þetta er vinnsluútgáfa (scaffold), ekki fullkláruð tenging. Í `server.js` eru
merkt `TODO` atriði sem þarf að laga út frá **raunverulegu** XML-skjali
Henry/Rögg þegar það er borið saman við alvöru svar frá API-inu:

- Nákvæm slóð straumsins (`HENRY_API_URL`).
- Hvort APIKEY fer í haus (header), query-param eða hvort tveggja.
- Nákvæm reitanöfn í XML-inu (t.d. `Make`/`Model` vs. önnur nöfn) svo
  `mapVehicle()` skili réttum gögnum.

Einfaldasta leiðin til að klára þetta: vista eitt raunverulegt XML-svar sem
`backend/sample-response.xml` og biðja um að reitirnir séu uppfærðir út frá því.

## Næstu skref hjá Henry/Rögg

Samkvæmt lýsingunni sem þú fékkst:

1. Henry þarf fasta IP-tölu netþjónsins áður en hægt er að opna reikning og fá
   APIKEY útgefið. Þess vegna þarf að velja hýsingu **áður** en hægt er að
   klára skráninguna (sjá að neðan).
2. Mánaðargjald fyrir API-aðgang er 3.000 kr + VSK.
3. Myndir á ekki að sækja/hýsa sjálf - `image` reiturinn í JSON-svarinu okkar
   er þegar bara slóð sem vísar beint á Henry, alveg eins og núverandi
   frumgerð gerir með Unsplash-slóðirnar.
4. API-ið er hannað fyrir beina/rauntíma tengingu, ekki reglubundna
   "polling". Þess vegna er sjálfgefið skyndiminni (`CACHE_TTL_SECONDS`) stutt
   (30 sek.) og eingöngu til að milda álagstoppa - ekki til að geyma gögn lengi.

## Hýsing – lykilatriði

Henry hvítlistar IP-tölu, sem þýðir að hýsingin verður að hafa **fasta
(static) útgangs-IP-tölu**. Það útilokar "venjulega" ókeypis hýsingu hjá t.d.
Vercel/Netlify (þar er útgangs-IP breytileg nema keypt sé sérstök viðbót).

Einfaldast: lítill VPS (t.d. DigitalOcean, Hetzner) þar sem bæði
Node-bakendinn og static-síðurnar keyra - þá er IP-talan föst frá byrjun og
hægt að senda hana á Henry strax.
