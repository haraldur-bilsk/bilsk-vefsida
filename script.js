
// Sýnigögn - notuð sem varaleið (fallback) ef bakendinn/Henry API-ið er ekki tiltækt.
const FALLBACK_CARS = [{"id": "volvo-xc90", "name": "Volvo XC90 T8 Twin Engine", "year": 2017, "km": 127000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 5340000, "brand": "Volvo", "body": "Jeppi", "images": [], "features": ["T8 Twin Engine", "Fjórhjóladrif", "320 hö", "Loftpúðafjöðrun aftan", "Topplúga", "LED aðalljós", "Rafdrifið lok farangursrýmis", "Auka felgur"]}, {"id": "audi-q7", "name": "Audi Q7 S-Line V6 3.0 TDI", "year": 2011, "km": 205000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 2990000, "brand": "Audi", "body": "Jeppi", "images": [], "features": ["S-Line", "3.0 TDI", "245 hö", "Dráttarkrókur", "20” felgur", "Xenon aðalljós", "Leður / rúskinn", "Rafdrifið lok farangursrýmis"]}, {"id": "kia-sorento", "name": "Kia Sorento", "year": 2015, "km": 259000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 1710000, "brand": "Kia", "body": "Jeppi", "images": [], "features": ["Sjálfskipting 6 gírar", "Dísel", "Ljósgrár", "Skoðar skipti", "Næsta skoðun 2027", "Rúmgóður jeppi", "Gott fjölskyldurými", "Dráttarbíll kemur til greina í skiptum"]}, {"id": "skoda-octavia", "name": "Skoda Octavia Style", "year": 2021, "km": 43000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 4490000, "brand": "Skoda", "body": "Stakbygging", "images": ["assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/738937332_1376508987666295_191786686337846129_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/736658817_1024515713773236_2668315749182098150_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/737412487_4537435346474428_6022380043726991640_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/736225163_1500278364642547_24913917069913652_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/736007697_1968579037187703_2273946332895481692_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/739773748_1045141388028436_6550935095436268629_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/736942996_2848938678798959_7829627848781086895_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/738916212_27415229404824574_3871634742522790095_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/736454990_1005579938852880_4737910753869013257_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/735376772_1681069899831015_6052149635126538099_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/741275183_1698486748095243_2294859716680492904_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/738334950_1701737227727846_7049946450472404030_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/735286773_2001322990589151_3792529259784181956_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/739066250_1697272924658841_1637395881766025057_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/741619833_1697548231369757_7632195968533861719_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/741379436_1533579338506227_5084178638757994594_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/738261293_1339666464964748_1801486715105212624_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/735786279_1344157537869125_3290786359446157159_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/740544250_2060655907993240_1026605077887342137_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/734931980_1753123932365320_4909420792431459948_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/734896404_1367200511959234_1801676738103525558_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/736225163_2554849154957503_7458702278466643833_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/739773748_2181472355967986_5198416376033731383_n.jpg","assets/7-Júlí-Myndir/Skoda-Octavia-07.07.26/739066247_1389025739799412_2152789168531349309_n.jpg"], "features": ["Style útgáfa", "Plug-in Hybrid", "Á staðnum", "43.000 km", "Grár", "Verð áður 4.890.000 kr.", "Næsta skoðun 2027", "Flott verð"]}, {"id": "ford-ecosport", "name": "Ford EcoSport", "year": 2019, "km": 106000, "fuel": "Dísel", "gear": "Beinskipting", "price": 1590000, "brand": "Ford", "body": "Jeppi", "images": [], "features": ["Dísel", "Beinskipting 6 gírar", "Ljósgrár", "106.000 km", "Verð áður 1.790.000 kr.", "Næsta skoðun 2027", "Hagkvæmur jeppi", "Flott verð"]}, {"id": "mercedes-c350e", "name": "Mercedes-Benz C 350 E", "year": 2017, "km": 86000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 3790000, "brand": "Mercedes-Benz", "body": "Sedan", "images": [], "features": ["Plug-in Hybrid", "Sjálfskipting 7 gírar", "Svartur", "86.000 km", "Næsta skoðun 2027", "Premium sedan", "Góður búnaður", "Þægilegur akstur"]}, {"id": "mazda-6", "name": "Mazda 6 Skyactiv G", "year": 2019, "km": 51000, "fuel": "Bensín", "gear": "Sjálfskipting", "price": 3790000, "brand": "Mazda", "body": "Sedan", "images": [], "features": ["Skyactiv G", "Sjálfskipting 6 gírar", "Dökkgrár", "51.000 km", "Verð áður 4.190.000 kr.", "Næsta skoðun 2027", "Flott verð", "Vel búinn"]}, {"id": "kia-rio", "name": "Kia Rio", "year": 2017, "km": 185000, "fuel": "Dísel", "gear": "Beinskipting", "price": 1180000, "brand": "Kia", "body": "Hatchback", "images": [], "features": ["Dísel", "Beinskipting 6 gírar", "Hvítur", "185.000 km", "90 hö", "1.396 cc", "Álfelgur", "Næsta skoðun 2027"]}, {"id": "mitsubishi-outlander", "name": "Mitsubishi Outlander Plug-in Hybrid", "year": 2018, "km": 161000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 2190000, "brand": "Mitsubishi", "body": "Jeppi", "images": ["assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8227.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8223.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8221.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8217.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8218.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8224.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8219.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8215.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8225.JPEG","assets/4-Apríl-Myndir/Mitshubishi-outlander-29.04.26/IMG_8222.JPEG"], "features": ["Plug-in Hybrid", "Fjórhjóladrif", "Sjálfskipting", "161.000 km", "Árgerð 2018"]}, {"id": "mercedes-e350", "name": "Mercedes-Benz E 350 AMG Line", "year": 2017, "km": 130000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 3990000, "brand": "Mercedes-Benz", "body": "Sedan", "images": ["assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-0.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-1.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-2.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-3.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-4.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-5.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-6.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-7.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-8.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-9.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-10.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-11.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-12.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-13.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-14.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-15.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-16.jpg","assets/4-Apríl-Myndir/Mercedes-BenzE-25.04.26/Vehicle-683763_Photo-17.jpg"], "features": ["AMG Line", "Bensín/Rafmagn tvinnbíll", "211 hö", "Afturhjóladrif", "Sjálfskipting", "Lúxus útgáfa", "130.000 km"]}, {"id": "renault-megane", "name": "Renault Megane", "year": 2018, "km": 126000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 1090000, "brand": "Renault", "body": "Hatchback", "images": ["assets/4-Apríl-Myndir/Renault-Megan-30.04.26/681073271_26655038400803846_245918751003072292_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/680373263_978318364850001_2794144704871660288_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/680244074_1670222344110303_4425207450172710868_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/680729449_1756026535380906_1169889388354655571_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/679847956_947044011372385_5706775963570368283_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/682426296_2923015068090038_7480103551411487621_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/676083959_825951916768434_1602510866402227227_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/682417685_1580282633049550_82364101201789457_n.jpg","assets/4-Apríl-Myndir/Renault-Megan-30.04.26/680635819_1614088989663511_4211623890088200040_n.jpg"], "features": ["Dísel", "Sjálfskipting", "110 hö", "Framhjóladrif", "Verð áður 1.390.000 kr.", "126.000 km"]}, {"id": "honda-jazz", "name": "Honda Jazz", "year": 2014, "km": 76000, "fuel": "Bensín", "gear": "Sjálfskipting", "price": 1050000, "brand": "Honda", "body": "Hatchback", "images": ["assets/5-Maí-Myndir/Honda-Jazz-01.05.26/FB_IMG_1686146622188.jpg","assets/5-Maí-Myndir/Honda-Jazz-01.05.26/FB_IMG_1686146586238.jpg","assets/5-Maí-Myndir/Honda-Jazz-01.05.26/FB_IMG_1686146610499.jpg","assets/5-Maí-Myndir/Honda-Jazz-01.05.26/FB_IMG_1686146603552.jpg","assets/5-Maí-Myndir/Honda-Jazz-01.05.26/FB_IMG_1686146563769.jpg","assets/5-Maí-Myndir/Honda-Jazz-01.05.26/FB_IMG_1686146573123.jpg"], "features": ["Bensín", "Sjálfskipting", "100 hö", "Framhjóladrif", "76.000 km"]}, {"id": "citroen-ec4", "name": "Citroën ë-C4", "year": 2022, "km": 42000, "fuel": "Rafmagn", "gear": "Sjálfskipting", "price": 2950000, "brand": "Citroen", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/689329711_1924014881609776_1196660514980913051_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/687641442_969133075857002_1117828284789765543_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/690993547_1002784982428386_2945083536553797927_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/687040865_1064413260096423_7993291805097095554_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/695557009_1515844786738550_8356627690858459688_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/690035707_831731986672581_402089567519802892_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/687763195_2751470675230173_4713212530290493340_n.jpg","assets/5-Maí-Myndir/Citroen-E-C4-11.05.26/687645052_998882626157110_4022919441779652482_n.jpg"], "features": ["Rafmagn", "Sjálfskipting", "42.000 km", "Árgerð 2022"]}, {"id": "audi-etron50", "name": "Audi e-tron 50", "year": 2020, "km": 82000, "fuel": "Rafmagn", "gear": "Sjálfskipting", "price": 4290000, "brand": "Audi", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Audi-Etron-11.05.26/691275239_1291817456391653_5000732472598207692_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/691192353_982628080925922_5297764859514494607_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/689671303_1218301280220271_2165435188090663819_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/691843621_1949856652322680_6283738695623623425_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/686418065_1372094738026682_2492725531429766010_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/695814728_851549537442454_9118919759428646047_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/687893082_1339457811581410_3551271320293984312_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/687789280_4391356117772796_2574288341076791536_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/686161137_1118976383778460_8441185953156231371_n.jpg","assets/5-Maí-Myndir/Audi-Etron-11.05.26/692794050_1004778049155652_743595383833134128_n.jpg"], "features": ["Rafmagn", "Sjálfskipting", "Afturhjóladrif", "82.000 km", "Árgerð 2020"]}, {"id": "mazda-cx5", "name": "Mazda CX-5", "year": 2015, "km": 180000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 1790000, "brand": "Mazda", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Mazda-CX5-07.05.26/15e9607f-521f-4946-aafd-e6a207ac0f23.jpeg","assets/5-Maí-Myndir/Mazda-CX5-07.05.26/70ef7f8e-3043-4231-8fb4-e86881214cc1.jpeg","assets/5-Maí-Myndir/Mazda-CX5-07.05.26/bdfc7107-ba7f-4901-b094-7c1d7c94083f.jpeg","assets/5-Maí-Myndir/Mazda-CX5-07.05.26/cdf9452e-0225-4563-a2d2-5efc99b40730.jpeg","assets/5-Maí-Myndir/Mazda-CX5-07.05.26/53d6fc8e-c8ae-4804-9485-c756ca51acf6.jpeg","assets/5-Maí-Myndir/Mazda-CX5-07.05.26/3fadd639-f240-4cce-8406-30aa314f76b4.jpeg"], "features": ["Dísel", "Sjálfskipting", "Fjórhjóladrif", "Verð áður 2.090.000 kr.", "180.000 km"]}, {"id": "mercedes-eqe350", "name": "Mercedes-Benz EQE 350", "year": 2024, "km": 30000, "fuel": "Rafmagn", "gear": "Sjálfskipting", "price": 9290000, "brand": "Mercedes-Benz", "body": "Sedan", "images": ["assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/710585632_989760107165699_4402885065429082256_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/709445496_4585662681758565_1771462584067482753_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/710907964_1729652281567322_5277288410510873999_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/689856334_1012021338059763_8433994277733266694_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/710536699_839363308848611_7626023366111584030_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/711005163_996286802981666_145478040489246799_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/713223124_27333079289619091_6927759942859788155_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/709505537_1264381315512893_7173206707383482381_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/710756426_2065213574065464_6505315092090751606_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/711095367_26837952232543581_7805171891380146617_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/710201543_868080673004711_5164307867590620761_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/712863149_2214229299512479_984926605651166904_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/713323200_1019106727125775_1157573456064059053_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/712356326_974241878560877_2855683675414110651_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/712306485_2061148897769938_1922591513769835116_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/714630379_27298951969742576_7682324171035807303_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/711045164_1027863159574038_4067225035706621330_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/710306400_1369448165024179_5294910438991100018_n.jpg","assets/6-Juní-Myndir/Mercedes-Benz-EQE-02.06.26/712823131_1320892616665189_8158311080628572525_n.jpg"], "features": ["Rafmagn", "Sjálfskipting", "Afturhjóladrif", "Lúxus rafbíll", "30.000 km", "Árgerð 2024"]}, {"id": "dodge-ram3500", "name": "Dodge Ram 3500 Laramie MegaCab", "year": 2025, "km": 26000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 12800000, "brand": "Dodge", "body": "Pallbíll", "inStock": true, "images": ["assets/6-Juní-Myndir/Ram-3500-03.06.26/709425541_1040371555085137_4205206783672197822_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/708951424_1310587083927341_113157046521908634_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/708436656_1849604382665809_7629652221283081800_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/708852651_27230189666600484_7996574555619695860_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/709565501_1765920718181657_4663865438429440408_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/708516963_2130612994338419_709269284972575704_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/713223129_1811644383547319_7405087177773671881_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/705957068_2512558162528479_7356489878830784605_n.jpg","assets/6-Juní-Myndir/Ram-3500-03.06.26/705957068_1336673098389225_3809739388049895323_n.jpg"], "features": ["Dísel", "Fjórhjóladrif", "Laramie MegaCab", "26.000 km", "Árgerð 2025", "Verð án VSK"]}, {"id": "peugeot-2008", "name": "Peugeot 2008 E GT-Line", "year": 2022, "km": 49000, "fuel": "Rafmagn", "gear": "Sjálfskipting", "price": 2890000, "brand": "Peugeot", "body": "Jeppi", "images": ["assets/7-Júlí-Myndir/Peugeot-2008-01.07.26/2f34c69c-d386-4070-9906-48985987d3d5.jpeg","assets/7-Júlí-Myndir/Peugeot-2008-01.07.26/23d8c87c-c738-4d31-9c61-9144166e5b61.jpeg","assets/7-Júlí-Myndir/Peugeot-2008-01.07.26/95af99cf-1ab9-440e-b28e-f2cd277bd8b4.jpeg","assets/7-Júlí-Myndir/Peugeot-2008-01.07.26/24b20f07-14e7-42bc-a6c1-9ccbf18732bf.jpeg"], "features": ["Rafmagn", "Sjálfskipting", "GT-Line útgáfa", "Verð áður 3.190.000 kr.", "49.000 km"]}, {"id": "landrover-defender", "name": "Land Rover Defender", "year": 2019, "km": 95000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 8900000, "brand": "Land Rover", "body": "Jeppi", "images": ["assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/680955822_1000116556045499_1608487044315691400_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/682306469_2076437746421125_7114839135449913037_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/678751352_1579804059773331_1231384196867097044_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/682393725_1988926601987070_9157302228655966034_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/681012921_3646265322180553_7116022087763224090_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/685760068_854512470308684_571003949800789097_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/678379756_3954531951521827_7977907475745562738_n.jpg","assets/4-Apríl-Myndir/LandRover-Defender-29.04.26/681236044_2089401861629044_638206313544832481_n.jpg"], "features": ["Dísel", "Sjálfskipting", "Fjórhjóladrif", "95.000 km"]}, {"id": "toyota-highlander", "name": "Toyota Highlander", "year": 2021, "km": 68000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 6200000, "brand": "Toyota", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Toyota-Highlander-08.05.2026/689568950_2628789554181421_8983230848268906585_n.jpg","assets/5-Maí-Myndir/Toyota-Highlander-08.05.2026/692070247_945092955107196_7695322065845679454_n.jpg","assets/5-Maí-Myndir/Toyota-Highlander-08.05.2026/688989281_974390588672482_6770584641830461839_n.jpg","assets/5-Maí-Myndir/Toyota-Highlander-08.05.2026/689204740_1522631359212334_7551076628138189698_n.jpg","assets/5-Maí-Myndir/Toyota-Highlander-08.05.2026/685071221_991951126703432_8284393163199953736_n.jpg","assets/5-Maí-Myndir/Toyota-Highlander-08.05.2026/690648641_1842102949790000_8096815749600654013_n.jpg"], "features": ["Bensín/Rafmagn tvinnbíll", "Sjálfskipting", "68.000 km"]}, {"id": "ssangyong-tivoli", "name": "SsangYong Tivoli", "year": 2020, "km": 72000, "fuel": "Bensín", "gear": "Sjálfskipting", "price": 2450000, "brand": "SsangYong", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/SSangYong-Tivoli-13.05.26/676284849_1021971866968101_547153098023034043_n.jpg","assets/5-Maí-Myndir/SSangYong-Tivoli-13.05.26/677922857_1517659396590911_4181929713361785334_n.jpg","assets/5-Maí-Myndir/SSangYong-Tivoli-13.05.26/676291776_813814614737051_5656727296947958658_n.jpg","assets/5-Maí-Myndir/SSangYong-Tivoli-13.05.26/675923642_1482703432990701_3713600671223860398_n.jpg","assets/5-Maí-Myndir/SSangYong-Tivoli-13.05.26/675994287_1624511065306299_1074603357926852294_n.jpg","assets/5-Maí-Myndir/SSangYong-Tivoli-13.05.26/678825781_1522625789479138_3490531212902737656_n.jpg"], "features": ["Bensín", "Sjálfskipting", "72.000 km"]}, {"id": "audi-q5", "name": "Audi Q5", "year": 2019, "km": 88000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 5690000, "brand": "Audi", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Audi-Q5-15.05.26/666511113_1738763037482978_2198984773218002331_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/691907291_2182522569252352_8654273029718044445_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/693788066_1469179854940019_207095211138512601_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/690790602_1333955825258647_1705576848965859143_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/695038563_1747100172928193_8352595429511185436_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/692861473_1298986741857565_6893120844146722317_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/690820992_1892286451490109_8167359862903168976_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/690865749_1575409621041571_223872161744558563_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/668124644_1649927349618521_3148895524552042031_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/699593985_2234102037418589_2155587763426725417_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/699760570_2466227507187614_612130438139305146_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/690933083_1012229437922528_8704981191210143306_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/691058979_962354583075925_8032515021541775507_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/672845791_989708453474553_1816440554785906360_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/696504927_1598709871231597_8285749245799468684_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/671727260_2175042083283181_2227190647828987970_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/694105481_1027329496288138_2674370532874319680_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/689896630_3545171258964724_5587754365395754371_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/685717321_2237961580294275_5388117805698610505_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/690676104_970103125432205_1567369240830459553_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/694121338_991416720497648_4078862770804822720_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/689273518_1852069402114054_5755214692722693408_n.jpg","assets/5-Maí-Myndir/Audi-Q5-15.05.26/693370204_991863020206692_6483490265096300820_n.jpg"], "features": ["Dísel", "Sjálfskipting", "Fjórhjóladrif", "88.000 km"]}, {"id": "tesla-models", "name": "Tesla Model S", "year": 2021, "km": 65000, "fuel": "Rafmagn", "gear": "Sjálfskipting", "price": 7990000, "brand": "Tesla", "body": "Sedan", "images": ["assets/6-Juní-Myndir/Tesla-Model-S-01.06.26/A501B7A5-7541-49DB-A487-D698103D9A07.png","assets/6-Juní-Myndir/Tesla-Model-S-01.06.26/CF9BF9D8-0D74-4596-8BA4-1EC315FDF8B0.JPEG"], "features": ["Rafmagn", "Sjálfskipting", "65.000 km"]}, {"id": "toyota-landcruiser250", "name": "Toyota Land Cruiser 250", "year": 2024, "km": 15000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 13900000, "brand": "Toyota", "body": "Jeppi", "images": ["assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640521.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640523.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640524.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640525.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640526.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640527.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640526 (1).png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640527 (1).png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640528.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640529.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-6405210.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-6405211.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-6405212.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-54220Genuine leather black.jpg","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-640521 (1).png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-704131.png","assets/6-Juní-Myndir/Toyota-LandCruiser-250-01.06.26/toyota-land-cruiser-250-diesel-vx-720501.png"], "features": ["Dísel", "Sjálfskipting", "Fjórhjóladrif", "15.000 km", "Nýlegur"]}, {"id": "mazda-3", "name": "Mazda 3", "year": 2020, "km": 58000, "fuel": "Bensín", "gear": "Sjálfskipting", "price": 3390000, "brand": "Mazda", "body": "Hatchback", "images": ["assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1613.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1614.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1615.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1616.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1617.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1618.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1619.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1620.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1621.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1622.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1623.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1624.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1625.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1626.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1627.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1629.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1630.png","assets/7-Júlí-Myndir/Mazda-3-03.07.26/IMG_1631.png"], "features": ["Bensín", "Sjálfskipting", "58.000 km"]}, {"id": "skoda-superb", "name": "Skoda Superb", "year": 2019, "km": 102000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 3990000, "brand": "Skoda", "body": "Sedan", "images": ["assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687685693_976258574779723_6623516113461829785_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687105009_957887366946736_4467774865327125976_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687793263_27058582417104484_7590378127333455847_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687942754_1279971187136077_5051244757286643626_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/689828721_1504764868109447_7710320827285301017_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687676086_947882758056520_3519857691009148227_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687644686_1450251789762046_7206827797090164736_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/690953298_1690635311975952_6190534607877730678_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/691232993_1493002739149700_2294244486003072695_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/687800184_1741950326964416_5695531132101180077_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/686371370_26464717569895067_4977800475776816150_n.jpg","assets/5-Maí-Myndir/Skoda-Superb-11.05.26/691173992_771405425941095_7678382802827713324_n.jpg"], "features": ["Dísel", "Sjálfskipting", "102.000 km"]}, {"id": "vw-polo", "name": "Volkswagen Polo", "year": 2022, "km": 34000, "fuel": "Bensín", "gear": "Sjálfskipting", "price": 3290000, "brand": "Volkswagen", "body": "Hatchback", "images": ["assets/5-Maí-Myndir/VW-Polo-11.05.26/3015a77f-bd3c-44bf-a74d-77c25c51353f.jpeg","assets/5-Maí-Myndir/VW-Polo-11.05.26/b20f2049-66bc-452f-808d-ae60b24d770b.jpeg","assets/5-Maí-Myndir/VW-Polo-11.05.26/40f9be95-08c0-459c-a488-886fa8a6606b.jpeg","assets/5-Maí-Myndir/VW-Polo-11.05.26/fdd928ca-9b90-4bfb-a818-05894a213908.jpeg","assets/5-Maí-Myndir/VW-Polo-11.05.26/55f2bd0d-e328-4124-9a85-d9ba674025ae.jpeg","assets/5-Maí-Myndir/VW-Polo-11.05.26/9410843e-2e1c-4938-b468-009bb62e713d.jpeg","assets/5-Maí-Myndir/VW-Polo-11.05.26/813a7cd4-2a78-4cdb-a82c-e4912f7a3925.jpeg"], "features": ["Bensín", "Sjálfskipting", "34.000 km"]}, {"id": "toyota-landcruiser", "name": "Toyota Land Cruiser", "year": 2016, "km": 145000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 6490000, "brand": "Toyota", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/687279691_1243736670897179_1438926725015096096_n.png","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/693030247_1646944426580082_1014604077506749191_n.jpg","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/686471099_982058297873218_7451938003941452511_n.jpg","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/694335186_996853619543720_5728231074667543044_n.jpg","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/695033897_1343005857939439_107298989978923829_n.jpg","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/687614104_1578737426944408_914652727171907301_n.jpg","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/686437287_1282699357354883_9138750501323267526_n.jpg","assets/5-Maí-Myndir/Toyota-LandCruiser-11.05.26/687874357_1051581078046054_2500570052744462720_n.jpg"], "features": ["Dísel", "Sjálfskipting", "Fjórhjóladrif", "145.000 km"]}, {"id": "kia-sportage", "name": "Kia Sportage", "year": 2021, "km": 61000, "fuel": "Dísel", "gear": "Sjálfskipting", "price": 4780000, "brand": "Kia", "body": "Jeppi", "images": ["assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/739251854_2915677242102000_8949782964803454989_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/741395288_4523318047897745_5660123959747744640_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/739578459_2262252307929106_5462453487624850141_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/740601435_1034390559173848_6902586197981416248_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/740205670_1355002189455416_8638937005174873579_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/739790116_1688654175551758_4634469376881173598_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/737746300_1581912106844640_528703534895868887_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/739835425_1472719114897113_7765967637348153698_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/741509884_2400467207129491_6503376839753673095_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/738809033_1537902634694748_3731183772047652940_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/738142809_1018160007290118_1636391708150272282_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/739044601_1326120093002396_4273593189941715439_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/739155590_1464765748741990_1817334907798251859_n.jpg","assets/7-Júlí-Myndir/Kia-Sportage-06.07.26/740562696_1892571564772123_8040576592858056857_n.jpg"], "features": ["Dísel", "Sjálfskipting", "61.000 km"]}, {"id": "mercedes-glc", "name": "Mercedes-Benz GLC", "year": 2019, "km": 79000, "fuel": "Bensín/Rafmagn", "gear": "Sjálfskipting", "price": 5980000, "brand": "Mercedes-Benz", "body": "Jeppi", "images": ["assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/download.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/778c36d9-a21b-4580-b814-95dbbd6398c2.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/b453acf5-4368-4b9f-bba7-baba9151afeb.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/1436b9f2-d136-4028-b735-a1f7ba5e185e.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/76102c6a-f4a2-487a-ab50-1f9c77a4de0e.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/a44572cf-cc2e-4611-8a18-c9083feb6fe1.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/34de0959-aab4-485f-a2af-658c7a47480d.jpeg","assets/5-Maí-Myndir/Mercedes-BenzGLC-04.05.26/404531e4-6314-481e-bfec-55efe8a37dce.jpeg"], "features": ["Bensín/Rafmagn tvinnbíll", "Sjálfskipting", "79.000 km"]}, {"id":"bmw-x3-0","name":"BMW X3","year":2010,"km":158000,"fuel":"Bensín","gear":"Sjálfskipting","price":7480000,"brand":"BMW","body":"Jeppi","images":[],"features":["Bensín","Sjálfskipting","Grár","158.000 km"]}, {"id":"subaru-forester-1","name":"Subaru Forester","year":2021,"km":49000,"fuel":"Bensín","gear":"Beinskipting","price":2490000,"brand":"Subaru","body":"Jeppi","images":[],"features":["Bensín","Beinskipting","Rauður","49.000 km"]}, {"id":"mitsubishi-asx-2","name":"Mitsubishi ASX","year":2017,"km":53000,"fuel":"Bensín","gear":"Beinskipting","price":6460000,"brand":"Mitsubishi","body":"Stationbíll","images":[],"features":["Bensín","Beinskipting","Grár","53.000 km"]}, {"id":"mitsubishi-eclipse-cross-3","name":"Mitsubishi Eclipse Cross","year":2016,"km":49000,"fuel":"Dísel","gear":"Beinskipting","price":1360000,"brand":"Mitsubishi","body":"Pallbíll","images":[],"features":["Dísel","Beinskipting","Svartur","49.000 km"]}, {"id":"peugeot-308-4","name":"Peugeot 308","year":2016,"km":192000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":2840000,"brand":"Peugeot","body":"Hatchback","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Svartur","192.000 km"]}, {"id":"mitsubishi-asx-5","name":"Mitsubishi ASX","year":2024,"km":223000,"fuel":"Rafmagn","gear":"Beinskipting","price":1300000,"brand":"Mitsubishi","body":"Sedan","images":[],"features":["Rafmagn","Beinskipting","Silfurgrár","223.000 km"]}, {"id":"kia-optima-6","name":"Kia Optima","year":2015,"km":188000,"fuel":"Bensín","gear":"Sjálfskipting","price":4610000,"brand":"Kia","body":"Sedan","images":[],"features":["Bensín","Sjálfskipting","Dökkgrænn","188.000 km"]}, {"id":"mg-hs-7","name":"MG HS","year":2014,"km":86000,"fuel":"Dísel","gear":"Beinskipting","price":7490000,"brand":"MG","body":"Hatchback","images":[],"features":["Dísel","Beinskipting","Hvítur","86.000 km"]}, {"id":"peugeot-308-8","name":"Peugeot 308","year":2021,"km":88000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":1670000,"brand":"Peugeot","body":"Hatchback","images":[],"features":["Rafmagn","Sjálfskipting","Silfurgrár","88.000 km"]}, {"id":"subaru-outback-9","name":"Subaru Outback","year":2014,"km":98000,"fuel":"Dísel","gear":"Beinskipting","price":7240000,"brand":"Subaru","body":"Stationbíll","images":[],"features":["Dísel","Beinskipting","Blár","98.000 km"]}, {"id":"honda-civic-10","name":"Honda Civic","year":2012,"km":170000,"fuel":"Bensín","gear":"Beinskipting","price":2840000,"brand":"Honda","body":"Pallbíll","images":[],"features":["Bensín","Beinskipting","Dökkgrænn","170.000 km"]}, {"id":"honda-hr-v-11","name":"Honda HR-V","year":2012,"km":139000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":7320000,"brand":"Honda","body":"Sedan","images":[],"features":["Rafmagn","Sjálfskipting","Rauður","139.000 km"]}, {"id":"mitsubishi-outlander-12","name":"Mitsubishi Outlander","year":2020,"km":190000,"fuel":"Dísel","gear":"Sjálfskipting","price":1870000,"brand":"Mitsubishi","body":"Jeppi","images":[],"features":["Dísel","Sjálfskipting","Blár","190.000 km"]}, {"id":"skoda-karoq-13","name":"Skoda Karoq","year":2022,"km":8000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":6840000,"brand":"Skoda","body":"Sedan","images":[],"features":["Bensín/Rafmagn","Beinskipting","Rauður","8.000 km"]}, {"id":"peugeot-208-14","name":"Peugeot 208","year":2012,"km":230000,"fuel":"Dísel","gear":"Beinskipting","price":1970000,"brand":"Peugeot","body":"Pallbíll","images":[],"features":["Dísel","Beinskipting","Svartur","230.000 km"]}, {"id":"audi-a3-15","name":"Audi A3","year":2011,"km":173000,"fuel":"Bensín","gear":"Beinskipting","price":4400000,"brand":"Audi","body":"Sedan","images":[],"features":["Bensín","Beinskipting","Blár","173.000 km"]}, {"id":"dacia-jogger-16","name":"Dacia Jogger","year":2010,"km":189000,"fuel":"Bensín","gear":"Sjálfskipting","price":7430000,"brand":"Dacia","body":"Sedan","images":[],"features":["Bensín","Sjálfskipting","Hvítur","189.000 km"]}, {"id":"peugeot-3008-17","name":"Peugeot 3008","year":2021,"km":81000,"fuel":"Bensín","gear":"Beinskipting","price":6270000,"brand":"Peugeot","body":"Hatchback","images":[],"features":["Bensín","Beinskipting","Svartur","81.000 km"]}, {"id":"subaru-outback-18","name":"Subaru Outback","year":2010,"km":101000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":9700000,"brand":"Subaru","body":"Sedan","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Svartur","101.000 km"]}, {"id":"dacia-sandero-19","name":"Dacia Sandero","year":2011,"km":219000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":8510000,"brand":"Dacia","body":"Jeppi","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Silfurgrár","219.000 km"]}, {"id":"peugeot-308-20","name":"Peugeot 308","year":2018,"km":65000,"fuel":"Bensín","gear":"Sjálfskipting","price":6580000,"brand":"Peugeot","body":"Sedan","images":[],"features":["Bensín","Sjálfskipting","Silfurgrár","65.000 km"]}, {"id":"hyundai-i30-21","name":"Hyundai i30","year":2021,"km":147000,"fuel":"Dísel","gear":"Beinskipting","price":4000000,"brand":"Hyundai","body":"Hatchback","images":[],"features":["Dísel","Beinskipting","Hvítur","147.000 km"]}, {"id":"tesla-model-y-22","name":"Tesla Model Y","year":2014,"km":108000,"fuel":"Bensín","gear":"Beinskipting","price":9160000,"brand":"Tesla","body":"Sedan","images":[],"features":["Bensín","Beinskipting","Svartur","108.000 km"]}, {"id":"kia-optima-23","name":"Kia Optima","year":2013,"km":169000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":9150000,"brand":"Kia","body":"Jeppi","images":[],"features":["Bensín/Rafmagn","Beinskipting","Grár","169.000 km"]}, {"id":"volkswagen-tiguan-24","name":"Volkswagen Tiguan","year":2022,"km":52000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":1920000,"brand":"Volkswagen","body":"Stationbíll","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Hvítur","52.000 km"]}, {"id":"mg-zs-25","name":"MG ZS","year":2014,"km":130000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":3620000,"brand":"MG","body":"Pallbíll","images":[],"features":["Rafmagn","Sjálfskipting","Hvítur","130.000 km"]}, {"id":"kia-optima-26","name":"Kia Optima","year":2018,"km":213000,"fuel":"Rafmagn","gear":"Beinskipting","price":9240000,"brand":"Kia","body":"Sedan","images":[],"features":["Rafmagn","Beinskipting","Silfurgrár","213.000 km"]}, {"id":"mercedes-benz-b200-27","name":"Mercedes-Benz B200","year":2025,"km":222000,"fuel":"Dísel","gear":"Sjálfskipting","price":7290000,"brand":"Mercedes-Benz","body":"Jeppi","images":[],"features":["Dísel","Sjálfskipting","Rauður","222.000 km"]}, {"id":"toyota-yaris-28","name":"Toyota Yaris","year":2019,"km":181000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":2210000,"brand":"Toyota","body":"Sedan","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Rauður","181.000 km"]}, {"id":"skoda-scala-29","name":"Skoda Scala","year":2020,"km":150000,"fuel":"Bensín","gear":"Beinskipting","price":4610000,"brand":"Skoda","body":"Hatchback","images":[],"features":["Bensín","Beinskipting","Grár","150.000 km"]}, {"id":"skoda-kodiaq-30","name":"Skoda Kodiaq","year":2017,"km":168000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":1280000,"brand":"Skoda","body":"Pallbíll","images":[],"features":["Rafmagn","Sjálfskipting","Silfurgrár","168.000 km"]}, {"id":"kia-ceed-31","name":"Kia Ceed","year":2011,"km":146000,"fuel":"Bensín","gear":"Beinskipting","price":5270000,"brand":"Kia","body":"Stationbíll","images":[],"features":["Bensín","Beinskipting","Silfurgrár","146.000 km"]}, {"id":"kia-stonic-32","name":"Kia Stonic","year":2020,"km":186000,"fuel":"Bensín","gear":"Sjálfskipting","price":9720000,"brand":"Kia","body":"Stationbíll","images":[],"features":["Bensín","Sjálfskipting","Silfurgrár","186.000 km"]}, {"id":"tesla-model-3-33","name":"Tesla Model 3","year":2023,"km":99000,"fuel":"Dísel","gear":"Beinskipting","price":2070000,"brand":"Tesla","body":"Hatchback","images":[],"features":["Dísel","Beinskipting","Grár","99.000 km"]}, {"id":"bmw-x1-34","name":"BMW X1","year":2018,"km":236000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":1830000,"brand":"BMW","body":"Stationbíll","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Grár","236.000 km"]}, {"id":"citroen-c5-aircross-35","name":"Citroen C5 Aircross","year":2015,"km":37000,"fuel":"Bensín","gear":"Sjálfskipting","price":7420000,"brand":"Citroen","body":"Hatchback","images":[],"features":["Bensín","Sjálfskipting","Dökkgrænn","37.000 km"]}, {"id":"citroen-c3-36","name":"Citroen C3","year":2021,"km":112000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":9500000,"brand":"Citroen","body":"Hatchback","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Rauður","112.000 km"]}, {"id":"land-rover-range-rover-evoque-37","name":"Land Rover Range Rover Evoque","year":2016,"km":23000,"fuel":"Dísel","gear":"Sjálfskipting","price":9150000,"brand":"Land Rover","body":"Stationbíll","images":[],"features":["Dísel","Sjálfskipting","Blár","23.000 km"]}, {"id":"jeep-cherokee-38","name":"Jeep Cherokee","year":2022,"km":126000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":8360000,"brand":"Jeep","body":"Stationbíll","images":[],"features":["Bensín/Rafmagn","Beinskipting","Hvítur","126.000 km"]}, {"id":"land-rover-freelander-39","name":"Land Rover Freelander","year":2017,"km":115000,"fuel":"Bensín","gear":"Beinskipting","price":8460000,"brand":"Land Rover","body":"Sedan","images":[],"features":["Bensín","Beinskipting","Silfurgrár","115.000 km"]}, {"id":"kia-niro-40","name":"Kia Niro","year":2011,"km":64000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":5500000,"brand":"Kia","body":"Pallbíll","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Rauður","64.000 km"]}, {"id":"mercedes-benz-b200-41","name":"Mercedes-Benz B200","year":2014,"km":200000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":9600000,"brand":"Mercedes-Benz","body":"Jeppi","images":[],"features":["Rafmagn","Sjálfskipting","Grár","200.000 km"]}, {"id":"subaru-xv-42","name":"Subaru XV","year":2016,"km":42000,"fuel":"Dísel","gear":"Sjálfskipting","price":3020000,"brand":"Subaru","body":"Jeppi","images":[],"features":["Dísel","Sjálfskipting","Silfurgrár","42.000 km"]}, {"id":"kia-ceed-43","name":"Kia Ceed","year":2025,"km":73000,"fuel":"Bensín","gear":"Sjálfskipting","price":4390000,"brand":"Kia","body":"Stationbíll","images":[],"features":["Bensín","Sjálfskipting","Svartur","73.000 km"]}, {"id":"suzuki-vitara-44","name":"Suzuki Vitara","year":2016,"km":12000,"fuel":"Bensín","gear":"Sjálfskipting","price":8920000,"brand":"Suzuki","body":"Sedan","images":[],"features":["Bensín","Sjálfskipting","Dökkgrænn","12.000 km"]}, {"id":"volvo-xc40-45","name":"Volvo XC40","year":2023,"km":120000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":1520000,"brand":"Volvo","body":"Jeppi","images":[],"features":["Rafmagn","Sjálfskipting","Rauður","120.000 km"]}, {"id":"ford-fiesta-46","name":"Ford Fiesta","year":2012,"km":63000,"fuel":"Bensín","gear":"Sjálfskipting","price":2360000,"brand":"Ford","body":"Stationbíll","images":[],"features":["Bensín","Sjálfskipting","Svartur","63.000 km"]}, {"id":"nissan-qashqai-47","name":"Nissan Qashqai","year":2018,"km":182000,"fuel":"Rafmagn","gear":"Beinskipting","price":6150000,"brand":"Nissan","body":"Hatchback","images":[],"features":["Rafmagn","Beinskipting","Silfurgrár","182.000 km"]}, {"id":"opel-corsa-48","name":"Opel Corsa","year":2024,"km":84000,"fuel":"Bensín","gear":"Beinskipting","price":4760000,"brand":"Opel","body":"Jeppi","images":[],"features":["Bensín","Beinskipting","Blár","84.000 km"]}, {"id":"nissan-micra-49","name":"Nissan Micra","year":2022,"km":207000,"fuel":"Rafmagn","gear":"Beinskipting","price":4530000,"brand":"Nissan","body":"Jeppi","images":[],"features":["Rafmagn","Beinskipting","Silfurgrár","207.000 km"]}, {"id":"volkswagen-jetta-50","name":"Volkswagen Jetta","year":2012,"km":50000,"fuel":"Bensín","gear":"Beinskipting","price":8050000,"brand":"Volkswagen","body":"Sedan","images":[],"features":["Bensín","Beinskipting","Dökkgrænn","50.000 km"]}, {"id":"hyundai-santa-fe-51","name":"Hyundai Santa Fe","year":2019,"km":246000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":9330000,"brand":"Hyundai","body":"Sedan","images":[],"features":["Rafmagn","Sjálfskipting","Blár","246.000 km"]}, {"id":"honda-civic-52","name":"Honda Civic","year":2022,"km":41000,"fuel":"Dísel","gear":"Sjálfskipting","price":5330000,"brand":"Honda","body":"Sedan","images":[],"features":["Dísel","Sjálfskipting","Hvítur","41.000 km"]}, {"id":"citroen-c5-aircross-53","name":"Citroen C5 Aircross","year":2013,"km":89000,"fuel":"Rafmagn","gear":"Beinskipting","price":4040000,"brand":"Citroen","body":"Stationbíll","images":[],"features":["Rafmagn","Beinskipting","Svartur","89.000 km"]}, {"id":"mazda-2-54","name":"Mazda 2","year":2016,"km":238000,"fuel":"Dísel","gear":"Sjálfskipting","price":4880000,"brand":"Mazda","body":"Jeppi","images":[],"features":["Dísel","Sjálfskipting","Blár","238.000 km"]}, {"id":"toyota-rav4-55","name":"Toyota RAV4","year":2019,"km":200000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":9550000,"brand":"Toyota","body":"Sedan","images":[],"features":["Rafmagn","Sjálfskipting","Silfurgrár","200.000 km"]}, {"id":"tesla-model-y-56","name":"Tesla Model Y","year":2022,"km":45000,"fuel":"Rafmagn","gear":"Beinskipting","price":2080000,"brand":"Tesla","body":"Jeppi","images":[],"features":["Rafmagn","Beinskipting","Dökkgrænn","45.000 km"]}, {"id":"volvo-xc60-57","name":"Volvo XC60","year":2016,"km":203000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":3950000,"brand":"Volvo","body":"Hatchback","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Grár","203.000 km"]}, {"id":"toyota-camry-58","name":"Toyota Camry","year":2010,"km":83000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":7700000,"brand":"Toyota","body":"Jeppi","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Silfurgrár","83.000 km"]}, {"id":"mazda-6-59","name":"Mazda 6","year":2015,"km":166000,"fuel":"Dísel","gear":"Sjálfskipting","price":7220000,"brand":"Mazda","body":"Pallbíll","images":[],"features":["Dísel","Sjálfskipting","Grár","166.000 km"]}, {"id":"peugeot-308-60","name":"Peugeot 308","year":2014,"km":241000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":4430000,"brand":"Peugeot","body":"Hatchback","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Grár","241.000 km"]}, {"id":"mitsubishi-asx-61","name":"Mitsubishi ASX","year":2019,"km":228000,"fuel":"Bensín","gear":"Beinskipting","price":8280000,"brand":"Mitsubishi","body":"Pallbíll","images":[],"features":["Bensín","Beinskipting","Hvítur","228.000 km"]}, {"id":"volkswagen-arteon-62","name":"Volkswagen Arteon","year":2015,"km":89000,"fuel":"Bensín","gear":"Beinskipting","price":4200000,"brand":"Volkswagen","body":"Jeppi","images":[],"features":["Bensín","Beinskipting","Dökkgrænn","89.000 km"]}, {"id":"audi-a4-63","name":"Audi A4","year":2013,"km":205000,"fuel":"Dísel","gear":"Beinskipting","price":4880000,"brand":"Audi","body":"Sedan","images":[],"features":["Dísel","Beinskipting","Blár","205.000 km"]}, {"id":"land-rover-range-rover-evoque-64","name":"Land Rover Range Rover Evoque","year":2020,"km":127000,"fuel":"Bensín","gear":"Sjálfskipting","price":5660000,"brand":"Land Rover","body":"Stationbíll","images":[],"features":["Bensín","Sjálfskipting","Rauður","127.000 km"]}, {"id":"ford-puma-65","name":"Ford Puma","year":2024,"km":6000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":5000000,"brand":"Ford","body":"Pallbíll","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Grár","6.000 km"]}, {"id":"suzuki-sx4-s-cross-66","name":"Suzuki SX4 S-Cross","year":2013,"km":14000,"fuel":"Dísel","gear":"Beinskipting","price":8200000,"brand":"Suzuki","body":"Pallbíll","images":[],"features":["Dísel","Beinskipting","Rauður","14.000 km"]}, {"id":"kia-niro-67","name":"Kia Niro","year":2020,"km":151000,"fuel":"Dísel","gear":"Beinskipting","price":9700000,"brand":"Kia","body":"Stationbíll","images":[],"features":["Dísel","Beinskipting","Rauður","151.000 km"]}, {"id":"volkswagen-t-roc-68","name":"Volkswagen T-Roc","year":2011,"km":238000,"fuel":"Dísel","gear":"Beinskipting","price":1140000,"brand":"Volkswagen","body":"Pallbíll","images":[],"features":["Dísel","Beinskipting","Silfurgrár","238.000 km"]}, {"id":"renault-kadjar-69","name":"Renault Kadjar","year":2024,"km":134000,"fuel":"Bensín","gear":"Beinskipting","price":7230000,"brand":"Renault","body":"Stationbíll","images":[],"features":["Bensín","Beinskipting","Rauður","134.000 km"]}, {"id":"mazda-2-70","name":"Mazda 2","year":2011,"km":173000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":6790000,"brand":"Mazda","body":"Jeppi","images":[],"features":["Bensín/Rafmagn","Beinskipting","Rauður","173.000 km"]}, {"id":"mercedes-benz-c200-71","name":"Mercedes-Benz C200","year":2011,"km":192000,"fuel":"Rafmagn","gear":"Beinskipting","price":7000000,"brand":"Mercedes-Benz","body":"Hatchback","images":[],"features":["Rafmagn","Beinskipting","Blár","192.000 km"]}, {"id":"volkswagen-tiguan-72","name":"Volkswagen Tiguan","year":2013,"km":151000,"fuel":"Dísel","gear":"Sjálfskipting","price":1560000,"brand":"Volkswagen","body":"Hatchback","images":[],"features":["Dísel","Sjálfskipting","Silfurgrár","151.000 km"]}, {"id":"volvo-s60-73","name":"Volvo S60","year":2014,"km":58000,"fuel":"Rafmagn","gear":"Beinskipting","price":5430000,"brand":"Volvo","body":"Pallbíll","images":[],"features":["Rafmagn","Beinskipting","Svartur","58.000 km"]}, {"id":"ford-focus-74","name":"Ford Focus","year":2010,"km":242000,"fuel":"Rafmagn","gear":"Beinskipting","price":1090000,"brand":"Ford","body":"Pallbíll","images":[],"features":["Rafmagn","Beinskipting","Svartur","242.000 km"]}, {"id":"skoda-kodiaq-75","name":"Skoda Kodiaq","year":2021,"km":5000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":2780000,"brand":"Skoda","body":"Hatchback","images":[],"features":["Bensín/Rafmagn","Beinskipting","Dökkgrænn","5.000 km"]}, {"id":"mercedes-benz-b200-76","name":"Mercedes-Benz B200","year":2016,"km":64000,"fuel":"Rafmagn","gear":"Beinskipting","price":9670000,"brand":"Mercedes-Benz","body":"Stationbíll","images":[],"features":["Rafmagn","Beinskipting","Blár","64.000 km"]}, {"id":"nissan-x-trail-77","name":"Nissan X-Trail","year":2020,"km":128000,"fuel":"Bensín","gear":"Sjálfskipting","price":8150000,"brand":"Nissan","body":"Jeppi","images":[],"features":["Bensín","Sjálfskipting","Hvítur","128.000 km"]}, {"id":"opel-grandland-78","name":"Opel Grandland","year":2018,"km":229000,"fuel":"Dísel","gear":"Sjálfskipting","price":3340000,"brand":"Opel","body":"Pallbíll","images":[],"features":["Dísel","Sjálfskipting","Dökkgrænn","229.000 km"]}, {"id":"kia-stonic-79","name":"Kia Stonic","year":2016,"km":134000,"fuel":"Bensín","gear":"Beinskipting","price":3630000,"brand":"Kia","body":"Sedan","images":[],"features":["Bensín","Beinskipting","Rauður","134.000 km"]}, {"id":"tesla-model-y-80","name":"Tesla Model Y","year":2012,"km":243000,"fuel":"Dísel","gear":"Sjálfskipting","price":5560000,"brand":"Tesla","body":"Hatchback","images":[],"features":["Dísel","Sjálfskipting","Svartur","243.000 km"]}, {"id":"ford-mondeo-81","name":"Ford Mondeo","year":2020,"km":201000,"fuel":"Bensín","gear":"Beinskipting","price":9230000,"brand":"Ford","body":"Jeppi","images":[],"features":["Bensín","Beinskipting","Hvítur","201.000 km"]}, {"id":"tesla-model-y-82","name":"Tesla Model Y","year":2018,"km":165000,"fuel":"Dísel","gear":"Beinskipting","price":7680000,"brand":"Tesla","body":"Jeppi","images":[],"features":["Dísel","Beinskipting","Blár","165.000 km"]}, {"id":"nissan-micra-83","name":"Nissan Micra","year":2010,"km":13000,"fuel":"Bensín","gear":"Sjálfskipting","price":5720000,"brand":"Nissan","body":"Pallbíll","images":[],"features":["Bensín","Sjálfskipting","Svartur","13.000 km"]}, {"id":"ford-fiesta-84","name":"Ford Fiesta","year":2017,"km":181000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":9400000,"brand":"Ford","body":"Jeppi","images":[],"features":["Bensín/Rafmagn","Beinskipting","Dökkgrænn","181.000 km"]}, {"id":"volkswagen-passat-85","name":"Volkswagen Passat","year":2013,"km":170000,"fuel":"Rafmagn","gear":"Beinskipting","price":5120000,"brand":"Volkswagen","body":"Jeppi","images":[],"features":["Rafmagn","Beinskipting","Svartur","170.000 km"]}, {"id":"citroen-c4-86","name":"Citroen C4","year":2019,"km":135000,"fuel":"Dísel","gear":"Beinskipting","price":1280000,"brand":"Citroen","body":"Pallbíll","images":[],"features":["Dísel","Beinskipting","Svartur","135.000 km"]}, {"id":"hyundai-i30-87","name":"Hyundai i30","year":2024,"km":8000,"fuel":"Bensín","gear":"Beinskipting","price":4620000,"brand":"Hyundai","body":"Jeppi","images":[],"features":["Bensín","Beinskipting","Svartur","8.000 km"]}, {"id":"jeep-compass-88","name":"Jeep Compass","year":2024,"km":14000,"fuel":"Dísel","gear":"Sjálfskipting","price":9170000,"brand":"Jeep","body":"Sedan","images":[],"features":["Dísel","Sjálfskipting","Silfurgrár","14.000 km"]}, {"id":"audi-a4-89","name":"Audi A4","year":2019,"km":196000,"fuel":"Rafmagn","gear":"Beinskipting","price":7670000,"brand":"Audi","body":"Jeppi","images":[],"features":["Rafmagn","Beinskipting","Grár","196.000 km"]}, {"id":"bmw-118i-90","name":"BMW 118i","year":2012,"km":200000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":9160000,"brand":"BMW","body":"Stationbíll","images":[],"features":["Rafmagn","Sjálfskipting","Hvítur","200.000 km"]}, {"id":"jeep-renegade-91","name":"Jeep Renegade","year":2014,"km":24000,"fuel":"Bensín","gear":"Beinskipting","price":7710000,"brand":"Jeep","body":"Sedan","images":[],"features":["Bensín","Beinskipting","Svartur","24.000 km"]}, {"id":"audi-q5-92","name":"Audi Q5","year":2017,"km":199000,"fuel":"Bensín","gear":"Beinskipting","price":1550000,"brand":"Audi","body":"Hatchback","images":[],"features":["Bensín","Beinskipting","Rauður","199.000 km"]}, {"id":"nissan-juke-93","name":"Nissan Juke","year":2018,"km":6000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":9750000,"brand":"Nissan","body":"Hatchback","images":[],"features":["Bensín/Rafmagn","Beinskipting","Rauður","6.000 km"]}, {"id":"suzuki-swift-94","name":"Suzuki Swift","year":2017,"km":229000,"fuel":"Dísel","gear":"Sjálfskipting","price":9460000,"brand":"Suzuki","body":"Hatchback","images":[],"features":["Dísel","Sjálfskipting","Grár","229.000 km"]}, {"id":"honda-hr-v-95","name":"Honda HR-V","year":2014,"km":99000,"fuel":"Bensín/Rafmagn","gear":"Sjálfskipting","price":4780000,"brand":"Honda","body":"Pallbíll","images":[],"features":["Bensín/Rafmagn","Sjálfskipting","Grár","99.000 km"]}, {"id":"dacia-sandero-96","name":"Dacia Sandero","year":2020,"km":243000,"fuel":"Rafmagn","gear":"Sjálfskipting","price":3750000,"brand":"Dacia","body":"Pallbíll","images":[],"features":["Rafmagn","Sjálfskipting","Silfurgrár","243.000 km"]}, {"id":"subaru-outback-97","name":"Subaru Outback","year":2019,"km":221000,"fuel":"Bensín","gear":"Beinskipting","price":8600000,"brand":"Subaru","body":"Stationbíll","images":[],"features":["Bensín","Beinskipting","Silfurgrár","221.000 km"]}, {"id":"volkswagen-passat-98","name":"Volkswagen Passat","year":2018,"km":93000,"fuel":"Bensín/Rafmagn","gear":"Beinskipting","price":7310000,"brand":"Volkswagen","body":"Stationbíll","images":[],"features":["Bensín/Rafmagn","Beinskipting","Blár","93.000 km"]}, {"id":"mg-zs-99","name":"MG ZS","year":2011,"km":69000,"fuel":"Dísel","gear":"Beinskipting","price":8680000,"brand":"MG","body":"Hatchback","images":[],"features":["Dísel","Beinskipting","Svartur","69.000 km"]}];
let CARS = FALLBACK_CARS;

// Sækir raunverulega bíla frá okkar bakenda (sem sækir frá henry.rogg).
// Ef bakendinn er ekki tiltækur (t.d. í þessu static prototype) er notast
// við FALLBACK_CARS hér að ofan svo síðan virki áfram.
async function loadCars(){
  try{
    const res = await fetch('/api/cars');
    if(!res.ok) throw new Error('Óvænt svar frá /api/cars: '+res.status);
    const data = await res.json();
    if(Array.isArray(data) && data.length) CARS = data;
  }catch(err){
    console.warn('Nota sýnigögn (fallback) - gat ekki sótt bíla frá /api/cars:', err.message);
    CARS = FALLBACK_CARS;
  }
  applyTranslations();
}
const COMMISSION_RATE = 0.038;
const VAT_RATE = 0.24;
const MIN_FEE = 79990;
const CAR_EXTRAS={"volvo-xc90":{"color":"Blár","listedDate":"7.7.2026"},"audi-q7":{"color":"Silfurgrár","listedDate":"7.3.2026"},"kia-sorento":{"color":"Ljósgrár","listedDate":"4.7.2026"},"skoda-octavia":{"color":"Grár","listedDate":"7.7.2026"},"ford-ecosport":{"color":"Ljósgrár","listedDate":"19.4.2026"},"mercedes-c350e":{"color":"Svartur","listedDate":"5.6.2026"},"mazda-6":{"color":"Dökkgrár","listedDate":"14.6.2026"},"kia-rio":{"color":"Hvítur","listedDate":"17.5.2026"},"mitsubishi-outlander":{"color":"Ljósgrár","listedDate":"29.4.2026"},"mercedes-e350":{"color":"Grár","listedDate":"25.4.2026"},"renault-megane":{"color":"Silfurgrár","listedDate":"30.4.2026"},"honda-jazz":{"color":"Blár","listedDate":"1.5.2026"},"citroen-ec4":{"color":"Dökkgrænn","listedDate":"11.5.2026"},"audi-etron50":{"color":"Ljósgrár","listedDate":"11.5.2026"},"mazda-cx5":{"color":"Svartur","listedDate":"7.5.2026"},"mercedes-eqe350":{"color":"Dökkgrænn","listedDate":"2.6.2026"},"dodge-ram3500":{"color":"Dökkgrænn","listedDate":"3.6.2026"},"peugeot-2008":{"color":"Grár","listedDate":"1.7.2026"},"landrover-defender":{"color":"Dökkgrænn","listedDate":"29.4.2026"},"toyota-highlander":{"color":"Grár","listedDate":"8.5.2026"},"ssangyong-tivoli":{"color":"Dökkgrár","listedDate":"13.5.2026"},"audi-q5":{"color":"Hvítur","listedDate":"15.5.2026"},"tesla-models":{"color":"Blár","listedDate":"1.6.2026"},"toyota-landcruiser250":{"color":"Dökkgrár","listedDate":"1.6.2026"},"mazda-3":{"color":"Ljósgrár","listedDate":"3.7.2026"},"skoda-superb":{"color":"Silfurgrár","listedDate":"11.5.2026"},"vw-polo":{"color":"Dökkgrænn","listedDate":"11.5.2026"},"toyota-landcruiser":{"color":"Svartur","listedDate":"11.5.2026"},"kia-sportage":{"color":"Silfurgrár","listedDate":"6.7.2026"},"mercedes-glc":{"color":"Dökkgrár","listedDate":"4.5.2026"},"bmw-x3-0":{"color":"Grár","listedDate":"16.6.2026"},"subaru-forester-1":{"color":"Rauður","listedDate":"21.3.2026"},"mitsubishi-asx-2":{"color":"Grár","listedDate":"18.3.2026"},"mitsubishi-eclipse-cross-3":{"color":"Svartur","listedDate":"7.4.2026"},"peugeot-308-4":{"color":"Svartur","listedDate":"27.6.2026"},"mitsubishi-asx-5":{"color":"Silfurgrár","listedDate":"19.6.2026"},"kia-optima-6":{"color":"Dökkgrænn","listedDate":"21.3.2026"},"mg-hs-7":{"color":"Hvítur","listedDate":"12.4.2026"},"peugeot-308-8":{"color":"Silfurgrár","listedDate":"7.5.2026"},"subaru-outback-9":{"color":"Blár","listedDate":"19.2.2026"},"honda-civic-10":{"color":"Dökkgrænn","listedDate":"28.4.2026"},"honda-hr-v-11":{"color":"Rauður","listedDate":"19.1.2026"},"mitsubishi-outlander-12":{"color":"Blár","listedDate":"26.1.2026"},"skoda-karoq-13":{"color":"Rauður","listedDate":"27.2.2026"},"peugeot-208-14":{"color":"Svartur","listedDate":"29.1.2026"},"audi-a3-15":{"color":"Blár","listedDate":"28.1.2026"},"dacia-jogger-16":{"color":"Hvítur","listedDate":"6.3.2026"},"peugeot-3008-17":{"color":"Svartur","listedDate":"20.2.2026"},"subaru-outback-18":{"color":"Svartur","listedDate":"30.6.2026"},"dacia-sandero-19":{"color":"Silfurgrár","listedDate":"25.4.2026"},"peugeot-308-20":{"color":"Silfurgrár","listedDate":"7.4.2026"},"hyundai-i30-21":{"color":"Hvítur","listedDate":"17.6.2026"},"tesla-model-y-22":{"color":"Svartur","listedDate":"7.4.2026"},"kia-optima-23":{"color":"Grár","listedDate":"3.4.2026"},"volkswagen-tiguan-24":{"color":"Hvítur","listedDate":"18.3.2026"},"mg-zs-25":{"color":"Hvítur","listedDate":"22.1.2026"},"kia-optima-26":{"color":"Silfurgrár","listedDate":"5.7.2026"},"mercedes-benz-b200-27":{"color":"Rauður","listedDate":"6.6.2026"},"toyota-yaris-28":{"color":"Rauður","listedDate":"21.6.2026"},"skoda-scala-29":{"color":"Grár","listedDate":"31.1.2026"},"skoda-kodiaq-30":{"color":"Silfurgrár","listedDate":"22.6.2026"},"kia-ceed-31":{"color":"Silfurgrár","listedDate":"23.5.2026"},"kia-stonic-32":{"color":"Silfurgrár","listedDate":"23.3.2026"},"tesla-model-3-33":{"color":"Grár","listedDate":"24.5.2026"},"bmw-x1-34":{"color":"Grár","listedDate":"27.4.2026"},"citroen-c5-aircross-35":{"color":"Dökkgrænn","listedDate":"15.4.2026"},"citroen-c3-36":{"color":"Rauður","listedDate":"26.2.2026"},"land-rover-range-rover-evoque-37":{"color":"Blár","listedDate":"9.6.2026"},"jeep-cherokee-38":{"color":"Hvítur","listedDate":"17.2.2026"},"land-rover-freelander-39":{"color":"Silfurgrár","listedDate":"25.4.2026"},"kia-niro-40":{"color":"Rauður","listedDate":"24.6.2026"},"mercedes-benz-b200-41":{"color":"Grár","listedDate":"23.5.2026"},"subaru-xv-42":{"color":"Silfurgrár","listedDate":"25.1.2026"},"kia-ceed-43":{"color":"Svartur","listedDate":"26.4.2026"},"suzuki-vitara-44":{"color":"Dökkgrænn","listedDate":"31.5.2026"},"volvo-xc40-45":{"color":"Rauður","listedDate":"15.5.2026"},"ford-fiesta-46":{"color":"Svartur","listedDate":"3.7.2026"},"nissan-qashqai-47":{"color":"Silfurgrár","listedDate":"27.2.2026"},"opel-corsa-48":{"color":"Blár","listedDate":"7.2.2026"},"nissan-micra-49":{"color":"Silfurgrár","listedDate":"25.1.2026"},"volkswagen-jetta-50":{"color":"Dökkgrænn","listedDate":"3.6.2026"},"hyundai-santa-fe-51":{"color":"Blár","listedDate":"2.4.2026"},"honda-civic-52":{"color":"Hvítur","listedDate":"23.6.2026"},"citroen-c5-aircross-53":{"color":"Svartur","listedDate":"9.2.2026"},"mazda-2-54":{"color":"Blár","listedDate":"1.4.2026"},"toyota-rav4-55":{"color":"Silfurgrár","listedDate":"2.6.2026"},"tesla-model-y-56":{"color":"Dökkgrænn","listedDate":"9.5.2026"},"volvo-xc60-57":{"color":"Grár","listedDate":"9.6.2026"},"toyota-camry-58":{"color":"Silfurgrár","listedDate":"12.5.2026"},"mazda-6-59":{"color":"Grár","listedDate":"21.3.2026"},"peugeot-308-60":{"color":"Grár","listedDate":"1.4.2026"},"mitsubishi-asx-61":{"color":"Hvítur","listedDate":"11.4.2026"},"volkswagen-arteon-62":{"color":"Dökkgrænn","listedDate":"4.7.2026"},"audi-a4-63":{"color":"Blár","listedDate":"2.4.2026"},"land-rover-range-rover-evoque-64":{"color":"Rauður","listedDate":"30.5.2026"},"ford-puma-65":{"color":"Grár","listedDate":"9.5.2026"},"suzuki-sx4-s-cross-66":{"color":"Rauður","listedDate":"29.6.2026"},"kia-niro-67":{"color":"Rauður","listedDate":"8.2.2026"},"volkswagen-t-roc-68":{"color":"Silfurgrár","listedDate":"2.3.2026"},"renault-kadjar-69":{"color":"Rauður","listedDate":"25.2.2026"},"mazda-2-70":{"color":"Rauður","listedDate":"19.5.2026"},"mercedes-benz-c200-71":{"color":"Blár","listedDate":"27.3.2026"},"volkswagen-tiguan-72":{"color":"Silfurgrár","listedDate":"5.4.2026"},"volvo-s60-73":{"color":"Svartur","listedDate":"16.5.2026"},"ford-focus-74":{"color":"Svartur","listedDate":"22.2.2026"},"skoda-kodiaq-75":{"color":"Dökkgrænn","listedDate":"27.5.2026"},"mercedes-benz-b200-76":{"color":"Blár","listedDate":"31.1.2026"},"nissan-x-trail-77":{"color":"Hvítur","listedDate":"30.5.2026"},"opel-grandland-78":{"color":"Dökkgrænn","listedDate":"2.7.2026"},"kia-stonic-79":{"color":"Rauður","listedDate":"28.4.2026"},"tesla-model-y-80":{"color":"Svartur","listedDate":"26.1.2026"},"ford-mondeo-81":{"color":"Hvítur","listedDate":"25.2.2026"},"tesla-model-y-82":{"color":"Blár","listedDate":"29.3.2026"},"nissan-micra-83":{"color":"Svartur","listedDate":"2.7.2026"},"ford-fiesta-84":{"color":"Dökkgrænn","listedDate":"26.4.2026"},"volkswagen-passat-85":{"color":"Svartur","listedDate":"8.2.2026"},"citroen-c4-86":{"color":"Svartur","listedDate":"2.7.2026"},"hyundai-i30-87":{"color":"Svartur","listedDate":"19.6.2026"},"jeep-compass-88":{"color":"Silfurgrár","listedDate":"5.2.2026"},"audi-a4-89":{"color":"Grár","listedDate":"10.4.2026"},"bmw-118i-90":{"color":"Hvítur","listedDate":"22.6.2026"},"jeep-renegade-91":{"color":"Svartur","listedDate":"12.3.2026"},"audi-q5-92":{"color":"Rauður","listedDate":"22.3.2026"},"nissan-juke-93":{"color":"Rauður","listedDate":"19.6.2026"},"suzuki-swift-94":{"color":"Grár","listedDate":"25.4.2026"},"honda-hr-v-95":{"color":"Grár","listedDate":"11.5.2026"},"dacia-sandero-96":{"color":"Silfurgrár","listedDate":"4.7.2026"},"subaru-outback-97":{"color":"Silfurgrár","listedDate":"18.5.2026"},"volkswagen-passat-98":{"color":"Blár","listedDate":"12.2.2026"},"mg-zs-99":{"color":"Svartur","listedDate":"17.2.2026"}};
function carColor(car){return (CAR_EXTRAS[car.id]&&CAR_EXTRAS[car.id].color)||'-'}
function carListedDate(car){return (CAR_EXTRAS[car.id]&&CAR_EXTRAS[car.id].listedDate)||'-'}
function kr(n){return new Intl.NumberFormat('is-IS').format(Math.round(n))+' kr.'}
function km(n){return new Intl.NumberFormat('is-IS').format(n)+' km'}

function parseISK(value){
  return Number(String(value || '').replace(/\./g,'').replace(/,/g,'').replace(/[^\d]/g,'')) || 0;
}
function formatISKInput(el,max){
  if(!el) return;
  const raw = String(el.value || '').replace(/[^\d]/g,'');
  if(!raw){ el.value=''; el.dataset.iskLast=''; return; }
  const num = Number(raw);
  if(max && num>max){ el.value = el.dataset.iskLast || ''; return; }
  const formatted = new Intl.NumberFormat('is-IS').format(num);
  el.value = formatted;
  el.dataset.iskLast = formatted;
}

function positionISKSuffix(inputId,suffixId){
  const el=document.getElementById(inputId);
  const suffix=document.getElementById(suffixId);
  if(!el||!suffix) return;
  if(!el.value){ suffix.style.opacity='0'; return; }
  suffix.style.opacity='1';
  let ruler=document.getElementById('iskSuffixRuler');
  if(!ruler){
    ruler=document.createElement('span');
    ruler.id='iskSuffixRuler';
    ruler.style.cssText='position:absolute;visibility:hidden;white-space:pre;top:-9999px;left:-9999px';
    document.body.appendChild(ruler);
  }
  const cs=getComputedStyle(el);
  ruler.style.font=cs.font;
  ruler.textContent=el.value;
  const textWidth=ruler.getBoundingClientRect().width;
  const paddingLeft=parseFloat(cs.paddingLeft)||0;
  const maxLeft=el.clientWidth-40;
  suffix.style.left=Math.min(paddingLeft+textWidth+10,maxLeft)+'px';
}
function positionSellPriceSuffix(){positionISKSuffix('sellPrice','sellPriceSuffix')}
function wireISKField(inputId,suffixId,max,onAfter){
  const el=document.getElementById(inputId);
  if(!el) return;
  formatISKInput(el,max);
  positionISKSuffix(inputId,suffixId);
  el.addEventListener('input',()=>{formatISKInput(el,max); positionISKSuffix(inputId,suffixId); if(onAfter) onAfter();});
}

function openMenu(){document.querySelector('.drawer').classList.add('open');document.querySelector('.overlay').classList.add('open')}
function closeMenu(){document.querySelector('.drawer').classList.remove('open');document.querySelector('.overlay').classList.remove('open')}

const I18N={
  is:{
    'nav.cars':'Bílar til sölu','nav.sellDrawer':'Seldu bílinn þinn','nav.sellTop':'Seldu Bílinn','nav.import':'Innflutningur','nav.about':'Um okkur','nav.contact':'Hafðu samband',
    'footer.tagline':'Sala og innflutningur á vönduðum bílum.','footer.hours':'Mán–Fös 10:00–18:00 · Lau 12:00–15:00',
    'search.placeholder':'Leita að bíl, tegund eða módel...','filter.allBrands':'Alla framleiðendur','filter.fuel':'Eldsneyti',
    'sort.newest':'Nýjast fyrst','sort.priceLow':'Lægsta verð','sort.priceHigh':'Hæsta verð','sort.kmLow':'Minnsti akstur',
    'filter.gearManual':'Beinskiptur','filter.gearAuto':'Sjálfskiptur','filter.inStock':'Á staðnum',
    'filter.kmFrom':'Akstur frá','filter.kmTo':'Akstur til','filter.priceFrom':'Verð frá','filter.priceTo':'Verð til','filter.yearFrom':'Árgerð frá','filter.yearTo':'Árgerð til',
    'filter.noResults':'Engir bílar fundust miðað við leitina.',
    'fuel.Rafmagn':'Rafmagn','fuel.Dísel':'Dísel','fuel.Bensín':'Bensín','fuel.Bensín/Rafmagn':'Bensín/Rafmagn','fuel.PlugInHybrid':'Plug-in Hybrid','fuel.AlvegSama':'Alveg sama',
    'gear.Beinskipting':'Beinskipting','gear.Sjálfskipting':'Sjálfskipting',
    'card.source':'Sýnigögn frá Bílskúrnum á bilasolur.is','card.yearSuffix':'árgerð',
    'detail.forSale':'Bíll til sölu','detail.year':'Árgerð','detail.mileage':'Akstur','detail.fuel':'Eldsneyti','detail.gear':'Skipting','detail.brand':'Merki','detail.body':'Yfirbygging','detail.color':'Litur','detail.listedDate':'Skráð á sölu','detail.features':'Helsti búnaður','detail.inquire':'Fá frekari upplýsingar','detail.call':'Hringja','detail.bookMeeting':'Bóka hitting','detail.promoLabel':'Flott verð','detail.oldPriceLabel':'Verð áður',
    'car.eyebrow':'Bíll til sölu','car.title':'Bíladetail','car.inquiryTitle':'Fá frekari upplýsingar','car.form.notice':'Takk! Fyrirspurnin hefur verið móttekin í þessu prototype.','car.form.submit':'Senda fyrirspurn',
    'cars.eyebrow':'Bílasafn','cars.title':'Bílar til sölu','cars.lead':'Skoðaðu alla bíla sem eru til sölu hjá Bílskúrnum. Sýnigögnin hér eru byggð á upplýsingum af bilasolur.is.',
    'sell.eyebrow':'Seldu bílinn þinn','sell.title':'Seldu bílinn þinn','sell.lead':'Við sjáum um myndatöku, auglýsingar, fyrirspurnir, reynsluakstur og afhendingu.',
    'sell.calc.title':'Reiknaðu hvað þú færð greitt','sell.calc.lead':'Söluþóknun er 3,8% + VSK og lágmark 79.990 kr.','sell.calc.note2':'Allir bílar á 1.697.591 kr. eða lægra falla undir lágmarks sölulaun','sell.callout.inperson':'Komdu og kíktu í kaffi á meðan við græjum allt','sell.callout.online':'Skráðu bílinn núna á netinu','sell.callout.onlineLead':'Fljótt, þægilegt og þarft bara að fylla nokkrar upplýsingar',
    'sell.why.title':'Af hverju að selja hjá okkur?','sell.why.1':'✓ Enginn kostnaður fyrr en bíllinn selst','sell.why.2':'✓ Fagleg myndataka og skráning','sell.why.3':'✓ Við sjáum um fyrirspurnir og reynsluakstur','sell.why.4':'✓ Skýr og sanngjörn söluþóknun',
    'sell.form.notice':'Takk! Beiðnin hefur verið móttekin í þessu prototype.','sell.form.submit':'Senda bíl í sölu',
    'import.eyebrow':'Innflutningur','import.title':'Flytjum inn réttan bíl','import.lead':'Við finnum bílinn, sjáum um samskipti, flutning, toll, skráningu og afhendingu.',
    'import.step1.title':'Þú segir okkur hvað þú vilt','import.step1.lead':'Tegund, árgerð, budget og búnaður.',
    'import.step2.title':'Við finnum bílinn','import.step2.lead':'Frá traustum aðilum í Svíþjóð, Evrópu og Bandaríkjunum.',
    'import.step3.title':'Við sjáum um ferlið','import.step3.lead':'Flutningur, tollur, skráning og afhending.',
    'import.step4.title':'Þú keyrir í burtu','import.step4.lead':'Bíllinn tilbúinn á Íslandi.',
    'import.form.notice':'Takk! Innflutningsbeiðnin hefur verið móttekin, við heyrum í þér með tilboð við fyrsta tækifæri.','import.form.email':'Netfang (Þarf að fylla)','import.form.phone':'Símanúmer (Þarf að fylla)','import.form.budget':'Verð hugmynd (Þarf að fylla)','import.form.color':'Veldu litinn','import.form.year':'Árgerð','import.form.fuel':'Orkugjafi','import.form.mileage':'Keyrður','import.form.noMatch':'Ekkert samsvarandi','import.form.desc':'Lýstu bílnum sem þú ert að leita að','import.form.submit':'Senda innflutningsbeiðni',
    'about.eyebrow':'Um okkur','about.title':'BÍLSKÚRINN','about.lead':'Fjölskyldurekin bílasala á Seltjarnarnesi með áherslu á heiðarleika, gæði og persónulega þjónustu.',
    'about.story.kicker':'Saga okkar','about.story.title':'Við bræðurnir deilum ástríðu fyrir bílum.','about.story.lead':'Við leggjum mikla áherslu á gæði, traust og faglega þjónustu í hverju skrefi – hvort sem um er að ræða sölu, innflutning eða þjónustu.',
    'about.what.kicker':'Hvað við gerum','about.what.title':'Sala, innflutningur og gæða þjónusta.',
    'about.step1.title':'Bílasala','about.step1.lead':'Bílar kynntir með faglegum hætti.',
    'about.step2.title':'Umboðssala','about.step2.lead':'Við seljum bílinn fyrir þig án vesens.',
    'about.step3.title':'Innflutningur','about.step3.lead':'Við finnum rétta bílinn erlendis.',
    'about.notice':'Söluþóknun: 3,8% + VSK. Lágmarkssöluþóknun 79.990 kr. Engin föld gjöld og enginn kostnaður fyrr en bíllinn selst.','about.employee.title':'Starfsmaður mánaðarins','about.employee.caption':'Brús og Egó',
    'home.intro.hint':'SKROLLA NIÐUR',
    'home.cars.kicker':'Bílar á sölu','home.cars.title':'Sýningarsalur okkar','home.cars.btn':'Sjá alla bíla →','home.sort.listed':'Nýskráðir','home.sort.priceDesc':'Dýrastir','home.sort.priceAsc':'Ódýrastir','home.sort.yearDesc':'Nýjasti','home.sort.yearAsc':'Gemlingar','home.sort.random':'Komdu mér óvart',
    'home.calc.kicker':'Sölureiknivél','home.calc.title':'Hvað færðu í vasann?','home.calc.lead':'Settu inn áætlað söluverð og sjáðu hvað þú færð greitt eftir söluþóknun. Við rukkum <strong>3,8% + VSK</strong> og lágmarkssöluþóknun er <strong>79.990 kr.</strong>','home.calc.note':'Ef lán hvílir á bílnum geturðu sett stöðu láns inn líka.',
    'home.sell.kicker':'Seldu bílinn þinn','home.sell.title':'Við sjáum um allt söluferlið.','home.sell.lead':'Við tökum myndir, skráum bílinn, sjáum um fyrirspurnir, reynsluakstur og afhendingu. Enginn kostnaður fyrr en bíllinn selst.','home.sell.f1':'✓ Myndataka og auglýsing','home.sell.f2':'✓ Fyrirspurnir og reynsluakstur','home.sell.f3':'✓ Örugg skjöl og afhending','home.sell.btn':'Skrá bíl í sölu',
    'home.why.kicker':'Af hverju okkur?','home.why.title':'Premium þjónusta án vesens.','home.why.1.title':'Fjölskyldurekið fyrirtæki','home.why.1.lead':'Bræður sem setja mikla áherslu á gæða þjónustu.','home.why.2.title':'Sanngjörn þóknun','home.why.2.lead':'3,8% + VSK, lágmark 79.990 kr.','home.why.3.title':'Innflutningur','home.why.3.lead':'Við finnum rétta bílinn erlendis.','home.why.4.title':'Ekkert vesen','home.why.4.lead':'Við græjum allt ferlið með sölu eða innflutning.','home.why.5.title':'Sýnileiki','home.why.5.lead':'Bíllinn þinn birtist þar sem kaupendur leita.',
    'home.import.kicker':'Innflutningur','home.import.title':'Finnurðu ekki rétta bílinn?','home.import.lead':'Við sækjum bíla frá samstarfsaðilum í 🇸🇪 Svíþjóð, 🇪🇺 Evrópu og 🇺🇸 Bandaríkjunum.','home.import.f1':'✓ Bíll','home.import.f2':'✓ Flutningur','home.import.f3':'✓ Tollur','home.import.f4':'✓ Forskráning','home.import.f5':'✓ Nýskráning','home.import.f6':'✓ Tækniskýrsla (ef á við)','home.import.f7':'✓ Djúphreinsun','home.import.f8':'Allt innifalið í tilboði','home.import.btn':'Fá tilboð',
    'home.contact.kicker':'Hafðu samband','home.contact.title':'Kíktu í heimsókn','home.contact.note':'Annars má alltaf hringja','home.contact.hours2':'Sun lokað',
    'calc.priceLabel':'Söluverð bíls','calc.payoffLabel':'Staða láns / uppgreiðsla','calc.payoffLabelOptional':'Staða láns / uppgreiðsla (valfrjálst)','calc.fee':'Söluþóknun','calc.payoffRow':'Lán / uppgreiðsla','calc.rule':'Regla','calc.result':'Þú færð í vasann',
    'form.fullName':'Fullt nafn (Þarf að fylla)','form.name':'Nafn','form.email':'Netfang','form.phone':'Símanúmer','form.make':'Tegund','form.model':'Módel','form.year':'Árgerð','form.mileage':'Akstur','form.message':'Skilaboð',
    'sell.form.plate':'Fastanúmer / bílnúmer (Þarf að fylla)','sell.form.price':'Óskað verð','sell.form.extra':'Viðbótarupplýsingar','sell.form.fullName':'Fullt nafn (Þarf að fylla)','sell.form.phone':'Símanúmer (Þarf að fylla)','sell.form.make':'Tegund (Þarf að fylla)','sell.form.model':'Módel (Þarf að fylla)','sell.form.year':'Árgerð (Þarf að fylla)','sell.form.mileage':'Akstur (Þarf að fylla)','sell.form.photos':'Myndir af bílnum','sell.form.noPhotos':'Engin mynd valin',
    'inquiry.eyebrow':'Fyrirspurn','inquiry.title':'Fá frekari upplýsingar','inquiry.lead':'Fylltu út upplýsingarnar hér að neðan og við höfum samband við þig eins fljótt og hægt er.','inquiry.form.submit':'Senda fyrirspurn','inquiry.backLink':'← Til baka á bílinn','inquiry.thanks.title':'Takk fyrir fyrirspurninguna','inquiry.thanks.lead':'Við svörum þér eins fljótt og hægt er.',
    'booking.eyebrow':'Tímabókun','booking.title':'Bóka hitting','booking.lead':'Veldu tíma sem hentar þér til að skoða bílinn.','booking.form.name':'Nafn (Þarf að fylla)','booking.form.email':'Netfang (Þarf að fylla)','booking.form.phone':'Símanúmer (Þarf að fylla)','booking.form.date':'Dagsetning','booking.form.time':'Tími','booking.form.submit':'Staðfesta bókun','booking.backLink':'← Til baka á bílinn','booking.thanks.title':'Takk fyrir bókunina','booking.thanks.lead':'Við staðfestum tímann eins fljótt og hægt er.','booking.noSlots':'Engir lausir tímar þennan dag','booking.mapTitle':'Hvar get ég prufu keyrt?'
  },
  en:{
    'nav.cars':'Cars for sale','nav.sellDrawer':'Sell your car','nav.sellTop':'Sell Your Car','nav.import':'Import','nav.about':'About us','nav.contact':'Contact us',
    'footer.tagline':'Sales and import of quality cars.','footer.hours':'Mon–Fri 10:00–18:00 · Sat 12:00–15:00',
    'search.placeholder':'Search for a car, make or model...','filter.allBrands':'All manufacturers','filter.fuel':'Fuel',
    'sort.newest':'Newest first','sort.priceLow':'Lowest price','sort.priceHigh':'Highest price','sort.kmLow':'Lowest mileage',
    'filter.gearManual':'Manual','filter.gearAuto':'Automatic','filter.inStock':'In stock',
    'filter.kmFrom':'Mileage from','filter.kmTo':'Mileage to','filter.priceFrom':'Price from','filter.priceTo':'Price to','filter.yearFrom':'Year from','filter.yearTo':'Year to',
    'filter.noResults':'No cars matched your search.',
    'fuel.Rafmagn':'Electric','fuel.Dísel':'Diesel','fuel.Bensín':'Petrol','fuel.Bensín/Rafmagn':'Petrol/Electric','fuel.PlugInHybrid':'Plug-in Hybrid','fuel.AlvegSama':"Doesn't matter",
    'gear.Beinskipting':'Manual','gear.Sjálfskipting':'Automatic',
    'card.source':'Demo listing data from Bílskúrinn on bilasolur.is','card.yearSuffix':'model year',
    'detail.forSale':'Car for sale','detail.year':'Year','detail.mileage':'Mileage','detail.fuel':'Fuel','detail.gear':'Transmission','detail.brand':'Make','detail.body':'Body type','detail.color':'Color','detail.listedDate':'Listed on','detail.features':'Key features','detail.inquire':'Request further information','detail.call':'Call','detail.bookMeeting':'Book a viewing','detail.promoLabel':'Great price','detail.oldPriceLabel':'Previous price',
    'car.eyebrow':'Car for sale','car.title':'Car details','car.inquiryTitle':'Get more information','car.form.notice':'Thanks! The inquiry has been received in this prototype.','car.form.submit':'Send inquiry',
    'cars.eyebrow':'Car collection','cars.title':'Cars for sale','cars.lead':'Browse all the cars for sale at Bílskúrinn. The demo data here is based on listings from bilasolur.is.',
    'sell.eyebrow':'Sell your car','sell.title':'Sell your car','sell.lead':'We handle photography, advertising, inquiries, test drives and delivery.',
    'sell.calc.title':'Calculate your payout','sell.calc.lead':'The sales commission is 3.8% + VAT, minimum 79,990 kr.','sell.calc.note2':'All cars priced at 1,697,591 kr. or lower fall under the minimum sales commission','sell.callout.inperson':'Come by and grab a coffee while we sort everything out','sell.callout.online':'Register your car online now','sell.callout.onlineLead':'Fast, convenient, and just a few details to fill in',
    'sell.why.title':'Why sell with us?','sell.why.1':'✓ No cost until the car sells','sell.why.2':'✓ Professional photography and listing','sell.why.3':'✓ We handle inquiries and test drives','sell.why.4':'✓ Clear and fair sales commission',
    'sell.form.notice':'Thanks! The request has been received in this prototype.','sell.form.submit':'Submit car for sale',
    'import.eyebrow':'Import','import.title':'We import the right car','import.lead':"We find the car, and handle communication, shipping, customs, registration and delivery.",
    'import.step1.title':'You tell us what you want','import.step1.lead':'Make, year, budget and equipment.',
    'import.step2.title':'We find the car','import.step2.lead':'From trusted partners in Sweden, Europe and the United States.',
    'import.step3.title':'We handle the process','import.step3.lead':'Shipping, customs, registration and delivery.',
    'import.step4.title':'You drive away','import.step4.lead':'The car ready in Iceland.',
    'import.form.notice':"Thanks! Your import request has been received - we'll be in touch with an offer as soon as possible.",'import.form.email':'Email (Required)','import.form.phone':'Phone number (Required)','import.form.budget':'Estimated price (Required)','import.form.color':'Choose color','import.form.year':'Year','import.form.fuel':'Energy source','import.form.mileage':'Mileage','import.form.noMatch':'No matches','import.form.desc':"Describe the car you're looking for",'import.form.submit':'Send import request',
    'about.eyebrow':'About us','about.title':'BÍLSKÚRINN','about.lead':"A family-run car dealership in Seltjarnarnes focused on honesty, quality and personal service.",
    'about.story.kicker':'Our story','about.story.title':"We're brothers who share a passion for cars.",'about.story.lead':"We place great emphasis on quality, trust and professional service in every step - whether it's sales, import or service.",
    'about.what.kicker':'What we do','about.what.title':'Sales, import and quality service.',
    'about.step1.title':'Car sales','about.step1.lead':'Cars presented professionally.',
    'about.step2.title':'Consignment sales','about.step2.lead':'We sell the car for you, hassle-free.',
    'about.step3.title':'Import','about.step3.lead':'We find the right car abroad.',
    'about.notice':'Sales commission: 3.8% + VAT. Minimum commission 79,990 kr. No hidden fees and no cost until the car sells.','about.employee.title':'Employee of the Month','about.employee.caption':'Brús og Egó',
    'home.intro.hint':'SCROLL DOWN',
    'home.cars.kicker':'Cars for sale','home.cars.title':'Our showroom','home.cars.btn':'See all cars →','home.sort.listed':'Newly listed','home.sort.priceDesc':'Most expensive','home.sort.priceAsc':'Cheapest','home.sort.yearDesc':'Newest','home.sort.yearAsc':'Oldest','home.sort.random':'Surprise me',
    'home.calc.kicker':'Sales calculator','home.calc.title':'What do you get in your pocket?','home.calc.lead':'Enter the estimated sale price and see what you get paid after commission. We charge <strong>3.8% + VAT</strong> and the minimum commission is <strong>79,990 kr.</strong>','home.calc.note':"If there's a loan on the car you can enter the loan balance too.",
    'home.sell.kicker':'Sell your car','home.sell.title':'We handle the entire sales process.','home.sell.lead':'We take photos, list the car, and handle inquiries, test drives and delivery. No cost until the car sells.','home.sell.f1':'✓ Photography and advertising','home.sell.f2':'✓ Inquiries and test drives','home.sell.f3':'✓ Secure paperwork and delivery','home.sell.btn':'List your car for sale',
    'home.why.kicker':'Why us?','home.why.title':'Premium service, hassle-free.','home.why.1.title':'Family-run business','home.why.1.lead':'Brothers who put a strong focus on quality service.','home.why.2.title':'Fair commission','home.why.2.lead':'3.8% + VAT, minimum 79,990 kr.','home.why.3.title':'Import','home.why.3.lead':'We find the right car abroad.','home.why.4.title':'No hassle','home.why.4.lead':"We handle the whole process, whether it's a sale or an import.",'home.why.5.title':'Visibility','home.why.5.lead':'Your car appears where buyers are looking.',
    'home.import.kicker':'Import','home.import.title':"Can't find the right car?",'home.import.lead':'We source cars from partners in 🇸🇪 Sweden, 🇪🇺 Europe and the 🇺🇸 United States.','home.import.f1':'✓ Car','home.import.f2':'✓ Shipping','home.import.f3':'✓ Customs','home.import.f4':'✓ Pre-registration','home.import.f5':'✓ Registration','home.import.f6':'✓ Technical inspection report (if applicable)','home.import.f7':'✓ Deep cleaning','home.import.f8':'Everything included in the quote','home.import.btn':'Get a quote',
    'home.contact.kicker':'Contact us','home.contact.title':'Come visit us','home.contact.note':'Or feel free to call anytime','home.contact.hours2':'Sun closed',
    'calc.priceLabel':'Sale price of car','calc.payoffLabel':'Loan balance / payoff','calc.payoffLabelOptional':'Loan balance / payoff (optional)','calc.fee':'Sales commission','calc.payoffRow':'Loan / payoff','calc.rule':'Rule','calc.result':'You get in your pocket',
    'form.fullName':'Full name (Required)','form.name':'Name','form.email':'Email','form.phone':'Phone number','form.make':'Make','form.model':'Model','form.year':'Year','form.mileage':'Mileage','form.message':'Message',
    'sell.form.plate':'License plate number (Required)','sell.form.price':'Desired price','sell.form.extra':'Additional information','sell.form.fullName':'Full name (Required)','sell.form.phone':'Phone number (Required)','sell.form.make':'Make (Required)','sell.form.model':'Model (Required)','sell.form.year':'Year (Required)','sell.form.mileage':'Mileage (Required)','sell.form.photos':'Photos of the car','sell.form.noPhotos':'No photo selected',
    'inquiry.eyebrow':'Inquiry','inquiry.title':'Request further information','inquiry.lead':"Fill in the details below and we'll get back to you as soon as possible.",'inquiry.form.submit':'Send inquiry','inquiry.backLink':'← Back to the car','inquiry.thanks.title':'Thank you for your inquiry','inquiry.thanks.lead':"We'll reply to you as soon as possible.",
    'booking.eyebrow':'Booking','booking.title':'Book a viewing','booking.lead':'Choose a time that suits you to view the car.','booking.form.date':'Date','booking.form.time':'Time','booking.form.submit':'Confirm booking','booking.backLink':'← Back to the car','booking.thanks.title':'Thank you for your booking','booking.thanks.lead':"We'll confirm the time as soon as possible.",'booking.noSlots':'No times available this day','booking.mapTitle':'Where can I test drive?'
  },
  pl:{
    'nav.cars':'Samochody na sprzedaż','nav.sellDrawer':'Sprzedaj swój samochód','nav.sellTop':'Sprzedaj Samochód','nav.import':'Import','nav.about':'O nas','nav.contact':'Kontakt',
    'footer.tagline':'Sprzedaż i import wysokiej jakości samochodów.','footer.hours':'Pon–Pt 10:00–18:00 · Sob 12:00–15:00',
    'search.placeholder':'Szukaj samochodu, marki lub modelu...','filter.allBrands':'Wszyscy producenci','filter.fuel':'Paliwo',
    'sort.newest':'Najpierw najnowsze','sort.priceLow':'Najniższa cena','sort.priceHigh':'Najwyższa cena','sort.kmLow':'Najmniejszy przebieg',
    'filter.gearManual':'Manualna','filter.gearAuto':'Automatyczna','filter.inStock':'Na miejscu',
    'filter.kmFrom':'Przebieg od','filter.kmTo':'Przebieg do','filter.priceFrom':'Cena od','filter.priceTo':'Cena do','filter.yearFrom':'Rok od','filter.yearTo':'Rok do',
    'filter.noResults':'Nie znaleziono samochodów pasujących do wyszukiwania.',
    'fuel.Rafmagn':'Elektryczny','fuel.Dísel':'Diesel','fuel.Bensín':'Benzyna','fuel.Bensín/Rafmagn':'Benzyna/Elektryczny','fuel.PlugInHybrid':'Hybryda plug-in','fuel.AlvegSama':'Bez znaczenia',
    'gear.Beinskipting':'Manualna','gear.Sjálfskipting':'Automatyczna',
    'card.source':'Przykładowe dane od Bílskúrinn na bilasolur.is','card.yearSuffix':'rocznik',
    'detail.forSale':'Samochód na sprzedaż','detail.year':'Rocznik','detail.mileage':'Przebieg','detail.fuel':'Paliwo','detail.gear':'Skrzynia biegów','detail.brand':'Marka','detail.body':'Nadwozie','detail.color':'Kolor','detail.listedDate':'Data ogłoszenia','detail.features':'Najważniejsze wyposażenie','detail.inquire':'Poproś o dalsze informacje','detail.call':'Zadzwoń','detail.bookMeeting':'Umów spotkanie','detail.promoLabel':'Świetna cena','detail.oldPriceLabel':'Poprzednia cena',
    'car.eyebrow':'Samochód na sprzedaż','car.title':'Szczegóły samochodu','car.inquiryTitle':'Uzyskaj więcej informacji','car.form.notice':'Dziękujemy! Zapytanie zostało odebrane w tym prototypie.','car.form.submit':'Wyślij zapytanie',
    'cars.eyebrow':'Kolekcja samochodów','cars.title':'Samochody na sprzedaż','cars.lead':'Przeglądaj wszystkie samochody na sprzedaż w Bílskúrinn. Dane demonstracyjne oparte są na ogłoszeniach z bilasolur.is.',
    'sell.eyebrow':'Sprzedaj swój samochód','sell.title':'Sprzedaj swój samochód','sell.lead':'Zajmujemy się zdjęciami, reklamą, zapytaniami, jazdami próbnymi i dostawą.',
    'sell.calc.title':'Oblicz swoją wypłatę','sell.calc.lead':'Prowizja sprzedaży wynosi 3,8% + VAT, minimum 79 990 kr.','sell.calc.note2':'Wszystkie samochody w cenie 1.697.591 kr. lub niżej podlegają minimalnej prowizji sprzedaży','sell.callout.inperson':'Wpadnij na kawę, a my zajmiemy się resztą','sell.callout.online':'Zarejestruj samochód online już teraz','sell.callout.onlineLead':'Szybko, wygodnie, wystarczy podać kilka informacji',
    'sell.why.title':'Dlaczego sprzedać u nas?','sell.why.1':'✓ Brak kosztów do momentu sprzedaży','sell.why.2':'✓ Profesjonalne zdjęcia i ogłoszenie','sell.why.3':'✓ Zajmujemy się zapytaniami i jazdami próbnymi','sell.why.4':'✓ Jasna i uczciwa prowizja sprzedaży',
    'sell.form.notice':'Dziękujemy! Zgłoszenie zostało odebrane w tym prototypie.','sell.form.submit':'Zgłoś samochód do sprzedaży',
    'import.eyebrow':'Import','import.title':'Importujemy odpowiedni samochód','import.lead':'Znajdujemy samochód i zajmujemy się komunikacją, transportem, cłem, rejestracją i dostawą.',
    'import.step1.title':'Mówisz nam, czego chcesz','import.step1.lead':'Marka, rocznik, budżet i wyposażenie.',
    'import.step2.title':'Znajdujemy samochód','import.step2.lead':'Od zaufanych partnerów w Szwecji, Europie i Stanach Zjednoczonych.',
    'import.step3.title':'Zajmujemy się całym procesem','import.step3.lead':'Transport, cło, rejestracja i dostawa.',
    'import.step4.title':'Odjeżdżasz swoim autem','import.step4.lead':'Samochód gotowy na Islandii.',
    'import.form.notice':'Dziękujemy! Zgłoszenie importowe zostało odebrane - skontaktujemy się z ofertą tak szybko, jak to możliwe.','import.form.email':'E-mail (Wymagane)','import.form.phone':'Numer telefonu (Wymagane)','import.form.budget':'Szacowana cena (Wymagane)','import.form.color':'Wybierz kolor','import.form.year':'Rocznik','import.form.fuel':'Źródło energii','import.form.mileage':'Przebieg','import.form.noMatch':'Brak wyników','import.form.desc':'Opisz samochód, którego szukasz','import.form.submit':'Wyślij zapytanie importowe',
    'about.eyebrow':'O nas','about.title':'BÍLSKÚRINN','about.lead':'Rodzinny salon samochodowy w Seltjarnarnes, skupiony na uczciwości, jakości i osobistej obsłudze.',
    'about.story.kicker':'Nasza historia','about.story.title':'Jesteśmy braćmi, których łączy pasja do samochodów.','about.story.lead':'Przykładamy dużą wagę do jakości, zaufania i profesjonalnej obsługi na każdym etapie - niezależnie od tego, czy chodzi o sprzedaż, import czy serwis.',
    'about.what.kicker':'Co robimy','about.what.title':'Sprzedaż, import i wysokiej jakości obsługa.',
    'about.step1.title':'Sprzedaż samochodów','about.step1.lead':'Samochody prezentowane w profesjonalny sposób.',
    'about.step2.title':'Sprzedaż komisowa','about.step2.lead':'Sprzedajemy Twój samochód bezproblemowo.',
    'about.step3.title':'Import','about.step3.lead':'Znajdujemy odpowiedni samochód za granicą.',
    'about.notice':'Prowizja sprzedaży: 3,8% + VAT. Minimalna prowizja 79 990 kr. Brak ukrytych opłat i kosztów do momentu sprzedaży.','about.employee.title':'Pracownik miesiąca','about.employee.caption':'Brús og Egó',
    'home.intro.hint':'PRZEWIŃ W DÓŁ',
    'home.cars.kicker':'Samochody na sprzedaż','home.cars.title':'Nasz salon wystawowy','home.cars.btn':'Zobacz wszystkie samochody →','home.sort.listed':'Nowo dodane','home.sort.priceDesc':'Najdroższe','home.sort.priceAsc':'Najtańsze','home.sort.yearDesc':'Najnowsze','home.sort.yearAsc':'Najstarsze','home.sort.random':'Zaskocz mnie',
    'home.calc.kicker':'Kalkulator sprzedaży','home.calc.title':'Ile otrzymasz do ręki?','home.calc.lead':'Wpisz szacowaną cenę sprzedaży i zobacz, ile otrzymasz po odliczeniu prowizji. Pobieramy <strong>3,8% + VAT</strong>, a minimalna prowizja wynosi <strong>79 990 kr.</strong>','home.calc.note':'Jeśli na samochodzie ciąży kredyt, możesz również podać jego saldo.',
    'home.sell.kicker':'Sprzedaj swój samochód','home.sell.title':'Zajmujemy się całym procesem sprzedaży.','home.sell.lead':'Robimy zdjęcia, wystawiamy ogłoszenie oraz zajmujemy się zapytaniami, jazdami próbnymi i dostawą. Brak kosztów do momentu sprzedaży.','home.sell.f1':'✓ Zdjęcia i reklama','home.sell.f2':'✓ Zapytania i jazdy próbne','home.sell.f3':'✓ Bezpieczna dokumentacja i dostawa','home.sell.btn':'Zgłoś samochód do sprzedaży',
    'home.why.kicker':'Dlaczego my?','home.why.title':'Usługa premium bez kłopotów.','home.why.1.title':'Firma rodzinna','home.why.1.lead':'Bracia, którzy kładą duży nacisk na jakość obsługi.','home.why.2.title':'Uczciwa prowizja','home.why.2.lead':'3,8% + VAT, minimum 79 990 kr.','home.why.3.title':'Import','home.why.3.lead':'Znajdujemy odpowiedni samochód za granicą.','home.why.4.title':'Bez kłopotów','home.why.4.lead':'Zajmujemy się całym procesem, niezależnie od tego, czy to sprzedaż czy import.','home.why.5.title':'Widoczność','home.why.5.lead':'Twój samochód pojawia się tam, gdzie szukają kupujący.',
    'home.import.kicker':'Import','home.import.title':'Nie możesz znaleźć odpowiedniego samochodu?','home.import.lead':'Sprowadzamy samochody od partnerów w 🇸🇪 Szwecji, 🇪🇺 Europie i 🇺🇸 Stanach Zjednoczonych.','home.import.f1':'✓ Samochód','home.import.f2':'✓ Transport','home.import.f3':'✓ Cło','home.import.f4':'✓ Rejestracja wstępna','home.import.f5':'✓ Rejestracja','home.import.f6':'✓ Raport techniczny (jeśli dotyczy)','home.import.f7':'✓ Dogłębne czyszczenie','home.import.f8':'Wszystko wliczone w ofertę','home.import.btn':'Otrzymaj ofertę',
    'home.contact.kicker':'Kontakt','home.contact.title':'Odwiedź nas','home.contact.note':'Możesz też zawsze zadzwonić','home.contact.hours2':'Niedz. zamknięte',
    'calc.priceLabel':'Cena sprzedaży samochodu','calc.payoffLabel':'Saldo kredytu / spłata','calc.payoffLabelOptional':'Saldo kredytu / spłata (opcjonalnie)','calc.fee':'Prowizja sprzedaży','calc.payoffRow':'Kredyt / spłata','calc.rule':'Zasada','calc.result':'Otrzymasz do ręki',
    'form.fullName':'Imię i nazwisko (Wymagane)','form.name':'Imię','form.email':'E-mail','form.phone':'Numer telefonu','form.make':'Marka','form.model':'Model','form.year':'Rocznik','form.mileage':'Przebieg','form.message':'Wiadomość',
    'sell.form.plate':'Numer rejestracyjny (Wymagane)','sell.form.price':'Oczekiwana cena','sell.form.extra':'Dodatkowe informacje','sell.form.fullName':'Imię i nazwisko (Wymagane)','sell.form.phone':'Numer telefonu (Wymagane)','sell.form.make':'Marka (Wymagane)','sell.form.model':'Model (Wymagane)','sell.form.year':'Rocznik (Wymagane)','sell.form.mileage':'Przebieg (Wymagane)','sell.form.photos':'Zdjęcia samochodu','sell.form.noPhotos':'Nie wybrano zdjęcia',
    'inquiry.eyebrow':'Zapytanie','inquiry.title':'Poproś o dalsze informacje','inquiry.lead':'Wypełnij poniższe dane, a skontaktujemy się z Tobą tak szybko, jak to możliwe.','inquiry.form.submit':'Wyślij zapytanie','inquiry.backLink':'← Powrót do samochodu','inquiry.thanks.title':'Dziękujemy za zapytanie','inquiry.thanks.lead':'Odpowiemy tak szybko, jak to możliwe.',
    'booking.eyebrow':'Rezerwacja','booking.title':'Umów spotkanie','booking.lead':'Wybierz dogodny dla Ciebie termin obejrzenia samochodu.','booking.form.name':'Imię (Wymagane)','booking.form.email':'E-mail (Wymagane)','booking.form.phone':'Numer telefonu (Wymagane)','booking.form.date':'Data','booking.form.time':'Godzina','booking.form.submit':'Potwierdź rezerwację','booking.backLink':'← Powrót do samochodu','booking.thanks.title':'Dziękujemy za rezerwację','booking.thanks.lead':'Potwierdzimy termin tak szybko, jak to możliwe.','booking.noSlots':'Brak dostępnych terminów tego dnia','booking.mapTitle':'Gdzie mogę pojeździć próbnie?'
  }
};
let currentLang=localStorage.getItem('lang')||'is';
function t(key){return (I18N[currentLang]&&I18N[currentLang][key])||I18N.is[key]||key}
function tFuel(v){return t('fuel.'+v)}
function tGear(v){return t('gear.'+v)}
function applyTranslations(){
  document.documentElement.lang=currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=t(el.getAttribute('data-i18n'))});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.getAttribute('data-i18n-placeholder'))});
  document.querySelectorAll('.lang-switch a').forEach(a=>{a.classList.toggle('active',a.dataset.lang===currentLang)});
  populateFilters();populateRangeFilters();renderCars();renderFeatured();refreshFeaturedSortTrigger();renderDetail();renderBookingSlots();renderBookingCarCard();updateSellPhotoStatus();populateSellYearSelect();refreshYearTriggerLabel();updateColorTriggerLabel();
  const brandLabel=document.getElementById('brandTriggerLabel');
  if(brandLabel) brandLabel.textContent=selectedBrand||t('filter.allBrands');
}
function setLanguage(lang){currentLang=lang;localStorage.setItem('lang',lang);renderChrome();applyTranslations()}
function langSwitchHtml(){return `<div class="lang-switch"><a data-lang="is" onclick="setLanguage('is')">Íslenska</a><a data-lang="en" onclick="setLanguage('en')">English</a><a data-lang="pl" onclick="setLanguage('pl')">Polski</a></div>`}
function header(){
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const isHome=path===''||path==='index.html';
  if(isHome){
    return `<header class="header"><button class="menu-btn" onclick="openMenu()">☰</button><a class="phone" href="tel:+3545600000">+354 560 0000</a></header><div class="overlay" onclick="closeMenu()"></div><aside class="drawer"><div class="drawer-head"><img class="drawer-logo" src="bilskurinn-logo.png"><button class="close-btn" onclick="closeMenu()">×</button></div><nav><a href="cars.html">${t('nav.cars')}</a><a href="sell.html">${t('nav.sellDrawer')}</a><a href="import.html">${t('nav.import')}</a><a href="about.html">${t('nav.about')}</a><a href="#contact">${t('nav.contact')}</a></nav>${langSwitchHtml().replace('lang-switch','lang-switch lang-switch-drawer')}</aside>`;
  }
  const currentKey=(path==='cars.html'||path==='car.html')?'cars':path==='sell.html'?'sell':path==='import.html'?'import':path==='about.html'?'about':'';
  const navItems=[
    {key:'cars',href:'cars.html',label:t('nav.cars')},
    {key:'sell',href:'sell.html',label:t('nav.sellTop')},
    {key:'import',href:'import.html',label:t('nav.import')},
    {key:'about',href:'about.html',label:t('nav.about')},
    {key:'contact',href:'index.html#contact',label:t('nav.contact')}
  ];
  return `<header class="header header-nav"><a class="header-logo-link" href="index.html"><img class="header-logo-inline" src="bilskurinn-logo.png" alt="Bílskúrinn"></a><nav class="header-nav-links">${navItems.map(n=>`<a href="${n.href}"${n.key===currentKey?' class="active"':''}>${n.label}</a>`).join('')}</nav>${langSwitchHtml().replace('lang-switch','lang-switch lang-switch-top')}<a class="phone" href="tel:+3545600000">+354 560 0000</a></header>`;
}
function footer(){return `<footer class="footer"><div><img class="footer-logo" src="bilskurinn-logo.png"><p>${t('footer.tagline')}</p></div><div><strong>Austurströnd 7, 170 Seltjarnarnes</strong><br>+354 560 0000 · bilskurinn@bilsk.is<br>${t('footer.hours')}</div></footer>`}
function layout(){renderChrome()}
function renderChrome(){
  document.querySelectorAll('.header,.overlay,.drawer,.footer').forEach(el=>el.remove());
  document.body.insertAdjacentHTML('afterbegin', header());
  document.body.insertAdjacentHTML('beforeend', footer());
  updateLogos();
}
function carPhotos(car){return (car.images&&car.images.length)?car.images:['assets/car-placeholder.PNG']}
function hasPhoto(car){return !!(car.images&&car.images.length)}
function carThumb(car){return carPhotos(car)[0]}
function carCard(car){return `<a class="card reveal" href="car.html?id=${car.id}"><div style="overflow:hidden"><img class="car-img${hasPhoto(car)?'':' no-photo'}" src="${carThumb(car)}" alt="${car.name}"></div><div class="card-body">${car.inStock?'<span class="stock-badge">'+t('filter.inStock')+'</span>':''}<h3 class="car-title">${car.name}</h3><div class="meta"><span>${car.year} ${t('card.yearSuffix')}</span><span>${km(car.km)}</span><span>${tFuel(car.fuel)}</span><span>${tGear(car.gear)}</span></div><div class="price">${kr(car.price)}</div></div></a>`}
const FEATURED_COUNT=15;
let featuredTotal=0;
let featuredIndex=0;
let featuredHoverIndex=null;
let featuredSortMode='listed';
let featuredCardStepPx=0;
let featuredTimer=null;
let featuredResumeTimeout=null;
function featuredParseDate(s){
  if(!s||s==='-') return 0;
  const p=s.split('.');
  if(p.length!==3) return 0;
  return new Date(+p[2],(+p[1])-1,+p[0]).getTime();
}
function featuredCarsList(){
  const arr=CARS.slice();
  if(featuredSortMode==='priceDesc') arr.sort((a,b)=>(b.price||0)-(a.price||0));
  else if(featuredSortMode==='priceAsc') arr.sort((a,b)=>(a.price||0)-(b.price||0));
  else if(featuredSortMode==='yearDesc') arr.sort((a,b)=>(b.year||0)-(a.year||0));
  else if(featuredSortMode==='yearAsc') arr.sort((a,b)=>(a.year||0)-(b.year||0));
  else if(featuredSortMode==='random'){ for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} }
  else arr.sort((a,b)=>featuredParseDate(carListedDate(b))-featuredParseDate(carListedDate(a)));
  return arr.slice(0,FEATURED_COUNT);
}
function renderFeatured(){
  const track=document.getElementById('featuredCars');
  if(!track) return;
  const base=featuredCarsList();
  featuredTotal=base.length;
  if(!featuredTotal){ track.innerHTML=''; return; }
  track.innerHTML=[...base,...base,...base].map(carCard).join('');
  featuredIndex=featuredTotal;
  featuredHoverIndex=null;
  observeReveals();
  requestAnimationFrame(()=>{
    featuredCardStepPx=featuredMeasureStep(track);
    track.classList.add('no-anim');
    updateFeaturedCenter(track);
    setFeaturedTransform(track,featuredIndex,false);
    void track.offsetWidth;
    track.classList.remove('no-anim');
  });
  wireFeaturedCarousel(track);
  startFeaturedAutoplay();
}
function featuredMeasureStep(track){
  if(!track||track.children.length<2) return track?track.clientWidth:0;
  return track.children[1].offsetLeft-track.children[0].offsetLeft;
}
function setFeaturedTransform(track,index,animate){
  if(!track) return;
  const el=track.children[index];
  const viewport=track.parentElement;
  let x;
  if(el&&viewport) x=el.offsetLeft+el.offsetWidth/2-viewport.clientWidth/2;
  else x=index*(featuredCardStepPx||featuredMeasureStep(track));
  if(!animate){
    track.classList.add('no-anim');
    track.style.transform=`translateX(${-x}px)`;
    void track.offsetWidth;
    track.classList.remove('no-anim');
  } else {
    track.style.transform=`translateX(${-x}px)`;
  }
}
function updateFeaturedCenter(track){
  if(!track) return;
  const target=featuredHoverIndex!==null?featuredHoverIndex:featuredIndex;
  Array.from(track.children).forEach((el,i)=>el.classList.toggle('center-card',i===target));
}
function featuredGoTo(index,animate){
  const track=document.getElementById('featuredCars');
  if(!track) return;
  featuredIndex=index;
  if(animate){
    updateFeaturedCenter(track);
    setFeaturedTransform(track,featuredIndex,true);
  } else {
    track.classList.add('no-anim');
    updateFeaturedCenter(track);
    setFeaturedTransform(track,featuredIndex,false);
    void track.offsetWidth;
    track.classList.remove('no-anim');
  }
}
function featuredNormalize(){
  if(featuredIndex<featuredTotal) featuredGoTo(featuredIndex+featuredTotal,false);
  else if(featuredIndex>=featuredTotal*2) featuredGoTo(featuredIndex-featuredTotal,false);
}
function featuredStep(dir){
  if(!featuredTotal) return;
  featuredNormalize();
  featuredGoTo(featuredIndex+dir,true);
}
function featuredNav(dir){ pauseFeaturedAutoplay(); featuredStep(dir); resumeFeaturedAutoplayLater(); }
function startFeaturedAutoplay(){ clearInterval(featuredTimer); featuredTimer=setInterval(()=>featuredStep(1),3000); }
function pauseFeaturedAutoplay(){ clearInterval(featuredTimer); featuredTimer=null; }
function resumeFeaturedAutoplayLater(){ clearTimeout(featuredResumeTimeout); featuredResumeTimeout=setTimeout(startFeaturedAutoplay,4000); }
function setFeaturedSort(mode){
  if(featuredSortMode===mode) return;
  featuredSortMode=mode;
  pauseFeaturedAutoplay();
  renderFeatured();
  refreshFeaturedSortTrigger();
  closeAllDropdowns();
}
function refreshFeaturedSortTrigger(){
  const label=document.getElementById('featuredSortLabel');
  if(label) label.textContent=t('home.sort.'+featuredSortMode);
  document.querySelectorAll('#featuredSortOptions .combo-option').forEach(opt=>{
    opt.classList.toggle('selected',opt.dataset.mode===featuredSortMode);
  });
}
const FEATURED_SORT_MODES=['listed','priceDesc','priceAsc','yearDesc','yearAsc','random'];
function toggleFeaturedSortPanel(e){
  e.stopPropagation();
  const panel=document.getElementById('featuredSortOptions');
  if(!panel) return;
  const willOpen=!panel.classList.contains('open');
  closeAllDropdowns();
  if(willOpen){ renderFeaturedSortOptions(); panel.classList.add('open'); }
}
function renderFeaturedSortOptions(){
  const panel=document.getElementById('featuredSortOptions');
  if(!panel) return;
  panel.innerHTML=FEATURED_SORT_MODES.map(m=>`<div class="combo-option${m===featuredSortMode?' selected':''}" data-mode="${m}" onclick="event.stopPropagation();setFeaturedSort('${m}')">${t('home.sort.'+m)}</div>`).join('');
}
function wireFeaturedCarousel(track){
  if(track.dataset.wired) return;
  track.dataset.wired='1';
  track.addEventListener('transitionend',e=>{
    if(e.target!==track||e.propertyName!=='transform') return;
    if(featuredIndex<featuredTotal) featuredGoTo(featuredIndex+featuredTotal,false);
    else if(featuredIndex>=featuredTotal*2) featuredGoTo(featuredIndex-featuredTotal,false);
  });
  track.addEventListener('mouseover',e=>{
    const cardEl=e.target.closest('.card');
    if(!cardEl||cardEl.parentElement!==track) return;
    const idx=Array.from(track.children).indexOf(cardEl);
    if(idx<0||idx===featuredHoverIndex) return;
    featuredHoverIndex=idx;
    updateFeaturedCenter(track);
  });
  track.addEventListener('mouseenter',()=>{ pauseFeaturedAutoplay(); });
  track.addEventListener('mouseleave',()=>{
    featuredHoverIndex=null;
    updateFeaturedCenter(track);
    resumeFeaturedAutoplayLater();
  });
  let dragging=false,dragMoved=false,startX=0,startOffset=0;
  const step=()=>featuredCardStepPx||featuredMeasureStep(track);
  const dragStart=clientX=>{
    dragging=true; dragMoved=false; startX=clientX;
    pauseFeaturedAutoplay();
    track.classList.add('no-anim');
    const el=track.children[featuredIndex];
    startOffset=el?-el.offsetLeft:-featuredIndex*step();
  };
  const dragMove=clientX=>{
    if(!dragging) return;
    const dx=clientX-startX;
    if(Math.abs(dx)>4) dragMoved=true;
    track.style.transform=`translateX(${startOffset+dx}px)`;
  };
  const dragEnd=clientX=>{
    if(!dragging) return;
    dragging=false;
    track.classList.remove('no-anim');
    const dx=clientX-startX;
    if(dragMoved){ featuredNormalize(); featuredGoTo(featuredIndex-Math.round(dx/step()),true); }
    else { setFeaturedTransform(track,featuredIndex,true); }
    resumeFeaturedAutoplayLater();
  };
  track.addEventListener('mousedown',e=>{
    e.preventDefault();
    dragStart(e.clientX);
    const mv=ev=>dragMove(ev.clientX);
    const up=ev=>{ dragEnd(ev.clientX); window.removeEventListener('mousemove',mv); window.removeEventListener('mouseup',up); };
    window.addEventListener('mousemove',mv);
    window.addEventListener('mouseup',up);
  });
  track.addEventListener('touchstart',e=>dragStart(e.touches[0].clientX),{passive:true});
  track.addEventListener('touchmove',e=>dragMove(e.touches[0].clientX),{passive:true});
  track.addEventListener('touchend',e=>dragEnd(e.changedTouches[0].clientX));
  track.addEventListener('wheel',()=>{ pauseFeaturedAutoplay(); resumeFeaturedAutoplayLater(); },{passive:true});
  window.addEventListener('resize',()=>{
    featuredCardStepPx=featuredMeasureStep(track);
    track.classList.add('no-anim');
    updateFeaturedCenter(track);
    setFeaturedTransform(track,featuredIndex,false);
    void track.offsetWidth;
    track.classList.remove('no-anim');
  });
}
let activeGear='';let activeInStock=false;
function toggleGear(g){activeGear=activeGear===g?'':g;document.getElementById('gearManual')?.classList.toggle('active',activeGear==='Beinskipting');document.getElementById('gearAuto')?.classList.toggle('active',activeGear==='Sjálfskipting');renderCars()}
function toggleInStock(){activeInStock=!activeInStock;document.getElementById('inStockBtn')?.classList.toggle('active',activeInStock);renderCars()}
function fillSelect(id,options){const el=document.getElementById(id);if(!el)return;el.innerHTML=options.map(o=>`<option value="${o.value}">${o.label}</option>`).join('')}
function populateRangeFilters(){
  const kmFromOpts=[{value:'',label:t('filter.kmFrom')}];for(let k=0;k<=300000;k+=10000)kmFromOpts.push({value:k,label:km(k)});
  const kmToOpts=[{value:'',label:t('filter.kmTo')}];for(let k=0;k<=700000;k+=10000)kmToOpts.push({value:k,label:km(k)});
  const priceFromOpts=[{value:'',label:t('filter.priceFrom')}];priceFromOpts.push({value:200000,label:kr(200000)});for(let p=300000;p<=12000000;p+=100000)priceFromOpts.push({value:p,label:kr(p)});
  const priceToOpts=[{value:'',label:t('filter.priceTo')}];priceToOpts.push({value:200000,label:kr(200000)});for(let p=300000;p<=40000000;p+=100000)priceToOpts.push({value:p,label:kr(p)});
  const yearOpts=[{value:'',label:t('filter.yearFrom')}];for(let y=2026;y>=2000;y--)yearOpts.push({value:y,label:y});[1990,1980,1970,1960,1950].forEach(y=>yearOpts.push({value:y,label:y}));
  const yearToOpts=[{value:'',label:t('filter.yearTo')}];for(let y=2026;y>=2000;y--)yearToOpts.push({value:y,label:y});[1990,1980,1970,1960,1950].forEach(y=>yearToOpts.push({value:y,label:y}));
  fillSelect('kmFrom',kmFromOpts);fillSelect('kmTo',kmToOpts);fillSelect('priceFrom',priceFromOpts);fillSelect('priceTo',priceToOpts);fillSelect('yearFrom',yearOpts);fillSelect('yearTo',yearToOpts);
}
function renderCars(){const search=(document.getElementById('search')?.value||'').toLowerCase();const fuel=document.getElementById('fuel')?.value||'';const brand=selectedBrand;const sort=document.getElementById('sort')?.value||'newest';const kmFrom=document.getElementById('kmFrom')?.value||'';const kmTo=document.getElementById('kmTo')?.value||'';const priceFrom=document.getElementById('priceFrom')?.value||'';const priceTo=document.getElementById('priceTo')?.value||'';const yearFrom=document.getElementById('yearFrom')?.value||'';const yearTo=document.getElementById('yearTo')?.value||'';let list=CARS.filter(c=>(c.name.toLowerCase().includes(search)||c.brand.toLowerCase().includes(search))&&(!fuel||c.fuel===fuel)&&(!brand||c.brand===brand)&&(!activeGear||c.gear===activeGear)&&(!activeInStock||c.inStock)&&(!kmFrom||c.km>=Number(kmFrom))&&(!kmTo||c.km<=Number(kmTo))&&(!priceFrom||c.price>=Number(priceFrom))&&(!priceTo||c.price<=Number(priceTo))&&(!yearFrom||c.year>=Number(yearFrom))&&(!yearTo||c.year<=Number(yearTo)));if(sort==='priceLow')list.sort((a,b)=>a.price-b.price);if(sort==='priceHigh')list.sort((a,b)=>b.price-a.price);if(sort==='kmLow')list.sort((a,b)=>a.km-b.km);if(sort==='newest')list.sort((a,b)=>b.year-a.year);const el=document.getElementById('carsGrid');if(el) el.innerHTML=list.length?list.map(carCard).join(''):'<p class="lead">'+t('filter.noResults')+'</p>';observeReveals()}
let selectedBrand='';
function populateFilters(){const counts={};CARS.forEach(c=>{counts[c.brand]=(counts[c.brand]||0)+1});const brands=Object.keys(counts).sort((a,b)=>a.localeCompare(b,'is'));const optionsEl=document.getElementById('brandOptions');if(!optionsEl)return;optionsEl.innerHTML=`<div class="custom-select-option${selectedBrand===''?' active':''}" onclick="selectBrand('')"><span>${t('filter.allBrands')}</span></div>`+brands.map(b=>`<div class="custom-select-option${selectedBrand===b?' active':''}" onclick="selectBrand('${b}')"><span>${b}</span><span class="count">${counts[b]}</span></div>`).join('')}
function selectBrand(b){selectedBrand=b;const label=document.getElementById('brandTriggerLabel');if(label)label.textContent=b||t('filter.allBrands');document.getElementById('brandOptions')?.classList.remove('open');populateFilters();renderCars()}
function toggleBrandDropdown(e){e.stopPropagation();document.getElementById('brandOptions')?.classList.toggle('open')}
document.addEventListener('click',()=>{document.getElementById('brandOptions')?.classList.remove('open')});
document.addEventListener('click',()=>{document.getElementById('datePanel')?.classList.remove('open')});
document.addEventListener('click',()=>{document.getElementById('makePanel')?.classList.remove('open');document.getElementById('yearPanel')?.classList.remove('open');document.getElementById('colorOptions')?.classList.remove('open')});
document.addEventListener('click',()=>{document.getElementById('featuredSortOptions')?.classList.remove('open')});
let GALLERY=[];let GALLERY_IDX=0;let MAIN_IDX=0;let mainSwiped=false;const MAX_THUMBS=5;
function buildThumbsHtml(photos){if(photos.length<=1)return'';const showCount=Math.min(photos.length,MAX_THUMBS);const remaining=photos.length-MAX_THUMBS;return `<div class="gallery-thumbs">${photos.slice(0,showCount).map((src,i)=>{const isMore=i===MAX_THUMBS-1&&remaining>0;const click=isMore?`openLightbox(${i})`:`setGalleryMain(${i})`;return `<div class="thumb-wrap${i===0?' active':''}" data-idx="${i}" onclick="${click}"><img src="${src}" alt="mynd ${i+1}">${isMore?`<div class="thumb-overlay">+${remaining}</div>`:''}</div>`}).join('')}</div>`}
function hashStr(s){let h=0;for(let i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))|0}return Math.abs(h)}
function carPromo(car){if(hashStr(car.id+'promo')%3!==0)return null;const old=Math.round(car.price*1.1/1000)*1000;return{old}}
function carModelTrim(car){return car.name.indexOf(car.brand)===0?car.name.slice(car.brand.length).trim():car.name}
function brandInitials(brand){const words=(brand||'').trim().split(/\s+/);if(words.length>=2)return (words[0][0]+words[1][0]).toUpperCase();return (brand||'').slice(0,2).toUpperCase()}
const BRAND_BADGE_COLORS=['#1f6feb','#d1242f','#8250df','#1a7f37','#bf3989','#9a6700','#0969da','#cf222e'];
function brandBadgeColor(brand){return BRAND_BADGE_COLORS[hashStr(brand)%BRAND_BADGE_COLORS.length]}
function brandLogoDataUri(brand){const initials=brandInitials(brand);const color=brandBadgeColor(brand);const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><circle cx="60" cy="60" r="58" fill="${color}"/><text x="60" y="76" font-family="Arial,Helvetica,sans-serif" font-size="46" font-weight="700" fill="#fff" text-anchor="middle">${initials}</text></svg>`;return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg)}
function brandSlug(brand){return (brand||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
const BRAND_LOGO_OVERRIDES={'skoda':'skovda.png'};
function brandLogoPath(brand){const slug=brandSlug(brand);return 'assets/car-logo/'+(BRAND_LOGO_OVERRIDES[slug]||(slug+'.png'))}
function setBrandLogo(img,brand){if(!img)return;img.alt=brand;img.style.display='';img.onerror=function(){this.onerror=null;this.style.display='none'};img.src=brandLogoPath(brand)}
function specHash(car,key){return hashStr(car.id+'::'+key)}
function specBool(car,key,prob){return (specHash(car,key)%100)/100<(prob||0.55)}
function specNum(car,key,min,max,step){step=step||1;const range=Math.floor((max-min)/step)+1;return min+step*(specHash(car,key)%range)}
function specChoice(car,key,options){return options[specHash(car,key)%options.length]}
function specDate(car,key,base,maxDays){const d=new Date(base);d.setDate(d.getDate()+(specHash(car,key)%maxDays));return d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear()}
const SALE_BLURBS=['Vel með farinn bíll í toppstandi.','Reglulega þjónustaður og snyrtilegur að innan sem utan.','Engin þekkt vandamál, tilbúinn til afhendingar.','Fallegur bíll sem hefur fengið gott viðhald.','Ekinn hóflega og alltaf geymdur í bílskúr.'];
const CAPITAL_TOWNS=['Seltjarnarnesi','Reykjavík','Kópavogi','Hafnarfirði','Garðabæ','Mosfellsbæ'];
const OTHER_TOWNS=['Akureyri','Selfossi','Akranesi','Ísafirði','Egilsstöðum','Vestmannaeyjum','Reykjanesbæ','Húsavík'];
const LOCATION_OPTIONS=[...CAPITAL_TOWNS,...OTHER_TOWNS];
const SPEC_CATEGORIES=[
 {title:'Vél',fields:[
   {key:'cyl',label:'Strokkar',unit:'stk.',type:'n',min:3,max:8},
   {key:'disp',label:'Slagrými',unit:'cc.',type:'n',min:1000,max:5000,step:100},
   {key:'hp',label:'Hestöfl',unit:'hö.',type:'n',min:90,max:450,step:5},
   {key:'timing',label:'Tímabúnaður',type:'c',options:['Tímareim','Tímakeðja']},
   {key:'startstop',label:'Start/stop búnaður',type:'b'},
   {key:'turbo',label:'Túrbína',type:'b'},
   {key:'intercooler',label:'Intercooler',type:'b'},
   {key:'injection',label:'Innspýting',type:'b'},
   {key:'chip',label:'Tölvukubbur',type:'b'}
 ]},
 {title:'Eldsneyti',cond:car=>car.fuel!=='Rafmagn',fields:[
   {key:'cons1',label:'Innanbæjareyðsla',unit:'l/100km',type:'n',min:4,max:14},
   {key:'cons2',label:'Utanbæjareyðsla',unit:'l/100km',type:'n',min:3,max:10},
   {key:'cons3',label:'Blönduð eyðsla',unit:'l/100km',type:'n',min:4,max:12},
   {key:'co2nedc',label:'CO2 losun (NEDC)',unit:'gr/km',type:'n',min:90,max:220},
   {key:'co2wltp',label:'CO2 losun (WLTP)',unit:'gr/km',type:'n',min:100,max:240}
 ]},
 {title:'Rafhlaða',cond:car=>car.fuel==='Rafmagn'||car.fuel==='Bensín/Rafmagn',fields:[
   {key:'batt',label:'Stærð rafhlöðu',unit:'kWh',type:'n',min:40,max:100},
   {key:'range',label:'Drægni rafhlöðu',unit:'km.',type:'n',min:250,max:500,step:10},
   {key:'ac',label:'Hleðslugeta (AC)',unit:'kW',type:'n',min:7,max:22},
   {key:'dc',label:'Hleðslugeta (DC)',unit:'kW',type:'n',min:50,max:250,step:10},
   {key:'connector',label:'Tegund hleðslutengils',type:'c',options:['CCS2','Type 2','CHAdeMO']},
   {key:'homecharge',label:'Heimahleðsla',type:'b'},
   {key:'fastcharge',label:'Hraðhleðsla',type:'b'},
   {key:'preheat',label:'Forhitun fyrir hleðslu',type:'b'},
   {key:'wallbox',label:'Vegghleðslustöð',type:'b'}
 ]},
 {title:'Drifrás',fields:[
   {key:'drive',label:'Drif',type:'c',options:['Framhjóladrif','Afturhjóladrif','Fjórhjóladrif']},
   {key:'axles',label:'Öxlafjöldi',unit:'stk.',type:'n',min:2,max:3},
   {key:'difflock',label:'Driflæsingar',type:'b'},
   {key:'frontlock',label:'Framdrifslæsing',type:'b'},
   {key:'disclock',label:'Diskalæsing',type:'b'},
   {key:'lsd',label:'Tregðutengt mismunadrif',type:'b'}
 ]},
 {title:'Yfirbygging',fields:[
   {key:'raised',label:'Upphækkaður',type:'b'},
   {key:'fenderflares',label:'Brettakantar',type:'b'},
   {key:'sidesteps',label:'Stigbretti',type:'b'},
   {key:'roofrails',label:'Þakbogar',type:'b'},
   {key:'spoiler',label:'Vindskeið',type:'b'},
   {key:'hooddeflector',label:'Húddhlíf',type:'b'},
   {key:'foldroof',label:'Fellanlegt þak',type:'b'},
   {key:'foldtop',label:'Fellanleg blæja',type:'b'}
 ]},
 {title:'Fjöðrun',fields:[
   {key:'airsusp',label:'Loftpúðafjöðrun',type:'b'},
   {key:'adjsusp',label:'Stillanleg fjöðrun',type:'b'},
   {key:'abs',label:'ABS hemlakerfi',type:'b'},
   {key:'ebrake',label:'Neyðarhemlun',type:'b'},
   {key:'hillup',label:'Brekkubremsa upp',type:'b'},
   {key:'hilldown',label:'Brekkubremsa niður',type:'b'},
   {key:'ehandbrake',label:'Rafdrifin handbremsa',type:'b'}
 ]},
 {title:'Hjólabúnaður',fields:[
   {key:'wheelsize',label:'Felgustærð',type:'c',options:['16"','17"','18"','19"','20"']},
   {key:'tirelife',label:'Eftir af dekkjum',type:'c',options:['40%','60%','80%','100%']},
   {key:'alloy',label:'Álfelgur',type:'b'},
   {key:'extrawheels',label:'Auka felgur',type:'b'},
   {key:'tpms',label:'Loftþrýstingsskynjarar',type:'b'},
   {key:'spare',label:'Varadekk',type:'b'},
   {key:'tirekit',label:'Dekkjaviðgerðasett',type:'b'},
   {key:'jack',label:'Tjakkur',type:'b'}
 ]},
 {title:'Ljósabúnaður',fields:[
   {key:'ledhead',label:'LED aðalljós',type:'b'},
   {key:'xenon',label:'Xenon aðalljós',type:'b'},
   {key:'cornering',label:'Beygjulýsing',type:'b'},
   {key:'leddaytime',label:'LED dagljós',type:'b'},
   {key:'ledtail',label:'LED afturljós',type:'b'},
   {key:'homelight',label:'Heimkomulýsing',type:'b'},
   {key:'fogfront',label:'Þokuljós framan',type:'b'},
   {key:'fogrear',label:'Þokuljós aftan',type:'b'}
 ]},
 {title:'Hurðir',fields:[
   {key:'doors',label:'Dyrafjöldi',unit:'stk.',type:'n',min:2,max:5},
   {key:'slidingdoor',label:'Rennihurð',type:'b'},
   {key:'wheelchair',label:'Hjólastólaaðgengi',type:'b'},
   {key:'powertailgate',label:'Rafdrifið lok farangursrýmis',type:'b'},
   {key:'touchless',label:'Snertilaus opnun farangursrýmis',type:'b'}
 ]},
 {title:'Akstur',fields:[
   {key:'digitaldash',label:'Stafrænt mælaborð',type:'b'},
   {key:'hud',label:'Sjónlínuskjár',type:'b'},
   {key:'tripcomputer',label:'Aksturstölva',type:'b'},
   {key:'rainsensor',label:'Regnskynjari',type:'b'},
   {key:'laneassist',label:'Akreinavari',type:'b'},
   {key:'blindspot',label:'Blindsvæðisvörn',type:'b'},
   {key:'signrec',label:'Umferðarskiltanemi',type:'b'},
   {key:'parkassist',label:'Aðstoð við að leggja í stæði',type:'b'},
   {key:'traction',label:'Spólvörn',type:'b'},
   {key:'stability',label:'Stöðugleikakerfi',type:'b'},
   {key:'cruise',label:'Hraðastillir',type:'b'},
   {key:'adaptivecruise',label:'Skynvæddur hraðastillir',type:'b'}
 ]},
 {title:'Öryggi',fields:[
   {key:'remotekeys',label:'Lyklar með fjarstýringu',unit:'stk.',type:'n',min:1,max:3},
   {key:'immobilizer',label:'Þjófavörn',type:'b'},
   {key:'centrallock',label:'Samlæsingar',type:'b'},
   {key:'keylessentry',label:'Lykillaust aðgengi',type:'b'},
   {key:'keylessstart',label:'Lykillaus ræsing',type:'b'},
   {key:'parksensorfront',label:'Fjarlægðarskynjarar framan',type:'b'},
   {key:'parksensorrear',label:'Fjarlægðarskynjarar aftan',type:'b'},
   {key:'rearcam',label:'Bakkmyndavél',type:'b'},
   {key:'cam360',label:'360° myndavél',type:'b'},
   {key:'airbags',label:'Líknarbelgir',type:'b'}
 ]},
 {title:'Dráttarbúnaður',fields:[
   {key:'brakedtow',label:'Þyngd hemlaðs eftirvagns',unit:'kg.',type:'n',min:750,max:3500,step:50},
   {key:'unbrakedtow',label:'Þyngd óhemlaðs eftirvagns',unit:'kg.',type:'n',min:500,max:750,step:10},
   {key:'towhitch',label:'Dráttarkrókur (fastur)',type:'b'},
   {key:'removehitch',label:'Dráttarkrókur (aftengjanlegur)',type:'b'},
   {key:'electrichitch',label:'Dráttarkrókur (rafmagns)',type:'b'},
   {key:'trailerstability',label:'Stöðugleikakerfi fyrir eftirvagn',type:'b'}
 ]},
 {title:'Flutningar',fields:[
   {key:'crane',label:'Krani',type:'b'},
   {key:'lift',label:'Lyfta',type:'b'},
   {key:'hydraulics',label:'Glussakerfi',type:'b'},
   {key:'storagebox',label:'Kassi',type:'b'}
 ]},
 {title:'Afþreying',fields:[
   {key:'radio',label:'Útvarp',type:'b'},
   {key:'bluetoothphone',label:'Bluetooth símatenging',type:'b'},
   {key:'wirelesscharge',label:'Þráðlaus farsímahleðsla',type:'b'},
   {key:'carplay',label:'Apple CarPlay',type:'b'},
   {key:'androidauto',label:'Android Auto',type:'b'},
   {key:'aux',label:'AUX hljóðtengi',type:'b'},
   {key:'usb',label:'USB tengi',type:'b'},
   {key:'hdmi',label:'HDMI tengi',type:'b'}
 ]},
 {title:'Rúður',fields:[
   {key:'powerwindows',label:'Rafdrifnar rúður',type:'b'},
   {key:'heatedwindshield',label:'Hiti í framrúðu',type:'b'},
   {key:'tintedglass',label:'Litað gler',type:'b'},
   {key:'sunroof',label:'Topplúga',type:'b'},
   {key:'glassroof',label:'Glerþak',type:'b'}
 ]},
 {title:'Stýri',fields:[
   {key:'heatedwheel',label:'Hiti',type:'b'},
   {key:'powersteering',label:'Aflstýri',type:'b'},
   {key:'sportwheel',label:'Veltistýri',type:'b'},
   {key:'adjwheel',label:'Rafstillanlegt',type:'b'},
   {key:'leatherwheel',label:'Leðurklætt',type:'b'},
   {key:'paddleshift',label:'Gírskipting í stýri',type:'b'}
 ]},
 {title:'Speglar',fields:[
   {key:'foldmirrors',label:'Aðfellanlegir',type:'b'},
   {key:'powermirrors',label:'Rafdrifnir',type:'b'},
   {key:'heatedmirrors',label:'Hiti',type:'b'},
   {key:'memorymirrors',label:'Minni',type:'b'},
   {key:'autodim',label:'Birtutengdur baksýnisspegill',type:'b'}
 ]},
 {title:'Miðstöð',fields:[
   {key:'ac2',label:'Loftkæling',type:'b'},
   {key:'preheatcabin',label:'Forhitun á miðstöð',type:'b'},
   {key:'dualzone',label:'Tveggja svæða miðstöð',type:'b'},
   {key:'triplezone',label:'Þriggja svæða miðstöð',type:'b'},
   {key:'quadzone',label:'Fjögurra svæða miðstöð',type:'b'}
 ]},
 {title:'Sæti',fields:[
   {key:'seatcount',label:'Farþegafjöldi ásamt ökumanni',unit:'stk.',type:'n',min:2,max:9},
   {key:'upholstery',label:'Áklæði',type:'c',options:['Tau','Leður','Rúskinn']},
   {key:'heatedfront',label:'Hiti (framsæti)',type:'b'},
   {key:'coolingfront',label:'Kæling (framsæti)',type:'b'},
   {key:'memoryseat',label:'Minni (ökumannssæti)',type:'b'},
   {key:'powerseat',label:'Rafdrifið (ökumannssæti)',type:'b'},
   {key:'heatedrear',label:'Hiti (aftursæti)',type:'b'},
   {key:'isofix',label:'ISOFIX festingar',type:'b'},
   {key:'armrest',label:'Armpúði',type:'b'}
 ]},
 {title:'Ferðalög',fields:[
   {key:'gps',label:'GPS staðsetningartæki',type:'b'},
   {key:'navigation',label:'Leiðsögukerfi',type:'b'},
   {key:'outlet12',label:'Rafmagnstengi 110V',type:'b'},
   {key:'outlet230',label:'Rafmagnstengi 230V',type:'b'},
   {key:'fridge',label:'Ísskápur',type:'b'},
   {key:'awning',label:'Fortjald',type:'b'},
   {key:'extrabattery',label:'Auka rafgeymir',type:'b'}
 ]},
 {title:'Þjónusta',fields:[
   {key:'lube',label:'Smurbók',type:'b'},
   {key:'servicebook',label:'Þjónustubók',type:'b'},
   {key:'nextinspection',label:'Næsta aðalskoðun',type:'d',base:'2026-07-09',maxDays:730,gapBefore:true},
   {key:'nextservice',label:'Næsta þjónustuskoðun',type:'d',base:'2026-07-09',maxDays:365},
   {key:'warranty',label:'Ábyrgð umboðs gildir til',type:'d',base:'2026-07-09',maxDays:1095}
 ]},
 {title:'Athugasemdir',fields:[
   {key:'blurb',label:'Stutt sölulýsing',type:'c',options:SALE_BLURBS,noLabel:true}
 ]},
 {title:'Staðsetning',cond:car=>!CAPITAL_TOWNS.includes(specChoice(car,'location',LOCATION_OPTIONS)),fields:[
   {key:'location',label:'Staðsetning',type:'c',options:LOCATION_OPTIONS,noLabel:true}
 ]},
 {title:'Skráning',fields:[
   {key:'vehicleclass',label:'Aðalflokkur',type:'c',options:['Fólksbíll','Skutbíll','Sportjeppi','Jeppi','Pallbíll']}
 ]}
];
function renderSpecCategories(car){const pinned=['Vél','Eldsneyti','Rafhlaða'];const bottom=['Athugasemdir','Staðsetning'];const excluded=['Skráning'];const avail=SPEC_CATEGORIES.filter(cat=>(!cat.cond||cat.cond(car))&&!excluded.includes(cat.title));const pinnedCats=pinned.map(name=>avail.find(c=>c.title===name)).filter(Boolean);const bottomCats=bottom.map(name=>avail.find(c=>c.title===name)).filter(Boolean);const restCats=avail.filter(c=>!pinned.includes(c.title)&&!bottom.includes(c.title)).sort((a,b)=>a.title.localeCompare(b.title,'is'));return [...pinnedCats,...restCats,...bottomCats].map(cat=>{const lines=cat.fields.map(f=>{const gap=f.gapBefore?' style="margin-top:10px"':'';if(f.type==='b'){if(!specBool(car,f.key,f.prob))return'';return `<div class="spec-line"${gap}>✓ ${f.label}</div>`}if(f.type==='n'){const v=specNum(car,f.key,f.min,f.max,f.step);return `<div class="spec-line"${gap}>${f.label}: ${v}${f.unit?' '+f.unit:''}</div>`}if(f.type==='c'){const v=specChoice(car,f.key,f.options);return `<div class="spec-line"${gap}>${f.noLabel?'':f.label+': '}${v}</div>`}if(f.type==='d'){const v=specDate(car,f.key,f.base,f.maxDays);return `<div class="spec-line"${gap}>${f.label}: ${v}</div>`}return''}).filter(Boolean).join('');if(!lines)return'';return `<div class="spec-cat"><div class="spec-cat-title">${cat.title}</div>${lines}</div>`}).filter(Boolean).join('')}
function renderDetail(){const params=new URLSearchParams(location.search);const car=CARS.find(c=>c.id===params.get('id'))||CARS[0];const el=document.getElementById('detail');if(!el)return;document.title=car.name+' | Bílskúrinn';setBrandLogo(document.getElementById('detailBrandLogo'),car.brand);const photos=carPhotos(car);GALLERY=photos;const noPhotoClass=hasPhoto(car)?'':'no-photo';const thumbsHtml=buildThumbsHtml(photos);const promo=carPromo(car);const promoHtml=promo?`<div class="promo-line"><div class="promo-label"><strong>${t('detail.promoLabel')}</strong></div><div class="promo-old">${t('detail.oldPriceLabel')} ${kr(promo.old)}</div></div>`:'';const specCatsHtml=renderSpecCategories(car);const mainArrowsHtml=photos.length>1?`<button type="button" class="main-arrow main-prev" onclick="mainGalleryNav(-1)">‹</button><button type="button" class="main-arrow main-next" onclick="mainGalleryNav(1)">›</button>`:'';el.innerHTML=`<div><div class="gallery-main reveal"><img id="galleryMainImg" class="${noPhotoClass}" src="${photos[0]}" alt="${car.name}" onclick="if(!mainSwiped)openLightbox(MAIN_IDX)">${mainArrowsHtml}</div>${thumbsHtml}<h3>${t('detail.features')}</h3><div class="spec-cats">${specCatsHtml}</div></div><div class="reveal"><div class="detail-heading-row"><div><div class="detail-brand-name">${car.brand}</div><h2>${carModelTrim(car)}</h2></div>${car.inStock?`<span class="instock-pill">${t('filter.inStock')}</span>`:''}</div><div class="price" style="font-size:34px;margin-top:8px">${kr(car.price)}</div>${promoHtml}<div class="specs" style="margin:28px 0"><div class="spec"><span>${t('detail.year')}</span>${car.year}</div><div class="spec"><span>${t('detail.mileage')}</span>${km(car.km)}</div><div class="spec"><span>${t('detail.fuel')}</span>${tFuel(car.fuel)}</div><div class="spec"><span>${t('detail.gear')}</span>${tGear(car.gear)}</div><div class="spec"><span>${t('detail.color')}</span>${carColor(car)}</div><div class="spec"><span>${t('detail.listedDate')}</span>${carListedDate(car)}</div></div><div style="margin-top:28px" class="btns"><a href="inquiry.html?id=${encodeURIComponent(car.id)}" class="btn primary">${t('detail.inquire')}</a><a href="tel:+3545600000" class="btn">${t('detail.call')}</a>${!car.inStock?`<a href="booking.html?id=${encodeURIComponent(car.id)}" class="btn">${t('detail.bookMeeting')}</a>`:''}</div></div>`;MAIN_IDX=0;initMainSwipe()}
function setGalleryMain(i){const img=document.getElementById('galleryMainImg');if(!img)return;MAIN_IDX=i;img.src=GALLERY[i];document.querySelectorAll('.gallery-thumbs .thumb-wrap').forEach((t,idx)=>t.classList.toggle('active',idx===i))}
function mainGalleryNav(dir){if(!GALLERY.length)return;const next=(MAIN_IDX+dir+GALLERY.length)%GALLERY.length;setGalleryMain(next)}
function initMainSwipe(){const img=document.getElementById('galleryMainImg');if(!img)return;let startX=null;img.addEventListener('pointerdown',e=>{startX=e.clientX;mainSwiped=false});img.addEventListener('pointermove',e=>{if(startX===null)return;if(Math.abs(e.clientX-startX)>10)mainSwiped=true});img.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX;startX=null;if(Math.abs(dx)>=40){if(dx<0)mainGalleryNav(1);else mainGalleryNav(-1)}});img.addEventListener('pointercancel',()=>{startX=null})}
function openLightbox(i){if(!GALLERY.length)return;GALLERY_IDX=i;let lb=document.getElementById('lightbox');if(!lb){lb=document.createElement('div');lb.id='lightbox';lb.className='lightbox';lb.innerHTML=`<button class="lightbox-close" onclick="closeLightbox()">×</button><button class="lightbox-arrow lightbox-prev" onclick="lightboxNav(-1)">‹</button><img id="lightboxImg" src="" alt=""><button class="lightbox-arrow lightbox-next" onclick="lightboxNav(1)">›</button><div class="lightbox-counter" id="lightboxCounter"></div>`;lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox()});document.body.appendChild(lb)}renderLightbox();lb.classList.add('open')}
function renderLightbox(){const img=document.getElementById('lightboxImg');const counter=document.getElementById('lightboxCounter');if(img)img.src=GALLERY[GALLERY_IDX];if(counter)counter.textContent=`${GALLERY_IDX+1} / ${GALLERY.length}`}
function lightboxNav(dir){if(!GALLERY.length)return;GALLERY_IDX=(GALLERY_IDX+dir+GALLERY.length)%GALLERY.length;renderLightbox()}
function closeLightbox(){const lb=document.getElementById('lightbox');if(lb)lb.classList.remove('open')}
document.addEventListener('keydown',e=>{const lb=document.getElementById('lightbox');if(!lb||!lb.classList.contains('open'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowRight')lightboxNav(1);if(e.key==='ArrowLeft')lightboxNav(-1)});
function calculatePayout(){
  const priceEl=document.getElementById('salePrice');
  const payoffEl=document.getElementById('payoff');
  const price=parseISK(priceEl?.value);
  const payoff=parseISK(payoffEl?.value);
  const percentFee=price*COMMISSION_RATE*(1+VAT_RATE);
  const fee=Math.max(percentFee,MIN_FEE);
  const payout=Math.max(price-fee-payoff,0);
  const feeEl=document.getElementById('calcFee'), payoffOut=document.getElementById('calcPayoff'), payoutEl=document.getElementById('calcPayout'), percentEl=document.getElementById('calcPercent');
  if(feeEl) feeEl.textContent=kr(fee);
  if(payoffOut) payoffOut.textContent=kr(payoff);
  if(payoutEl) payoutEl.textContent=kr(payout);
  if(percentEl) percentEl.textContent=price && percentFee < MIN_FEE ? 'Lágmarkssöluþóknun' : '3,8% + VSK';
}
function currentDetailCar(){const params=new URLSearchParams(location.search);return CARS.find(c=>c.id===params.get('id'))||null}
function sendInquiryMailto(form){const car=currentDetailCar();const name=form.querySelector('[name="name"]')?.value||'';const email=form.querySelector('[name="email"]')?.value||'';const phone=form.querySelector('[name="phone"]')?.value||'';const msg=form.querySelector('[name="message"]')?.value||'';const subject=encodeURIComponent('Fyrirspurn um '+(car?car.name:'bíl')+' - Bílskúrinn');const body=encodeURIComponent(`Nafn: ${name}\nNetfang: ${email}\nSímanúmer: ${phone}\nBíll: ${car?car.name+' ('+car.id+')':''}\n\nSkilaboð:\n${msg}`);window.location.href=`mailto:bilskurinn@bilsk.is?subject=${subject}&body=${body}`}
function sendBookingMailto(form){const car=currentDetailCar();const name=form.querySelector('[name="name"]')?.value||'';const email=form.querySelector('[name="email"]')?.value||'';const phone=form.querySelector('[name="phone"]')?.value||'';const date=form.querySelector('[name="date"]')?.value||'';const time=form.querySelector('[name="time"]')?.value||'';const subject=encodeURIComponent('Bókun á skoðun - '+(car?car.name:'bíll')+' - Bílskúrinn');const body=encodeURIComponent(`Nafn: ${name}\nNetfang: ${email}\nSímanúmer: ${phone}\nBíll: ${car?car.name+' ('+car.id+')':''}\nDagsetning: ${date}\nTímasetning: ${time}`);window.location.href=`mailto:bilskurinn@bilsk.is?subject=${subject}&body=${body}`}
function sendSellMailto(form){const val=n=>form.querySelector('[name="'+n+'"]')?.value||'';const fullName=val('fullName'),email=val('email'),phone=val('phone'),plate=val('plate'),make=val('make'),model=val('model'),year=val('year'),mileage=val('mileage'),price=val('price'),extra=val('extra');const nPhotos=sellPhotoFiles.length;const photoNames=nPhotos?sellPhotoFiles.map(f=>f.name).join(', '):'';const subject=encodeURIComponent('Beiðni um sölu á bíl - Bílskúrinn');const body=encodeURIComponent(`Fullt nafn: ${fullName}\nNetfang: ${email}\nSímanúmer: ${phone}\nFastanúmer/bílnúmer: ${plate}\nTegund: ${make}\nModel: ${model}\nÁrgerð: ${year}\nAkstur: ${mileage?mileage+' km.':''}\nÓskað verð: ${price?price+' kr.':''}\nFjöldi mynda: ${nPhotos}${photoNames?(' ('+photoNames+')'):''}\n\nViðbótarupplýsingar:\n${extra}`);window.location.href=`mailto:bilskurinn@bilsk.is?subject=${subject}&body=${body}`}
function sellPhotoCountText(n){if(currentLang==='en')return n===1?'1 photo selected':n+' photos selected';if(currentLang==='pl')return n===1?'1 zdjęcie wybrane':n+' zdjęcia wybrane';return n===1?'1 mynd valin':n+' myndir valdar'}
const MAX_SELL_PHOTOS=20;
let sellPhotoFiles=[];
function syncSellPhotoInput(){const input=document.getElementById('sellPhotos');if(!input)return;const dt=new DataTransfer();sellPhotoFiles.forEach(f=>dt.items.add(f));input.files=dt.files}
function renderSellPhotoPreviews(){const wrap=document.getElementById('sellPhotoPreviews');if(!wrap)return;wrap.innerHTML=sellPhotoFiles.map((f,i)=>`<div class="photo-thumb"><img src="${URL.createObjectURL(f)}" alt=""><button type="button" class="photo-thumb-remove" onclick="removeSellPhoto(${i})">×</button></div>`).join('')}
function removeSellPhoto(i){sellPhotoFiles.splice(i,1);syncSellPhotoInput();renderSellPhotoPreviews();updateSellPhotoStatus()}
function handleSellPhotoChange(){const input=document.getElementById('sellPhotos');if(!input)return;const incoming=Array.from(input.files||[]);const room=Math.max(MAX_SELL_PHOTOS-sellPhotoFiles.length,0);sellPhotoFiles=sellPhotoFiles.concat(incoming.slice(0,room));syncSellPhotoInput();renderSellPhotoPreviews();updateSellPhotoStatus()}
function resetSellPhotos(){sellPhotoFiles=[];syncSellPhotoInput();renderSellPhotoPreviews();updateSellPhotoStatus()}
function updateSellPhotoStatus(){const status=document.getElementById('sellPhotosStatus');if(!status)return;const n=sellPhotoFiles.length;status.textContent=n?sellPhotoCountText(n):t('sell.form.noPhotos')}
function populateSellYearSelect(){const sel=document.getElementById('sellYear');if(!sel)return;const current=sel.value;let html=`<option value="" disabled ${current?'':'selected'}>${t('sell.form.year')}</option>`;for(let y=2026;y>=1900;y--){html+=`<option value="${y}"${String(y)===current?' selected':''}>${y}</option>`}sel.innerHTML=html}

const IMPORT_BRANDS=['Audi','BMW','BYD','Cadillac','Chevrolet','Citroën','Dacia','Dodge','Ferrari','Fiat','Ford','GMC','Honda','Hyundai','Jaguar','Jeep','Kia','Land Rover','Lexus','Lincoln','Maserati','Mazda','Mercedes-Benz','MG','Mini','Mitsubishi','Nissan','Opel','Peugeot','Polestar','Porsche','Renault','Skoda','Smart','SsangYong','Subaru','Suzuki','Tesla','Toyota','Volkswagen','Volvo'];
const MAX_MAKES=5;
let makeMatches=[];
let makeHighlightIndex=-1;
let selectedMakes=[];
function renderMakePanel(filter){
  const panel=document.getElementById('makePanel');
  if(!panel) return;
  const f=(filter||'').toLowerCase();
  makeMatches=IMPORT_BRANDS.filter(b=>b.toLowerCase().includes(f));
  makeHighlightIndex=-1;
  renderMakeOptions();
  panel.classList.add('open');
}
function renderMakeOptions(){
  const panel=document.getElementById('makePanel');
  if(!panel) return;
  panel.innerHTML = makeMatches.length ? makeMatches.map((b,i)=>{
    const isSelected=selectedMakes.includes(b);
    const cls='combo-option'+(i===makeHighlightIndex?' highlight':'')+(isSelected?' selected':'');
    return `<div class="${cls}" onmousedown="event.preventDefault();toggleMakeChoice('${b.replace(/'/g,"\\'")}')" onclick="event.stopPropagation()">${isSelected?'✓ ':''}${b}</div>`;
  }).join('') : `<div class="combo-empty">${t('import.form.noMatch')}</div>`;
}
function syncMakeInput(){
  const input=document.getElementById('importMakeValue');
  if(input) input.value=selectedMakes.join(', ');
}
function updateMakePlaceholder(){
  const input=document.getElementById('importMake');
  if(!input) return;
  input.placeholder = selectedMakes.length ? selectedMakes.join(', ') : t('form.make');
}
function toggleMakeChoice(brand){
  const i=selectedMakes.indexOf(brand);
  if(i===-1){
    if(selectedMakes.length>=MAX_MAKES) return;
    selectedMakes.push(brand);
  } else {
    selectedMakes.splice(i,1);
  }
  syncMakeInput();
  updateMakePlaceholder();
  const input=document.getElementById('importMake');
  if(input) input.value='';
  renderMakePanel('');
  input?.focus();
}
function makeKeyNav(e){
  const panel=document.getElementById('makePanel');
  if(!panel || !panel.classList.contains('open') || !makeMatches.length) return;
  if(e.key==='ArrowDown'){
    e.preventDefault();
    makeHighlightIndex = (makeHighlightIndex+1) % makeMatches.length;
    renderMakeOptions();
    scrollHighlightedMakeIntoView();
  } else if(e.key==='ArrowUp'){
    e.preventDefault();
    makeHighlightIndex = (makeHighlightIndex-1+makeMatches.length) % makeMatches.length;
    renderMakeOptions();
    scrollHighlightedMakeIntoView();
  } else if(e.key==='Enter'){
    if(makeHighlightIndex>=0 && makeHighlightIndex<makeMatches.length){
      e.preventDefault();
      toggleMakeChoice(makeMatches[makeHighlightIndex]);
    }
  } else if(e.key==='Escape'){
    panel.classList.remove('open');
  }
}
function scrollHighlightedMakeIntoView(){
  const panel=document.getElementById('makePanel');
  if(!panel) return;
  const el=panel.querySelector('.combo-option.highlight');
  if(el) el.scrollIntoView({block:'nearest'});
}
function handleMakeBlur(){
  const input=document.getElementById('importMake');
  if(input) input.value='';
  document.getElementById('makePanel')?.classList.remove('open');
}
function resetMakeSelection(){
  selectedMakes=[];
  syncMakeInput();
  updateMakePlaceholder();
  const input=document.getElementById('importMake');
  if(input) input.value='';
}

