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

## Sjálfvirk tölvupóstsending fyrir eyðublöð (fyrirspurn/bókun/sala/innflutningur)

Í stað þess að opna tölvupóstforrit notandans (`mailto:`), sendir bakendinn nú
sjálfur tölvupóst á `bilskurinn@bilsk.is` þegar notandi sendir inn eyðublað á
síðunni.

Ný endapunktar sem eyðublöðin á síðunni senda nú á (í stað mailto:):
`POST /api/inquiry`, `POST /api/booking`, `POST /api/sell` (með myndaviðhengjum),
`POST /api/import`. Einföld IP-byggð hraðatakmörkun (mest 10 sendingar á 15 mín.
á hverja IP) er innbyggð til að verjast ruslsendingum.

Þetta keyrir í gegnum Gmail/Google Workspace SMTP.

Uppsetning (þarf að gera einu sinni):

1. Skráðu þig inn á `bilskurinn@bilsk.is` hjá Google (admin.google.com eða
   venjulegt Gmail-viðmót).
2. Kveiktu á 2-þátta staðfestingu (2-Step Verification) á reikningnum, ef hún
   er ekki þegar virk - Google leyfir ekki App Passwords án hennar.
3. Farðu á https://myaccount.google.com/apppasswords og búðu til nýtt
   "App Password" (t.d. merkt "Bílskúrinn vefsíða").
4. Afritaðu 16 stafa lykilorðið sem birtist og settu í `.env` á netþjóninum:
   `EMAIL_USER=bilskurinn@bilsk.is` og `EMAIL_APP_PASSWORD=<16-stafa-lykillinn>`.
5. Endurræstu bakendann (`systemctl restart bilsk-backend`).

### Sérstakt sendanda-netfang (EMAIL_FROM)

Ef `bilskurinn@bilsk.is` sendir sjálfum sér tölvupóst birtist sendandinn alltaf
sem "me" í Gmail-innhólfinu, óháð því hvaða nafn er stillt - þetta er
Gmail-sértæk hegðun sem ekki er hægt að sniðganga með tölvupóstahausum einum
saman, líka þótt `EMAIL_FROM` sé stillt á samnefni eins og
`fyrirspurnir@bilsk.is` (Gmail þekkir öll "Send As" samnefni sem "sitt eigið"
netfang). **Þetta er samþykkt hegðun fyrir þennan vef** - efni póstsins
(efnislína, feitletruð svæði) sýnir samt skýrt hvers eðlis erindið er.

Ef einhvern tímann á að losna alveg við "me" þarf að senda póstinn í gegnum
utanaðkomandi þjónustu eins og Resend (https://resend.com) í stað Gmail SMTP -
þá kemur pósturinn inn sem alvöru utanaðkomandi póstur. Það krefst þess að
staðfesta lénið `bilsk.is` hjá þeirri þjónustu (nokkrar DNS-færslur til
viðbótar) og breyta `EMAIL_HOST`/`EMAIL_USER`/`EMAIL_APP_PASSWORD` í `.env`.

1. Skráðu þig inn á `bilskurinn@bilsk.is` hjá Gmail.
2. Farðu í **Settings (tannhjólið) → See all settings → Accounts and Import**.
3. Undir "Send mail as" - smelltu á **Add another email address**.
4. Sláðu inn `fyrirspurnir@bilsk.is` (eða hvaða heiti sem er valið) og fylgdu
   staðfestingarskrefunum (Gmail sendir staðfestingarpóst - af því allt er
   sama pósthólf berst hann sjálfkrafa).
5. Settu `EMAIL_FROM=fyrirspurnir@bilsk.is` í `.env` á netþjóninum og
   endurræstu bakendann (`systemctl restart bilsk-backend`).

Ný endapunktar sem eyðublöðin á síðunni senda nú á (í stað mailto:):
`POST /api/inquiry`, `POST /api/booking`, `POST /api/sell` (með myndaviðhengjum),
`POST /api/import`. Einföld IP-byggð hraðatakmörkun (mest 10 sendingar á 15 mín.
á hverja IP) er innbyggð til að verjast ruslsendingum.

## Hýsing – lykilatriði

Henry hvítlistar IP-tölu, sem þýðir að hýsingin verður að hafa **fasta
(static) útgangs-IP-tölu**. Það útilokar "venjulega" ókeypis hýsingu hjá t.d.
Vercel/Netlify (þar er útgangs-IP breytileg nema keypt sé sérstök viðbót).

Einfaldast: lítill VPS (t.d. DigitalOcean, Hetzner) þar sem bæði
Node-bakendinn og static-síðurnar keyra - þá er IP-talan föst frá byrjun og
hægt að senda hana á Henry strax.
