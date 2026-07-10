# Uppsetning á 1984 Hosting VPS - Bílskúrinn

Skref-fyrir-skref leiðbeiningar til að koma vefsíðunni og bakendanum í loftið
á 1984 Hosting, og flytja bilsk.is frá ja.is.

## 1. Panta VPS

Farið á https://1984.hosting/product/vps/ og veljið:

- **VPS #1** (1 GB RAM, 1 CPU, 25 GB diskur, 1 TB flutningur) - **1.642 kr/mán**.
  Dugar vel fyrir static síðu + lítinn Node-proxy. Hægt að stækka (upgrade)
  seinna ef appið eða umferð eykst mikið - engin binding.
- Ef þið viljið meira "swing" strax (t.d. fyrir bakenda appsins líka síðar):
  **VPS #2** (2 GB RAM) - 3.284 kr/mán.

Við uppsetningu (autoinstall) veljið **Ubuntu 24.04 LTS**.

Eftir að VPS-inn er tilbúinn fáið þið:
- Eina fasta IPv4-tölu (þetta er talan sem fer til Henry/Rögg).
- Root SSH-aðgang (notandanafn `root` + lykilorð/SSH-lykill sem þið stillið).

## 2. Fyrsta tenging og grunnuppsetning

```bash
ssh root@ÞITT.VPS.IP.TÖLU

apt update && apt upgrade -y
apt install -y nginx git curl ufw

# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Eldveggur - leyfa bara SSH, HTTP, HTTPS
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

## 3. Sækja verkefnið á netþjóninn

Einfaldast er að setja kóðann í Git (t.d. einkageymslu á GitHub/GitLab) og
klóna hann á netþjóninn - þá er auðvelt að uppfæra með `git pull` seinna.

```bash
mkdir -p /var/www/bilsk
cd /var/www/bilsk
git clone <slóð-á-geymsluna> .
```

(Ef þið eruð ekki komin með Git-geymslu, má líka `scp`/`rsync`-a möppuna
beint af tölvunni ykkar yfir á netþjóninn.)

## 4. Setja upp bakendann (Node/Express)

```bash
cd /var/www/bilsk/backend
npm install
cp .env.example .env
nano .env   # fylla út HENRY_API_URL og HENRY_API_KEY þegar þau liggja fyrir
```

Keyra bakendann sem `systemd`-þjónustu svo hann endurræsi sjálfkrafa ef
netþjóninn er endurræstur eða appið hrynur:

```bash
cat > /etc/systemd/system/bilsk-backend.service << 'EOF'
[Unit]
Description=Bílskúrinn API bakendi
After=network.target

[Service]
WorkingDirectory=/var/www/bilsk/backend
ExecStart=/usr/bin/node server.js
Restart=always
User=www-data
EnvironmentFile=/var/www/bilsk/backend/.env

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now bilsk-backend
systemctl status bilsk-backend
```

## 5. Nginx - þjóna static síðunni og senda /api/ áfram á bakendann

```bash
cat > /etc/nginx/sites-available/bilsk.is << 'EOF'
server {
    listen 80;
    server_name bilsk.is www.bilsk.is;

    root /var/www/bilsk;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
EOF

ln -s /etc/nginx/sites-available/bilsk.is /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
```

Á þessu stigi er hægt að prófa síðuna með því að fara beint á IP-töluna í
vafra (`http://ÞITT.VPS.IP.TÖLU`) - domain-ið vísar ennþá í ja.is.

## 6. Setja upp SSL (ókeypis, Let's Encrypt)

Þarf að bíða þangað til DNS (næsta skref) er farið að vísa á netþjóninn,
annars getur Let's Encrypt ekki staðfest lénið.

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d bilsk.is -d www.bilsk.is
```

SSL er nauðsynlegt hvort sem er fyrir farsímaappið síðar (iOS leyfir ekki
óöruggar http-tengingar).

## 7. Flytja lénið (bilsk.is) frá ja.is yfir á nýja netþjóninn

1. Skráið ykkur inn hjá ja.is eða þar sem lénið sjálft (ekki endilega
   hýsingin) er skráð.
2. Breytið **A-skránni** (DNS A record) fyrir `bilsk.is` og `www.bilsk.is`
   þannig að hún vísi á nýju IP-töluna hjá 1984.
3. DNS-breytingar taka yfirleitt 5 mín. - nokkrar klukkustundir að dreifast.
4. Þegar `bilsk.is` er farið að svara af nýja netþjóninum: keyra Certbot
   skrefið hér að ofan (skref 6) og svo segja upp ja.is-þjónustunni.

## 8. Senda IP-tölu á Henry/Rögg

Þegar netþjónninn er kominn upp og virkur: senda **fastu IPv4-töluna** frá
1984 á Henry/Rögg til að fá reikning stofnaðan og APIKEY útgefið
(mánaðargjald 3.000 kr + VSK skv. þeirra lýsingu). Þegar lykillinn berst:

```bash
nano /var/www/bilsk/backend/.env   # setja inn HENRY_API_KEY
systemctl restart bilsk-backend
```

## Til að uppfæra síðuna seinna

```bash
cd /var/www/bilsk
git pull
systemctl restart bilsk-backend   # ef backend-kóði breyttist
```

---

**Athugið:** `server.js` er ennþá með TODO-merkta hluta varðandi nákvæm
reitanöfn í XML-svari Henry (sjá `backend/README.md`). Þarf að uppfæra þá
um leið og alvöru API-svar liggur fyrir, óháð þessari hýsingaruppsetningu.