const YEARS_PER_PAGE=21;
let yearViewStart=null;
let yearRangeFrom=null;
let yearRangeTo=null;
function initImportYear(){
  const trigger=document.getElementById('yearTrigger');
  if(!trigger) return;
  const now=new Date().getFullYear();
  yearViewStart = now-(YEARS_PER_PAGE-1);
  refreshYearTriggerLabel();
}
function toggleYearPanel(e){
  e.stopPropagation();
  const panel=document.getElementById('yearPanel');
  if(!panel) return;
  const willOpen=!panel.classList.contains('open');
  closeAllDropdowns();
  if(willOpen){ if(yearViewStart===null) yearViewStart=new Date().getFullYear()-(YEARS_PER_PAGE-1); renderYearPanel(); panel.classList.add('open'); }
}
function yearNav(dir){ yearViewStart += dir*YEARS_PER_PAGE; renderYearPanel(); }
function updateImportYearInput(){
  const input=document.getElementById('importYear');
  if(!input) return;
  if(yearRangeFrom!==null && yearRangeTo!==null) input.value = yearRangeFrom===yearRangeTo ? String(yearRangeFrom) : `${yearRangeFrom}-${yearRangeTo}`;
  else if(yearRangeFrom!==null) input.value = String(yearRangeFrom);
  else input.value='';
}
function selectYear(y){
  if(yearRangeFrom===null || (yearRangeFrom!==null && yearRangeTo!==null)){
    yearRangeFrom=y; yearRangeTo=null;
  } else {
    if(y<yearRangeFrom){ yearRangeTo=yearRangeFrom; yearRangeFrom=y; }
    else { yearRangeTo=y; }
  }
  updateImportYearInput();
  refreshYearTriggerLabel();
  renderYearPanel();
}
function renderYearPanel(){
  const panel=document.getElementById('yearPanel');
  if(!panel) return;
  const minYear=1900, maxYear=new Date().getFullYear();
  const cells=[];
  for(let y=yearViewStart;y<yearViewStart+YEARS_PER_PAGE;y++){
    const disabled = y<minYear||y>maxYear;
    const isEndpoint = y===yearRangeFrom || y===yearRangeTo;
    const inRange = yearRangeFrom!==null && yearRangeTo!==null && y>yearRangeFrom && y<yearRangeTo;
    cells.push(`<div class="cal-day${disabled?' disabled':''}${isEndpoint?' active':''}${inRange?' in-range':''}"${disabled?'':` onclick="event.stopPropagation();selectYear(${y})"`}>${y}</div>`);
  }
  const prevDisabled = yearViewStart<=minYear;
  const nextDisabled = yearViewStart+YEARS_PER_PAGE>maxYear;
  panel.innerHTML=`<div class="cal-head"><button type="button" ${prevDisabled?'disabled':''} onclick="event.stopPropagation();yearNav(-1)">‹</button><span>${yearViewStart}–${yearViewStart+YEARS_PER_PAGE-1}</span><button type="button" ${nextDisabled?'disabled':''} onclick="event.stopPropagation();yearNav(1)">›</button></div><div class="cal-grid year-grid">${cells.join('')}</div>`;
}
function refreshYearTriggerLabel(){
  const label=document.getElementById('yearTriggerLabel');
  if(!label) return;
  if(yearRangeFrom!==null && yearRangeTo!==null && yearRangeFrom!==yearRangeTo) label.textContent = `${yearRangeFrom} - ${yearRangeTo}`;
  else if(yearRangeFrom!==null) label.textContent = String(yearRangeFrom);
  else label.textContent = t('import.form.year');
}
function resetImportYear(){
  const input=document.getElementById('importYear');
  if(input) input.value='';
  yearRangeFrom=null;
  yearRangeTo=null;
  refreshYearTriggerLabel();
}

