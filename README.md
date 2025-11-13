# AURKIBIDEA

1. [SARRERA](#sarrera)
2. [HELBURUAK](#helburuak)
   - 2.1 [HELBURU OROKORRA](#helburu-orokorra)
   - 2.2 [HELBURU ESPEZIFIKOAK](#helburu-espezifikoak)
3. [ZEREGINAK ETA KRONOGRAMA](#zereginak-eta-kronograma)
4. [BALIABIDEAK](#baliabideak)
   - 4.1 [BALIABIDE MATERIALAK](#baliabide-materialak)
   - 4.2 [GIZA BALIABIDEAK](#giza-baliabideak)
5. [INSTALAZIO PROZESUA](#instalazio-prozesua)
6. [CREATIVE COMMONS LIZENTZIA](#creative-commons-lizentzia)
7. [IZANDAKO ARAZOAK, ETA AURRERA EGITEKO MODUA](#izandako-arazoak-eta-aurrera-egiteko-modua)
8. [ONDORIOAK](#ondorioak)
   - 8.1 [ZER IKASI DUGU?](#zer-ikasi-dugu)
   - 8.2 [DENBORA](#denbora)
   - 8.3 [TALDE-LANA](#talde-lana)
   - 8.4 [ETORKIZUNEKO ALDAKETAK](#etorkizuneko-aldaketak)
9. [BIBLIOGRAFIA](#bibliografia)
10. [ERANSKINAK](#eranskinak)

---
## SARRERA

<p align="justify">Proiektu hau Bergarako Antzokiak egindako eskaera bati erantzuteko sortu da. Antzokiak bere ekitaldiak online erakusteko eta sarrerak Internet bidez saltzeko aukera emango zion webgune bat behar zuen, eta gure zeregina izan da behar horri erantzuten dion web aplikazioa garatzea.</p>

<p align="justify">Aplikazioaren helburua, erabiltzaileei antzokiko ekitaldien inguruko informazioa modu errazean kontsultatzeko eta sarrerak erosteko aukera ematea da. Aldi berean, administratzaileek ekitaldiak, erabiltzaileak eta salmentak kudeatu ahal izango dituzte.</p>

<p align="justify">Webgunea erabiltzeko erraza, erakargarria eta erabilera anitzetarako egokia izatea bilatu da, edozein profil teknologikoko pertsonak erabili ahal izan dezan. Gainera, ordenagailu desberdinetatik atzigarria da eta aldi berean erabiltzeko modukoa.</p>

<p align="justify">Garapenerako, Visual Studio Code ingurunea erabili da, MySQL datu-basearekin lotuta. Horrez gain, GitHub erabili da bertsioen kontrola bermatzeko eta garapenaren jarraipena modu antolatuan egiteko.</p>

<p align="justify">Dokumentazio honetan erabilitako teknologien azalpena, hartutako erabakiak, instalazio prozesua eta abar azaltzen dira. </p>

---

## HELBURUAK

### HELBURU OROKORRA

<p align="justify">Proiektu honen helburu orokorra Bergarako Antzokiaren ekitaldiak online erakusteko eta sarrerak Internet bidez saltzeko web aplikazio bat garatzea izan da, erabilerraza, segurua eta erakargarria den plataforma baten bidez. Aplikazioak bisitariei esperientzia digital intuitiboa eskaintzen die eta administratzaileei kudeaketa eraginkorra eta datuen kontrola errazten die.</p>

### HELBURU ESPEZIFIKOAK

<p align="justify">Proiektu honen helburu nagusia Bergarako Antzokiarentzat ekitaldien kudeaketa eta sarreren salmenta errazteko web sistema integratu eta erabilerraza sortzea izan da. Aplikazioak aukera ematen die erabiltzaileei ekitaldiak online kontsultatzeko eta sarrerak erosteko, eta administratzaileei, berriz, ekitaldiak, erabiltzaileak eta salmentak modu eraginkorrean kudeatzeko.</p>

<p align="justify">Ekitaldien kudeaketa-sistema osoa garatu da. Horri esker, administratzaileek ekitaldi berriak gehitu, aldatu edo ezabatu ahal dituzte, eta dagoen informazioa (data, tokia, prezioa, irudia, deskribapena…) eguneratu. Ekitaldi bakoitzak datu egituratuak ditu, kontsulta eta salmenta prozesua sinplifikatzeko.</p>

<p align="justify">Erabiltzaile arruntek ekitaldiak kontsultatu eta sarrerak online erosteko aukera dute, interfaze intuitibo eta erakargarria erabiliz. Bestalde, aplikazioak administratzaileen panel pertsonalizatua du, bertan erabiltzaileak, sarrerak eta ekitaldiak kudeatzeko funtzio guztiak integratuta.</p>

<p align="justify">Datuen kudeaketa eraginkorra bermatzeko, MySQL datu-basea erabili da, sistemaren fidagarritasuna eta eskalagarritasuna handitzeko eta datuak modu egituratuan gordetzeko.</p>

<p align="justify">Aplikazioaren diseinu bisuala eta erabilgarritasuna Figma eta ColorsWall bezalako tresnen bidez landu dira, Google Fonts tipografiak erabiliz. Horrek webgune erakargarri eta bateratua sortzea ahalbidetu du. Nabigazioaren mapa Excalidraw bidez prestatu da, eta datu-basearen E-R diagrama Canva erabiliz sortu da.</p>

<p align="justify">Teknologia aldetik, Laravel erabili da aplikazioaren atzealdeko (back-end) garapenerako, eta React aurrealdeko (front-end) garapenerako. Bi framework hauek integratuta daude, erantzun azkarra eta interfaze dinamikoa eskainiz.</p>

<p align="justify">Proiektuaren garapen prozesua Markdown formatuko dokumentazio teknikoan jaso da, eta bertsioen kontrola GitHub bidez egin da, lanaren jarraipena eta eguneratzeen segurtasuna bermatzeko.</p>

<p align="justify">Azkenik, aplikazioa ordenagailu eta gailu ezberdinetatik atzigarria da, eta hainbat erabiltzailek aldi berean erabili ahal izango dute errendimendua kaltetu gabe.</p>

<p align="justify">Dokumentuan zehar zehazten diren baliabide tekniko eta material guztiak erabili dira helburu hauek aurrera eramateko.</p>

<p align="justify">Lehen helburu espezifikoa izan da web aplikazio oso baten garapenerako behar diren urratsak identifikatzea eta sekuentzialki aplikatzea. Garapen-prozesua hainbat fasetan banatzen da: lehenik, eskaera edo beharraren analisia egiten da, bezeroak —kasu honetan Bergarako Antzokiak— zer behar duen zehazteko. Ondoren, espezifikazio teknikoak eta diseinuaren plangintza lantzen dira, webguneak izango dituen funtzionalitateak eta datu-egitura definitzeko.</p>

<p align="justify">Diseinuaren ostean, garapen fasea dator, non aplikazioa eraikitzen den aukeratutako tresna eta teknologien bidez. Azkenik, probak eta balidazioa egiten dira, funtzionamendua egokia dela bermatzeko, eta hedapen fasea, aplikazioa Interneten erabiltzeko moduan jartzeko. </p>

<p align="justify">Helburu garrantzitsu bat izan da web aplikazio bat sare baten barruan nola kokatzen den ulertzea. Izan ere, webgune bat ez da isolatutako programa bat, baizik eta sare baten gainean funtzionatzen duen sistema konplexu bat. Sare bat komunikazio egitura bat da, gailu eta sistema informatiko anitzen artean datuak partekatzeko aukera ematen duena. Sarearen barruan, azpisareak sortzen dira gailu edo zerbitzu taldeak antolatzeko, kudeaketa eta segurtasuna errazteko.</p>

<p align="justify">Azpisareen definizioa IP helbideen eta azpimaskaren bitartez egiten da. IP helbidea gailu bakoitzari esleitzen zaion identifikatzaile bakarra da sare batean, eta maskarak sarearen tamaina eta egitura definitzen dute. Proiektu honetan, ulertu da web aplikazio baten garapenean IP eta maskarak ezinbestekoak direla, bai zerbitzaria konfiguratzerakoan bai datu-trafikoa behar bezala bideratzeko. Horrela, aplikazioaren sarbidea segurtasunez eta egonkortasunez bermatzen da.</p>

<p align="justify">Aurrerago, lanaren beste helburu bat izan da zerbitzari baten funtzionamendua eta eginkizuna sakon aztertzea. Web aplikazio bat erabiltzailearengana iristeko, beharrezkoa da aplikazioaren logika eta datuak gordetzen dituen zerbitzari bat. Zerbitzariak erabiltzailearen eskaerak jasotzen ditu, prozesatu egiten ditu eta emaitza itzultzen du nabigatzailean bistaratua izateko.</p>

<p align="justify">Garapen honetan, zerbitzariaren eta bezeroaren arteko komunikazio eredua aztertu da, hau da, “client-server” eredua. Bezeroak (nabigatzaileak) eskaera bat bidaltzen du, eta zerbitzariak eskaera hori tratatu ondoren erantzuna itzultzen du. Helburuetako bat izan da ulertzea nola kudeatzen diren eskaera hauek, nola banatzen den lana bi alde horien artean eta nola bermatzen den komunikazio segurua eta egonkorra.</p>

<p align="justify">Proiektu honetarako aukeratutako ingurunea Laravel Framework-a izan da, eta horren ezagutza eta aplikazioa helburu zehatzetako bat izan da. Laravel PHP-n oinarritutako framework modernoa da, aplikazio webak modu azkar, garbi eta egituratuan garatzeko. Laravel-ek MVC (Model-View-Controller) eredua erabiltzen du, aplikazioaren egitura argi banatzen duena.</p>

<p align="justify">Model atalak datu-basearekin komunikatzen du eta informazioaren logika kudeatzen du; View atalak erabiltzaileari erakusten zaion informazioa bistaratzen du; eta Controller atalak bien arteko komunikazioa koordinatzen du. MVC egituraren bidez, kodearen antolaketa eta mantengarritasuna hobetzen dira, eta proiektua eskalagarri bihurtzen da. Ikasketa honetan, helburua izan da MVC ereduaren funtzionamendua praktikan aplikatzea eta haren abantailak esperimentatzea.</p>

<p align="justify">Beste helburu tekniko garrantzitsu bat izan da PHP programazio lengoaia eta HTML-ren arteko integrazioa ulertzea. PHP zerbitzarian exekutatzen den lengoaia da, eta horri esker, web orriek eduki dinamikoa eskaintzen dute. HTML, berriz, orrien egitura markatzeko hizkuntza da. Bi hauek uztartuta, aplikazio batek erabiltzailearen eskaeraren arabera edukia aldatu edo pertsonalizatu dezake.</p>

<p align="justify">Web aplikazio gehienek bezala, proiektu honek ere datu-base baten erabilera behar izan du. Helburua izan da MySQL datu-basearen egitura eta funtzionamendua ezagutzea eta aplikazioarekin integratzea.</p>

<p align="justify">Horri esker, ikasi dugu nola sortzen diren CRUD (Create, Read, Update, Delete) deiak, hau da, nola sortzen, kontsultatzen, eguneratzen eta ezabatzen diren datu-baseko erregistroak. Gainera, migrations tresnaren bidez, datu-basearen egitura programatzen sortu eta eguneratzen da, kodearen bidez aldaketak kontrolatzeko.</p>

<p align="justify">Beste helburu bat izan da bezeroaren aldeko teknologiak eta interaktibitatea aztertzea, bereziki React liburutegiaren bitartez. React JavaScript-en gainean eraikitako liburutegi bat da, eta interfaze dinamiko eta erantzunkorrak sortzeko erabiltzen da.</p>

<p align="justify">React-en bidez, erabiltzailearen ekintzek (klik, bilaketa, formularioen bidalketa...) orria berritu gabe eduki berria kargatzea ahalbidetzen dute. Hau komunikazio asinkronoa deritzon mekanismoaren bidez egiten da, normalean AJAX edo API deien bitartez. Proiektuaren helburua izan da mekanismo hori ulertzea eta aplikazioaren funtzionamenduan txertatzea.</p>

<p align="justify">Aplikazioa amaitutakoan, azken helburua izan da web-aplikazioaren hedapen-prozesua ezagutzea. Horrek barne hartzen du garapen-ingurunetik ekoizpen-ingurunera pasatzeko urratsak: fitxategiak zerbitzarian instalatzea, datu-basea konfiguratu eta konektatzea, eta erabiltzaileek aplikazioa Internet bidez erabil dezaten beharrezko konfigurazioak egitea.</p>

<p align="justify">Horretarako, GitHub erabili da bertsioen kontrolerako tresna gisa. GitHub-ek lanaren jarraipena egiteko, aldaketak gordetzeko eta taldeko lankidetza errazteko aukera ematen du. Dokumentazioa sortzeko, Markdown hizkuntza erabili da, GitHub-en bertan proiektuaren azalpenak modu egituratuan aurkezteko. Markdown hizkuntza sinplea eta erabilerraza da, testu arruntari formatua emateko, hala nola izenburuak, zerrendak, kode-blokeak edo irudiak txertatzeko.</p>

---

## ZEREGINAK ETA KRONOGRAMA

![GANTT](./images/gantt.png)
*Gantt*

---

## BALIABIDEAK

### BALIABIDE MATERIALAK

<p align="justify">Proiektu hau aurrera ateratzeko hainbat tresna eta baliabide erabili dira, bai diseinu-fasean bai programazioan. Baliabide hauek proiektuaren kalitatea, antolaketa eta koherentzia bisuala bermatzen lagundu dute.</p>

<p align="justify">Erabili ditugun baliabide materialak Google Fonts, ColorsWall, Excalidraw, Figma, Laravel, React,  GitHub, Git, MySQL, Visual Studio Code, Canva, Windows Server 2025 zerbitzaria, erronkaren txostena, ordenagailuak, ikasgelako materiala (mahaiak, ahulkiak, entxufeak, arbela…), dira.</p>

<p align="justify">Erronkaren txostenak zer egin behar den argitu digu, bertan ibilbide osoan zehar eman behar izan ditugun pausoak argitzen baitira. </p>

<p align="justify">Google Fonts erabili dugu webguneko tipografia gehitzeko. Horrek aplikazioari itxura moderno eta irakurgarriagoa eman dio, eta aldi berean nabigatzaile guztietan bateragarritasuna bermatu du.</p>

<p align="justify">ColorsWall tresna erabili dugu kolore-paleta koherentea hautatzeko. Honi esker, aplikazioaren diseinuak identitate bisual bateratua du.</p>

<p align="justify">Excalidraw aplikazioaren bidez egin dira nabigazio-mapak, webgunearen egitura eta orrialdeen arteko loturak planifikatzeko. Tresna honek ideiak modu grafikoan antolatzeko aukera ematen du.</p>

<p align="justify">Diseinuaren prototipoak Figma erabiliz garatu dira. Horrela, web aplikazioaren itxura eta funtzionalitate nagusiak ikus daitezke programazioa hasi aurretik.</p>

<p align="justify">Canva erabili da entitate-erlazio (E-R) diagrama eta Eredu erlazionala sortzeko. Honek datu-basearen egitura argi eta bisualki erakusteko aukera ematen du, entitateen eta erlazioen arteko loturak modu garbian azalduz.</p>

<p align="justify">Laravel izan da proiektuaren back-end framework nagusia, MySQL datu-basearekin konektatuta eta aplikazioaren logika kudeatzen. Framework honek segurtasuna, egitura modularra eta mantentze-lan erraza eskaintzen ditu.</p>

<p align="justify">React erabili da erabiltzaile-interfazearen garapenerako (front-end). Bere osagai berrerabilgarrien sistemari esker, aplikazio dinamiko eta arina lortu da, erabiltzailearen esperientzia hobetuz.</p>

<p align="justify">MySQL datu-basea, aplikazioaren informazioa gordetzeko eta kudeatzeko erabili da. </p>

<p align="justify">Visual Studio Code garapen-ingurunea (IDE) nagusia izan da. Kodea idazteko, testatzeko eta debug egiteko aukera ematen du, garapen-prozesua errazten eta antolatzen lagunduz.</p>

<p align="justify">Git proiektuaren bertsioen kontrola eta aldaketen jarraipena egiteko erabili da. Horrela, garapenaren historian aldaketak modu seguru eta antolatuan gorde dira.</p>

<p align="justify">GitHub Git-en bidez kudeatutako kodearen eta dokumentazioaren gordailua da. Baliabide honek talde-lankidetza erraztea ahalbidetu du, baita proiektuaren azken bertsioa partekatzeko aukera ere.</p>

<p align="justify">Windows Server 2025 Proiektuaren web aplikazioa testatzeko eta hedatzeko zerbitzari nagusia izan da. Zerbitzari honek aplikazioa online moduan erabiltzeko aukera ematen du, eta garapen-ingurunetik ekoizpen-ingurunera igarotzeko plataforma seguru bat eskaintzen du.</p>


### GIZA BALIABIDEAK

<p align="justify">Proiektu honetan 3 pertsona ibili gara lanean, Igor Viyuela, Haritz Via eta Josune Jimenez. Igorrek hartu du kordinatzaile rola. </p>

---

## INSTALAZIO PROZESUA


## Funtzionamendurako eskakizunak

* Git
* PHP 8.2+ (gomendatua Laravel 12.x bertsiorako)
* Composer 2
* MySQL (edo MariaDB)
* Node.js 18+ eta npm (Vite-rako)
* Windows: XAMPP/WAMP-ek PHP+MySQL errazten dute;  macOS: MAMP edo zerbitzu natiboak;  Linux: sistemako paketeak.

Kodearekin interakzionatzeko ingurune bat ere beharko duzu; nire gomendioa Visual Studio Code da.

XAMPP erabiltzen baduzu, askotan erabiltzailea root izaten da eta MySQL-eko pasahitza hutsik uzten da; MAMP-en, berriz, ataka ohikoa 8889 izaten da eta erabiltzailea/pasahitza root/root.


Hau PowerShell edo CMD bidez egin daiteke, baina erosoagoa denez guk GIT Bash erabiltzen dugu.

### 1) Proiektua klonatu

Honen bidez proiektu osoa zure programazio-ingurunean klonatuko da; nire kasuan, Visual Studio Code.
```bash
git clone https://github.com/Igor89-hub/2WAG3_ERRONKA1_Antzokia.git
cd 2WAG3_ERRONKA1_Antzokia/antzokia
```
![captura1](./images/Captura_1.png)

### 2) .env fitxategia eta app key sortu

Honen bidez datuak enkriptatu eta konexio propioak egin ahal izango dira.

**command not found** bezalako mezuren bat agertzen bazaizu, PHP-rekin dago arazoa; egiaztatu ondo instalatuta dagoen edo Path ez dagoen behar bezala ezarrita.

![captura2](./images/Captura_2.png)

Hemendik ingurune-aldagaietara (Environment Variables) joan, gero Path aukeratu eta Editatu sakatu; ondoren Berria (New) hautatu eta esteka gehitu. Horrekin dena ondo funtzionatu beharko luke.

![captura3](./images/Captura_3.png)

```bash
cp .env.example .env
nano .env (terminaletik aldatu nahi baduzu)
php artisan key:generate
```

### 3) Datu-basea sortu eta .env konfiguratu

Sortu datu-base huts bat (adibidez, antzokia) utf8mb4 / utf8mb4_unicode_ci erabiliz. Edo nahi izanez gero, hori ingurune grafiko batean ere egin daiteke, adibidez Workbench erabiliz.

Ireki .env fitxategia eta egokitu:

**OHARRA: HAU ADIBIDE BAT DA. Datu-basea nola sortzen duzunaren arabera, edukia alda daiteke.**
```env
APP_NAME="Antzokia"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=antzokia
DB_USERNAME=root
DB_PASSWORD=
```

### 4) Menpekotasunak instalatu
```bash
composer install
npm install
```

### 5) Datuak kargatu (aukera 1 edo 2 aukeratu)

**Aukera A — Migraketak + seeders (gomendatua, baldin eta barne dauden)**
```bash
php artisan migrate --seed
```

**Aukera B — Repoan dagoen SQL dump-a inportatu**

cherryDatabase.sql / cherry_batabase.sql.

Inportatu bat MySQL-en (phpMyAdmin, DBeaver edo Workbench erabiliz). Ondoren, .env fitxategian ziurtatu datu-basearen izena inportatutakoarekin bat datorrela.

**Ohar garrantzitsua: Dump-a inportatzen baduzu, ez exekutatu migraketak/seeders.**

### 6) Storage-a lotu (enlazar) (igoerak)
```bash
php artisan storage:link
```

### 7) Assets-ak konpilatu (Vite)

Garapenerako (watch):
```bash
npm run dev
```

Eraiki optimizaturako (build optimizatu):
```bash
npm run build
```

### 8) Laravel zerbitzaria martxan jarri
```bash
php artisan serve
```

Ireki:  http://127.0.0.1:8000.

---

## CREATIVE COMMONS LIZENTZIA

<p align="justify">Proiektu hau Creative Commons Aitortu-EzKomertzial-PartekatuBerdin (CC BY-NC-SA 4.0) lizentziapean argitaratzea erabaki dugu.</p>

<p align="justify">Lizentzia mota honek aukera ematen du lan hau kopiatu, banatu eta egokitzeko, betiere egilea aitortzen bada, helburu komertzialik gabe erabiltzen bada eta eratorritako lanak lizentzia beraren pean partekatzen badira.</p>

<p align="justify">Aukera hau justifikatzen da proiektua ikasketa eta ikaskuntza helburuetarako sortu delako. Ez da helburu ekonomikorik bilatzen, baizik eta beste ikasle edo garatzaile batzuek lan hau erreferentzia edo ikasketa-material gisa erabili ahal izatea. Horrez gain, lizentzia honek egiletza babesten du, hau da, proiektuaren edukia edo kodea erabili nahi duen edonork jatorrizko egileei aitortza egin behar die.</p>

<p align="justify">“Partekatu berdin” baldintzak, berriz, bermatzen du beste norbaitek proiektua egokitzen badu edo bere bertsio propioa sortzen badu, hura ere lizentzia beraren azpian banatu beharko duela, lankidetza eta ezagutza irekia sustatuz.</p>

<p align="justify">Laburbilduz, CC BY-NC-SA 4.0 lizentzia hautatu dugu, proiektuaren izaera ez-komertziala, hezitzailea eta kolaboratiboa babesteko, eta aldi berean, gure egiletza eta lanaren jatorrizko balioa aitortzeko.</p>

---

## IZANDAKO ARAZOAK, ETA AURRERA EGITEKO MODUA

<p align="justify">Lehendabizi izan genuen arazoa hasita genuen laravel proiektua ez erabiltzea izan zen, proiektu hori garatzen hasita geneukan klasean, eta konfuzio batengatik 0-tik hasi genuen gure proiektua.</p>

<p align="justify">Datu-basea migrazio automatikoekin sortu ez izana da izan da arazoetako bat. Laravel-ek eskaintzen dituen migrations tresnak ez dira erabili, eta horrek datu-basearen konfigurazioa eskuz egitea eta taulen egitura zehatz-mehatz definitzea beharrezkoa bihurtu du. Arazo honen ondorioz, SQL komandoak eskuz idatzi behar izan ditugu. </p>

<p align="justify">Beste arazo bat Windows Server 2025 zerbitzarian aplikazioa martxan jartzea izan zen. Hasieran, PHP konfigurazioak eta MySQL konexioak ez zuten behar bezala funtzionatzen, eta web aplikazioa ezin izan zen zerbitzarian modu egokian probatu. Zerbitzariaren PHP eta MySQL konfigurazioa egokitu, datu-basearen erabiltzaileak eta pasahitzak egiaztatu eta Laravel-en .env fitxategia zerbitzariaren ingurunearekin bat etor zedin egokitu genuen. Nabigatzaile bidezko probak egin genituen, zerbitzariak eskaera guztiak modu egokian kudeatzen zituela bermatzeko.</p>

---

## ONDORIOAK

### ZER IKASI DUGU?

<p align="justify">Hasieran ez genuen web aplikazio baten garapen-prozesua osorik ezagutzen, baina erronka honen bidez, web proiektu baten planifikazio, diseinu eta garapen faseak sakonki ulertzen ikasi dugu. Eskakizunen analisia egitea, erabiltzaile mota ezberdinen beharrak identifikatzea eta teknologia egokien hautaketa egitea (Laravel, React, MySQL, Figma, eta abar) funtsezko pausoak direla ikusi dugu. Gainera, ikasi dugu web aplikazio baten egitura ez dela soilik programazioa: aurretik planifikazio sendoa, diseinu bisual koherentea eta datu-basearen arkitektura ondo pentsatu behar direla.</p>

### DENBORA

<p align="justify">Denboraren kudeaketari dagokionez, lanaren banaketa eta antolaketa nahiko ondo egin ditugu. Taldekide bakoitzak bere ardura izan du, eta horrek prozesua erraztu du. Nahiz eta hasieran taldekide baten hartu zuen lan karga handia izan zen, gutxinaka lana banatzen joan gara eta denok hartu dugu parte proiektuaren garapenean. Denok izan gara gai garapenean parte hartzeko.</p>

### TALDE-LANA

<p align="justify">Talde-lanari dagokionez, esperientzia oso positiboa izan da. Lanak banatzen eta koordinatzen jakin dugu, eta sortu diren arazoak elkarlanean konpondu ditugu. Komunikazioa funtsezkoa izan da, eta prozesu osoan zehar taldekide guztien arteko harremanak eta elkarlanaren dinamika oso onak izan dira. Horrek lan-giro egonkor eta produktiboa sortu du, eta ikasi dugu proiektu bat ez dela soilik norbanakoen lana, baizik eta taldearen arteko koordinazioaren emaitza zuzena.</p>

### ETORKIZUNEKO ALDAKETAK

<p align="justify">Etorkizuneko hobekuntzei dagokienez, proiektu hau abiapuntu bikaina izan da, baina badira garapen-fasean sakontzeko aukera interesgarriak. Etorkizunean, datu-basearen kudeaketa automatizatzeko migrazioen sistemaren erabilera gehitu nahiko genuke, instalazio prozesua errazteko eta koherentzia handiagoa lortzeko.</p>

<p align="justify">Diseinuari dagokionez, ordenagailuko bistan sakonduko genuke, interfazea erakargarriagoa bihurtuz.</p>

<p align="justify">Azkenik, aplikazioa zerbitzari erreal batean hedatzea eta on-line ordainketa sistema integratzea izango lirateke hurrengo erronka nagusiak, Bergarako Antzokiak benetako erabileran jar dezan garatutako plataforma hau.</p>

---

## BIBLIOGRAFIA

<p align="justify">- Axarnet. (2022, abril 4). Laravel el Framework de PHP - Qué es y para qué sirve. Axarnet.es. http://axarnet.es/blog/que-es-laravel</p>
<p align="justify">- Cómo utilizar Markdown para escribir documentación. (s/f). Adobe.com. Recuperado el 16 de octubre de 2025, de https://experienceleague.adobe.com/es/docs/contributor/contributor-guide/writing-essentials/markdown</p>
<p align="justify">- Erickson, J. (2024, agosto 29). MySQL: qué es y cómo se usa. Oracle.com; Oracle. https://www.oracle.com/es/mysql/what-is-mysql/</p>
<p align="justify">- Miró, A. (2016, enero 27). 7 características del lenguaje PHP: lenguaje muy potente. Deusto; Deusto Formación. https://www.deustoformacion.com/blog/programacion-tic/7-caracteristicas-lenguaje-php-que-lo-convierten-uno-mas-potentes</p>
<p align="justify">- NetMentor. (s/f). Explicación MVC. https://www.netmentor.es/entrada/explicacion-mvc. Recuperado el 16 de octubre de 2025, de https://www.netmentor.es/entrada/explicacion-mvc</p>
<p align="justify">- PHP y HTML. (s/f). Php.net. Recuperado el 16 de octubre de 2025, de https://www.php.net/manual/es/faq.html.php</p>
<p align="justify">- Portal, T. I. C. (2019, julio 8). ¿Qué es un servidor, cómo funciona y qué tipos hay? TIC Portal; European Knowledge Center for Information Technology, SL. https://www.ticportal.es/glosario-tic/servidores</p>
<p align="justify">- ¿Qué es la comunicación asincrónica? (s/f). Dropbox. Recuperado el 16 de octubre de 2025, de https://www.dropbox.com/es_ES/resources/asynchronous-communication</p>
<p align="justify">- Solano, A. A. (2019, enero 1). Qué es PHP: Características y usos. Openwebinars.net. https://openwebinars.net/blog/que-es-php/</p>
<p align="justify">- Soni, S. (2022, marzo 26). Cómo usar PHP en HTML. Code Envato Tuts+; Envato Tuts. https://code.tutsplus.com/es/how-to-use-php-in-html-code--cms-34378t</p>
<p align="justify">- Vera, R. A. (2021, marzo 31). Qué es Laravel: Características y ventajas. Openwebinars.net. https://openwebinars.net/blog/que-es-laravel-caracteristicas-y-ventajas/</p>
<p align="justify">- Wikipedia contributors. (s/f-a). Comunicación asincrónica. Wikipedia, The Free Encyclopedia. https://es.wikipedia.org/w/index.php?title=Comunicaci%C3%B3n_asincr%C3%B3nica&oldid=165577410</p>
<p align="justify">- Wikipedia contributors. (s/f-b). Laravel. Wikipedia, The Free Encyclopedia. https://es.wikipedia.org/w/index.php?title=Laravel&oldid=169456192</p>
<p align="justify">- Wikipedia contributors. (s/f-c). Servidor. Wikipedia, The Free Encyclopedia. https://es.wikipedia.org/w/index.php?title=Servidor&oldid=168934435</p>
<p align="justify">- (S/f-a). Bitbyteinformatika.com. Recuperado el 16 de octubre de 2025, de https://bitbyteinformatika.com/eu/zer-da-web-zerbitzi-bat-zertarako-dago-eta-nola-funtzionamendua/</p>
<p align="justify">- (S/f-b). Codigofacilito.com. Recuperado el 16 de octubre de 2025, de https://codigofacilito.com/articulos/mvc-model-view-controller-explicado</p>

---

## ERANSKINAK

### Eranskina: Talde kontratua
![Talde Kontratua](./images/talde_kontratua.png)
*Talde kontratua*

### Eranskina: Entitate-Erlazio diagrama
![Entitate-Erlazio Diagrama](./images/entitate_erlazio.png)
*Entitate erlazio diagrama*

### Eranskina: Eredu erlazional
![Eredu Erlazionala](./images/eredu_erlazionala.png)
*Eredu erlazionala*

### Eranskina: Use-Case diagrama
![Use-Case Diagrama](./images/use_case.png)
*Use-case diagrama*

### Eranskina: Web orrialdeen bozetoa, nabigazio mapa, estilo gida eta prototipoa
![Bozetoa](./images/bozetoa_1.png)
*Bozetoa 1*

![Bozetoa](./images/bozetoa_2.png)
*Bozetoa 2*

![Nabigazio Mapa](./images/nabigazio_mapa_1.png)
*Nabigazio Mapa 1*

![Nabigazio Mapa](./images/nabigazio_mapa_2.png)
*Nabigazio Mapa 2*

![Nabigazio Mapa](./images/nabigazio_mapa_3.png)
*Nabigazio Mapa 3*

---

## Lizentzia

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

Lan hau [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa] lizentziapean dago.

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

---