const IMPORT_COLORS=['Hvítur','Svartur','Grár','Dökk grár','Silfur','Blár','Rauður','Grænn','Brúnn','Gulur','Matt','Annað'];
let selectedColors=[];
function toggleColorPanel(e){
  e.stopPropagation();
  const panel=document.getElementById('colorOptions');
  if(!panel) return;
  const willOpen=!panel.classList.contains('open');
  closeAllDropdowns();
  if(willOpen){ renderColorOptions(); panel.classList.add('open'); }
}
function toggleColorChoice(c){
  const i=selectedColors.indexOf(c);
  if(i===-1) selectedColors.push(c); else selectedColors.splice(i,1);
  syncColorInput();
  renderColorOptions();
  updateColorTriggerLabel();
}
function syncColorInput(){
  const input=document.getElementById('importColor');
  if(input) input.value=selectedColors.join(', ');
}
function updateColorTriggerLabel(){
  const label=document.getElementById('colorTriggerLabel');
  if(!label) return;
  label.textContent = selectedColors.length ? selectedColors.join(', ') : t('import.form.color');
}
const COLOR_SWATCHES={'Hvítur':'#f5f5f5','Svartur':'#1a1a1a','Grár':'#8a8f98','Silfur':'#c9ccd1','Blár':'#2563eb','Rauður':'#dc2626','Grænn':'#16a34a','Brúnn':'#6b4423','Gulur':'#f2c94c','Dökk grár':'#33363b'};
const COLOR_DARK_TEXT=['Hvítur','Silfur','Gulur'];
function renderColorOptions(){
  const panel=document.getElementById('colorOptions');
  if(!panel) return;
  const cells = IMPORT_COLORS.map(c=>{
    const isActive=selectedColors.includes(c);
    const bg=COLOR_SWATCHES[c];
    if(isActive || !bg) return `<div class="cal-day${isActive?' active':''}" onclick="event.stopPropagation();toggleColorChoice('${c}')">${c}</div>`;
    const txt=COLOR_DARK_TEXT.includes(c)?'#0b0f16':'#ffffff';
    return `<div class="cal-day" style="background:${bg};color:${txt};border-color:rgba(120,120,120,.35)" onclick="event.stopPropagation();toggleColorChoice('${c}')">${c}</div>`;
  }).join('');
  panel.innerHTML = `<div class="cal-grid color-grid">${cells}</div>`;
  panel.classList.add('open');
}
function resetColorChoice(){ selectedColors=[]; syncColorInput(); updateColorTriggerLabel(); }

const IMPORT_FUELS=['Rafmagn','Dísel','Bensín','Bensín/Rafmagn','PlugInHybrid','AlvegSama'];
let selectedFuels=[];
function toggleFuelPanel(e){
  e.stopPropagation();
  const panel=document.getElementById('fuelOptions');
  if(!panel) return;
  const willOpen=!panel.classList.contains('open');
  closeAllDropdowns();
  if(willOpen){ renderFuelOptions(); panel.classList.add('open'); }
}
function toggleFuelChoice(f){
  const i=selectedFuels.indexOf(f);
  if(i===-1) selectedFuels.push(f); else selectedFuels.splice(i,1);
  syncFuelInput();
  renderFuelOptions();
  refreshFuelTriggerLabel();
}
function syncFuelInput(){
  const input=document.getElementById('importFuel');
  if(input) input.value=selectedFuels.join(', ');
}
function refreshFuelTriggerLabel(){
  const label=document.getElementById('fuelTriggerLabel');
  if(!label) return;
  label.textContent = selectedFuels.length ? selectedFuels.map(f=>t('fuel.'+f)).join(', ') : t('import.form.fuel');
}
function renderFuelOptions(){
  const panel=document.getElementById('fuelOptions');
  if(!panel) return;
  const cells = IMPORT_FUELS.map(f=>`<div class="cal-day${selectedFuels.includes(f)?' active':''}" onclick="event.stopPropagation();toggleFuelChoice('${f}')">${t('fuel.'+f)}</div>`).join('');
  panel.innerHTML = `<div class="cal-grid fuel-grid">${cells}</div>`;
  panel.classList.add('open');
}
function resetImportFuel(){ selectedFuels=[]; syncFuelInput(); refreshFuelTriggerLabel(); }

const IMPORT_MILEAGE_OPTIONS=['Skoða allt','Nýtt ökutæki','Undir 5.000 km','Undir 10.000 km','Undir 20.000 km','Undir 30.000 km','Undir 40.000 km','Undir 50.000 km','Undir 60.000 km','Undir 80.000 km','Undir 100.000 km','Yfir 100.000 km'];
let selectedMileage=null;
function toggleMileagePanel(e){
  e.stopPropagation();
  const panel=document.getElementById('mileageOptions');
  if(!panel) return;
  const willOpen=!panel.classList.contains('open');
  closeAllDropdowns();
  if(willOpen){ renderMileageOptions(); panel.classList.add('open'); }
}
function selectMileage(v){
  selectedMileage=v;
  syncMileageInput();
  refreshMileageTriggerLabel();
  document.getElementById('mileageOptions')?.classList.remove('open');
}
function syncMileageInput(){
  const input=document.getElementById('importMileage');
  if(input) input.value=selectedMileage||'';
}
function refreshMileageTriggerLabel(){
  const label=document.getElementById('mileageTriggerLabel');
  if(!label) return;
  label.textContent = selectedMileage || t('import.form.mileage');
}
function renderMileageOptions(){
  const panel=document.getElementById('mileageOptions');
  if(!panel) return;
  const cells = IMPORT_MILEAGE_OPTIONS.map(v=>`<div class="cal-day${v===selectedMileage?' active':''}" onclick="event.stopPropagation();selectMileage('${v.replace(/'/g,"\\'")}')">${v}</div>`).join('');
  panel.innerHTML = `<div class="cal-grid mileage-grid">${cells}</div>`;
  panel.classList.add('open');
}
function resetImportMileage(){ selectedMileage=null; syncMileageInput(); refreshMileageTriggerLabel(); }

function closeAllDropdowns(){
  document.getElementById('brandOptions')?.classList.remove('open');
  document.getElementById('datePanel')?.classList.remove('open');
  document.getElementById('makePanel')?.classList.remove('open');
  document.getElementById('yearPanel')?.classList.remove('open');
  document.getElementById('colorOptions')?.classList.remove('open');
  document.getElementById('fuelOptions')?.classList.remove('open');
  document.getElementById('mileageOptions')?.classList.remove('open');
  document.getElementById('featuredSortOptions')?.classList.remove('open');
}
function initImportFormWidgets(){
  const makeInput=document.getElementById('importMake');
  if(makeInput){
    makeInput.addEventListener('focus',()=>renderMakePanel(makeInput.value));
    makeInput.addEventListener('input',()=>renderMakePanel(makeInput.value));
    makeInput.addEventListener('blur',()=>setTimeout(handleMakeBlur,120));
    makeInput.addEventListener('keydown',makeKeyNav);
  }
  document.getElementById('makeCombo')?.addEventListener('click',e=>e.stopPropagation());
  updateMakePlaceholder();
  initImportYear();
  updateColorTriggerLabel();
  refreshFuelTriggerLabel();
  refreshMileageTriggerLabel();
}
function resetImportFormWidgets(){
  resetMakeSelection();
  resetImportYear();
  resetColorChoice();
  resetImportFuel();
  resetImportMileage();
}

function sendImportMailto(form){
  const val=n=>form.querySelector('[name="'+n+'"]')?.value||'';
  const fullName=val('fullName'),email=val('email'),phone=val('phone'),make=val('make'),model=val('model'),year=val('year'),budget=val('budget'),fuel=val('fuel'),mileage=val('mileage'),color=val('color'),desc=val('desc');
  const subject=encodeURIComponent('Innflutningsbeiðni - Bílskúrinn');
  const body=encodeURIComponent(`Fullt nafn: ${fullName}\nNetfang: ${email}\nSímanúmer: ${phone}\nTegund: ${make}\nModel: ${model}\nÁrgerð: ${year}\nVerð hugmynd: ${budget?budget+' kr.':''}\nEldsneyti: ${fuel}\nKeyrður: ${mileage}\nÆskilegur litur: ${color}\n\nLýsing:\n${desc}`);
  window.location.href=`mailto:bilskurinn@bilsk.is?subject=${subject}&body=${body}`;
}

function fakeSubmit(e){e.preventDefault();const form=e.target;if(form.id==='inquiryForm')sendInquiryMailto(form);if(form.id==='bookingForm')sendBookingMailto(form);if(form.id==='sellForm')sendSellMailto(form);if(form.id==='importForm')sendImportMailto(form);const box=form.querySelector('.notice');if(box)box.classList.remove('hidden');form.classList.add('submitted');form.reset();calculatePayout();resetSellPhotos();positionISKSuffix('sellPrice','sellPriceSuffix');positionISKSuffix('sellMileage','sellMileageSuffix');positionISKSuffix('importBudget','importBudgetSuffix');resetImportFormWidgets()}
function renderBookingSlots(){const select=document.getElementById('bookingTime');if(!select)return;const dateInput=document.getElementById('bookingDate');const now=new Date();const todayStr=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');const dateStr=dateInput&&dateInput.value?dateInput.value:todayStr;const isPast=dateStr<todayStr;const isToday=dateStr===todayStr;const minMins=isToday?(now.getHours()*60+now.getMinutes()+120):-1;const slots=[];if(!isPast){let mins=10*60;while(mins<=17*60+45){if(!isToday||mins>=minMins){const hh=String(Math.floor(mins/60)).padStart(2,'0');const mm=String(mins%60).padStart(2,'0');slots.push(`${hh}:${mm}`)}mins+=15}}select.innerHTML=slots.length?slots.map(s=>`<option value="${s}">${s}</option>`).join(''):`<option value="">${t('booking.noSlots')}</option>`}
const IS_MONTHS=['janúar','febrúar','mars','apríl','maí','júní','júlí','ágúst','september','október','nóvember','desember'];
const IS_WEEKDAYS=['Mán','Þri','Mið','Fim','Fös','Lau','Sun'];
let calViewYear=null,calViewMonth=null,calSelectedDate=null;
function calDateStr(y,m,d){return y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0')}
function calFormatDisplay(y,m,d){return d+'. '+IS_MONTHS[m]+' '+y}
function initBookingDate(){const hidden=document.getElementById('bookingDate');if(!hidden)return;const now=new Date();calViewYear=now.getFullYear();calViewMonth=now.getMonth();calSelectedDate={y:now.getFullYear(),m:now.getMonth(),d:now.getDate()};hidden.value=calDateStr(calSelectedDate.y,calSelectedDate.m,calSelectedDate.d);const label=document.getElementById('dateTriggerLabel');if(label)label.textContent=calFormatDisplay(calSelectedDate.y,calSelectedDate.m,calSelectedDate.d)}
function toggleDateCalendar(e){e.stopPropagation();const panel=document.getElementById('datePanel');if(!panel)return;const willOpen=!panel.classList.contains('open');document.getElementById('brandOptions')?.classList.remove('open');if(willOpen){renderCalendarPanel();panel.classList.add('open')}else{panel.classList.remove('open')}}
function calNavMonth(dir){calViewMonth+=dir;if(calViewMonth<0){calViewMonth=11;calViewYear--}if(calViewMonth>11){calViewMonth=0;calViewYear++}renderCalendarPanel()}
function selectCalendarDate(y,m,d){calSelectedDate={y,m,d};const hidden=document.getElementById('bookingDate');if(hidden)hidden.value=calDateStr(y,m,d);const label=document.getElementById('dateTriggerLabel');if(label)label.textContent=calFormatDisplay(y,m,d);const panel=document.getElementById('datePanel');if(panel)panel.classList.remove('open');renderBookingSlots()}
function renderCalendarPanel(){const panel=document.getElementById('datePanel');if(!panel)return;const now=new Date();now.setHours(0,0,0,0);const firstOfMonth=new Date(calViewYear,calViewMonth,1);const daysInMonth=new Date(calViewYear,calViewMonth+1,0).getDate();let startOffset=firstOfMonth.getDay()-1;if(startOffset<0)startOffset=6;const cells=[];for(let i=0;i<startOffset;i++)cells.push('<div class="cal-day empty"></div>');for(let d=1;d<=daysInMonth;d++){const cellDate=new Date(calViewYear,calViewMonth,d);cellDate.setHours(0,0,0,0);const isPast=cellDate<now;const isSelected=!!(calSelectedDate&&calSelectedDate.y===calViewYear&&calSelectedDate.m===calViewMonth&&calSelectedDate.d===d);cells.push(`<div class="cal-day${isPast?' disabled':''}${isSelected?' active':''}"${isPast?'':` onclick="event.stopPropagation();selectCalendarDate(${calViewYear},${calViewMonth},${d})"`}>${d}</div>`)}const prevDisabled=calViewYear===now.getFullYear()&&calViewMonth===now.getMonth();panel.innerHTML=`<div class="cal-head"><button type="button" ${prevDisabled?'disabled':''} onclick="event.stopPropagation();calNavMonth(-1)">‹</button><span>${IS_MONTHS[calViewMonth]} ${calViewYear}</span><button type="button" onclick="event.stopPropagation();calNavMonth(1)">›</button></div><div class="cal-grid">${IS_WEEKDAYS.map(w=>`<div class="cal-dow">${w}</div>`).join('')}${cells.join('')}</div>`}
function initDetailPageContext(){const params=new URLSearchParams(location.search);const id=params.get('id')||'';const car=currentDetailCar();const nameEl=document.getElementById('detailCarName');if(nameEl&&car)nameEl.textContent=car.name;['inquiryBackLink','bookingBackLink'].forEach(elId=>{const el=document.getElementById(elId);if(el)el.href='car.html'+(id?('?id='+encodeURIComponent(id)):'')});}
function renderBookingCarCard(){const card=document.getElementById('bookingCarCard');if(!card)return;const car=currentDetailCar();if(!car){card.classList.add('hidden');card.innerHTML='';return}card.classList.remove('hidden');const photo=carPhotos(car)[0];card.innerHTML=`<img class="hero-car-img" src="${photo}" alt="${car.name}"><div class="hero-car-info"><div class="hero-car-name">${car.name}</div><div class="hero-car-price">${kr(car.price)}</div><div class="hero-car-meta"><span>${km(car.km)}</span><span>${car.year}</span><span>${tFuel(car.fuel)}</span><span>${tGear(car.gear)}</span></div></div>`}
function logoScroll(){const intro=document.querySelector('.logo-intro');if(!intro)return;const rect=intro.getBoundingClientRect();const total=window.innerHeight*.85;let p=Math.min(Math.max(-rect.top/total,0),1);document.documentElement.style.setProperty('--logo-scale',1+p*2.8);document.documentElement.style.setProperty('--logo-opacity',Math.max(1-p*1.25,0));document.documentElement.style.setProperty('--hint-opacity',Math.max(1-p*2,0))}

function addThemeToggle(){
  if(document.querySelector('.theme-toggle')) return;
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light') document.body.classList.add('light-theme');
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label','Skipta um litastillingu');
  btn.innerHTML = `<span>${document.body.classList.contains('light-theme') ? '☀️' : '🌙'}</span>`;
  btn.addEventListener('click', toggleTheme);
  document.body.appendChild(btn);
}
function toggleTheme(){
  const logos=document.querySelectorAll('.logo-intro-img,.header-logo-inline,.drawer-logo,.footer-logo');
  logos.forEach(img=>img.classList.add('logo-fading'));
  setTimeout(()=>{
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    const icon = document.querySelector('.theme-toggle span');
    if(icon) icon.textContent = isLight ? '☀️' : '🌙';
    updateLogos();
    requestAnimationFrame(()=>{requestAnimationFrame(()=>{logos.forEach(img=>img.classList.remove('logo-fading'))})});
  },576);
}
function updateLogos(){
  const isLight=document.body.classList.contains('light-theme');
  const src=isLight?'bilskurin-logo-light.png':'bilskurinn-logo.png';
  document.querySelectorAll('.logo-intro-img,.drawer-logo,.footer-logo,.header-logo-inline').forEach(img=>{
    if(img.getAttribute('src')!==src) img.src=src;
  });
}
function observeReveals(){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))}
document.addEventListener('DOMContentLoaded',()=>{addThemeToggle();layout();loadCars();calculatePayout();['search','fuel','sort','kmFrom','kmTo','priceFrom','priceTo','yearFrom','yearTo'].forEach(id=>document.getElementById(id)?.addEventListener('input',renderCars));wireISKField('salePrice','salePriceSuffix',999999999,calculatePayout);wireISKField('payoff','payoffSuffix',999999999,calculatePayout);wireISKField('sellPrice','sellPriceSuffix',999999999);wireISKField('sellMileage','sellMileageSuffix',999999);wireISKField('importBudget','importBudgetSuffix',999999999);document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',fakeSubmit));window.addEventListener('scroll',logoScroll,{passive:true});logoScroll();observeReveals();initBookingDate();renderBookingSlots();initDetailPageContext();renderBookingCarCard();document.getElementById('sellPhotos')?.addEventListener('change',handleSellPhotoChange);updateSellPhotoStatus();if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>{positionISKSuffix('salePrice','salePriceSuffix');positionISKSuffix('payoff','payoffSuffix');positionISKSuffix('sellPrice','sellPriceSuffix');positionISKSuffix('sellMileage','sellMileageSuffix');positionISKSuffix('importBudget','importBudgetSuffix')})}initImportFormWidgets()});
