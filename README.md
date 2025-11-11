# AURKIBIDEA
1. [SARRERA](#1-sarrera)
2. [TESTUINGURUA](#2-testuingurua)
3. [DISEINU FASEA](#3-diseinu-fasea)
   - 3.1 [Helburu Orokorra](#31-helburu-orokorra)
   - 3.2 [Helburu Espezifikoak](#32-helburu-espezifikoak)
   - 3.3 [Arriskuak](#33-arriskuak)
   - 3.4 [Baliabide Materialak](#34-baliabide-materialak)
   - 3.5 [Giza Baliabideak](#35-giza-baliabideak)
4. [PLANIFIKAZIO FASEA](#4-planifikazio-fasea)
   - 4.1 [Kronograma](#41-kronograma)
5. [ONDORIOAK](#5-ondorioak)
   - 5.1 [Zer Ikasi Dugu?](#51-zer-ikasi-dugu)
   - 5.2 [Denbora](#52-denbora)
   - 5.3 [Talde-lana](#53-talde-lana)
6. [BIBLIOGRAFIA](#6-bibliografia)
7. [ERANSKINAK](#7-eranskinak)

---

## 1 SARRERA

Bergarako Antzokiak gaur egungo behar teknologikoei erantzuteko web aplikazio bat garatzeko eskaera egin du. Helburua da ekitaldiak online kontsultatzeko eta sarrerak Internet bidez erosteko aukera eskaintzea, erabiltzaile guztientzat erraza, eskuragarria eta erakargarria izango den plataforma baten bidez.

Aplikazioa erabiltzaile mota ezberdinen beharrei erantzuteko diseinatuko da: bisitariek ekitaldiak kontsultatu eta sarrerak erosi ahal izango dituzte, eta administratzaileek ekitaldiak, erabiltzaileak eta salmenten kudeaketa egingo dute.

Proiektu hau Visual Studio Code IDE-a erabiliz garatuko da, MySQL datu-basearekin lotuta. Bertsio-kontrola GitHub bidez egingo da, garapenaren jarraipena eta eguneratzeen kontrol egokia bermatzeko.

Gainera, aplikazioak Excel formatuan esportatzeko funtzionalitatea izango du, administratzaileei ekitaldien eta salmenten inguruko informazioa erraz aztertzeko aukera emanez.

---

## 2 TESTUINGURUA

Gaur egun, gero eta ohikoagoa da kultur ekitaldiak online erreserbatzeko eta sarrerak Internet bidez erosteko aukera eskaintzea. Bergarako Antzokiak bere zerbitzuak digitalizatzeko beharra identifikatu du, erabiltzaile gehiagorengana iristeko eta bere kudeaketa-prozesuak modernizatzeko.

Aplikazioa erabiltzeko erraza eta itxura erakargarrikoa izango da, eta edozein ordenagailu edo gailutatik sar daiteke. Gainera, hainbat erabiltzailek aldi berean erabili ahal izango dute arazorik gabe.

Garapen prozesua enpresak ezarritako kalitate-irizpideei jarraituz egingo da, eta egindako lana ondo dokumentatuta geratuko da: hartutako erabakiak azalduz eta programaren funtzionamendua xehetasunez deskribatuz.

---

## 3 DISEINU FASEA

### 3.1 HELBURU OROKORRA

Proiektu honen helburu orokorra da Bergarako Antzokiaren ekitaldiak online erakusteko eta sarrerak Internet bidez saltzeko web aplikazio bat garatzea, erabilerraza, segurua eta erakargarria izango den plataforma baten bidez. Aplikazioak bisitariei esperientzia digital intuitiboa eskainiko die eta administratzaileei kudeaketa eraginkorra eta datuen kontrola erraztuko die.

### 3.2 HELBURU ESPEZIFIKOAK

Proiektu honen helburu nagusia Bergarako Antzokiarentzat ekitaldien kudeaketa eta sarreren salmenta errazteko web sistema integratu eta erabilerraza sortzea da. Aplikazioak aukera emango die erabiltzaileei ekitaldiak online kontsultatzeko eta sarrerak erosteko, eta administratzaileei, berriz, ekitaldiak, erabiltzaileak eta salmentak modu eraginkorrean kudeatzeko.

Ekitaldien kudeaketa-sistema osoa garatuko da. Horri esker, administratzaileek ekitaldi berriak gehitu, aldatu edo ezabatu ahal izango dituzte, eta dagoen informazioa (data, tokia, prezioa, irudia, deskribapena…) eguneratu. Ekitaldi bakoitzak datu egituratuak izango ditu, kontsulta eta salmenta prozesua sinplifikatzeko.

Erabiltzaile arruntek ekitaldiak kontsultatu eta sarrerak online erosteko aukera izango dute, interfaze intuitibo eta erakargarria erabiliz. Bestalde, aplikazioak administratzaileen panel pertsonalizatua izango du, bertan erabiltzaileak, sarrerak eta ekitaldiak kudeatzeko funtzio guztiak integratuta.

Gainera, informazio hau Excel formatura esportatzeko aukera gehituko da, datuen analisia eta txostenak sortzea errazteko.

Datuen kudeaketa eraginkorra bermatzeko, MySQL datu-basea erabiliko da, sistemaren fidagarritasuna eta eskalagarritasuna handitzeko eta datuak modu egituratuan gordeko dira.

Aplikazioaren diseinu bisuala eta erabilgarritasuna Figma eta ColorsWall bezalako tresnen bidez landuko dira, Google Fonts tipografiak erabiliz. Horrek webgune erakargarri eta bateratua sortzea ahalbidetuko du. Nabigazioaren mapa Excalidraw bidez prestatuko da, eta datu-basearen E-R diagrama Canva erabiliz sortuko da.

Teknologia aldetik, Laravel erabiliko da aplikazioaren atzealdeko (back-end) garapenerako, eta React aurrealdeko (front-end) garapenerako. Bi framework hauek integratuta egongo dira, erantzun azkarra eta interfaze dinamikoa eskaintzeko.

Proiektuaren garapen prozesua Markdown formatuko dokumentazio teknikoan jasoko da, eta bertsioen kontrola GitHub bidez egingo da, lanaren jarraipena eta eguneratzeen segurtasuna bermatzeko.

Azkenik, aplikazioa ordenagailu eta gailu ezberdinetatik atzigarria izango da, eta hainbat erabiltzailek aldi berean erabili ahal izango dute errendimendua kaltetu gabe.

Dokumentuan zehar zehaztuko diren baliabide tekniko eta material guztiak erabiliko dira helburu horiek aurrera eramateko.

#### Web Aplikazioaren Garapen Prozesuak

Web aplikazio baten garapen prozesuak hainbat urrats jarraitzen ditu. Lehenik, beharren eta eskakizunen analisia egiten da, aplikazioak zer funtzio izango dituen eta zein erabiltzaile mota izango dituen zehazteko. Ondoren, diseinu fasean datu-basearen egitura, interfaze grafikoa eta nabigazioaren mapa planifikatzen dira, aplikazioaren erabilgarritasuna eta logika argi geratzeko.

Horren ostean, garapen fasea dator, non back-end eta front-end zatien programazioa egiten den eta funtzionalitate guztiak ezartzen diren. Amaieran, probak egiten dira, akatsak detektatzeko eta zuzentzeko, eta ondoren aplikazioa hedatzen da, erabiltzaileentzat eskuragarri gera dadin.

#### Zerbitzaria

Zerbitzaria sarean konektatutako sistema bat da, bezeroek bidalitako eskaerak jasotzen eta erantzunak bidaltzen dituena. Web aplikazioetan, zerbitzariak datuak prozesatu eta bezeroaren nabigatzailera bidaltzen ditu, adibidez web orri bat edo informazio eguneratua.

#### Laravel Framework

Laravel framework-a PHP lengoaian oinarritutako egitura modernoa da, aplikazio webak era egituratuan eta azkar garatzeko aukera ematen duena. MVC (Model-View-Controller) arkitekturan oinarrituta dago, eta autentifikazioa, bide-sistema eta datu-basearen migrazioak bezalako funtzio integratuak eskaintzen ditu. Horrek kode garbiagoa eta seguruagoa ahalbidetzen du.

#### MVC Eredua

MVC eredua aplikazioaren kodea hiru atal nagusitan banatzen du: Model, View eta Controller. Model datu-basearena eta aplikazioaren logikarena arduratzen da; View erabiltzaileari erakusten zaion interfazea da; eta Controller-ak bien arteko komunikazioa kudeatzen du, erabiltzailearen ekintzak interpretatuz eta erantzunak sortuz. Egituraketa honek kodearen mantentzea eta garapena asko errazten du.

#### PHP Lengoaia

PHP lengoaia zerbitzarian exekutatzen da eta web garapenerako oso erabilia da. Kode irekikoa, erraza eta malgua da, eta MySQL bezalako datu-baseekin bateragarritasun handia du. Dinamismoa eskaintzen du, eta HTML-rekin elkarlanean, orrialde interaktibo eta eguneragarriak sortzen dira.

#### PHP eta HTML

PHP eta HTML elkarrekin erabiltzean, PHP logika eta datuen prozesamendua kudeatzen du, eta HTML erabiltzaileari informazioa erakusteko erabiltzen da. PHP kodea HTML fitxategien barruan txertatu daiteke, eta horrela web orrialde dinamikoak sortzen dira, datu-baseko informazioa automatikoki bistaratuz.

#### MySQL

MySQL datu-base erlazionala kudeatzeko sistema da, eta datuak modu egituratuan gordetzeko eta kontsultatzeko aukera ematen du. Kode irekikoa eta azkarra da, eta PHP-rekin bateratuta, web aplikazioaren informazio guztia kudeatzeko oinarri sendoa eskaintzen du.

#### Komunikazio Asinkronoak

Bezeroaren eta zerbitzariaren arteko komunikazio asinkronoak erabiltzailearen esperientzia hobetzen du, orrialdea berriro kargatu beharrik gabe datuak eguneratzeko aukera emanez. Horretarako, AJAX bezalako teknologiak erabiltzen dira, JavaScript bidez. Horrela, aplikazioak azkarragoak eta interaktiboagoak bihurtzen dira.

#### Hedapena

Web aplikazio bat hedatzeko, lehenik garapen eta proba faseak egiten dira ingurune lokalean. Ondoren, datu-basea eta aplikazioaren fitxategiak zerbitzari batean instalatzen dira, eta behar diren konexioak konfiguratzen dira. Domeinua eta segurtasun ziurtagiriak (SSL) gehitzen dira, webgunea erabiltzaileentzat seguru eta eskuragarri egon dadin. GitHub erabiltzeak bertsio-kontrola eta eguneratzeen kudeaketa errazten ditu, proiektua modu kolaboratiboan garatzeko.

#### Dokumentazio Teknikoa

Azkenik, dokumentazio teknikoa Markdown formatuan prestatzen da. Markdown testu formatu arina eta irakurgarria da, sinbolo sinpleen bidez egitura ematen diona testuari: adibidez, # tituluetarako, ** letra lodietarako edo - zerrendetarako. GitHub-ek automatikoki bihurtzen du testu hori formatu bisual batean, eta horri esker dokumentazioa garbi, bateratu eta profesionala geratzen da.

### 3.3 ARRISKUAK

Proiektuaren fase guztiak ez badira behar bezala planifikatzen edo aurreikusitako epeak ez badira betetzen, garapena atzeratu daiteke eta lana ez da garaiz amaituko. Horregatik, denboraren kudeaketa eta lanaren banaketa egokia funtsezkoak izango dira.

Laravel eta React bezalako teknologien erabilera taldearentzat berria izan daitezke, eta horrek hasierako ikasketa-kurba handitu dezake. Teknologia hauek integratzeko zailtasunak edo konfigurazio arazoak sor daitezke, batez ere backend eta frontendaren arteko komunikazioan.

Taldekideen arteko komunikazioa ez bada argia, zereginak ahaztu daitezke. Gainera, rolak ez badaude ondo zehaztuta, koordinazio falta edo desadostasunak sor daitezke proiektuaren garapenean.

Proiektuaren garapenean zehar bezeroak eskakizun berriak edo aldaketak proposa ditzake, eta horrek aurretik egindako lanaren zati bat moldatu edo berriro egitea ekar dezake, denboran eta baliabideetan eragina izanik.

### 3.4 BALIABIDE MATERIALAK

Proiektu hau aurrera ateratzeko hainbat tresna eta baliabide erabili dira, bai diseinu-fasean bai programazioan. Baliabide hauek proiektuaren kalitatea, antolaketa eta koherentzia bisuala bermatzen lagundu dute.

Erabili ditugun baliabide materialak Google Fonts, ColorsWall, Excalidraw, Figma, Laravel, React, GitHub, Git, MySQL, Visual Studio Code, Canva, Windows Server 2025 zerbitzaria, erronkaren txostena, ordenagailuak, ikasgelako materiala (mahaiak, ahulkiak, entxufeak, arbela…), dira.

Erronkaren txostenak zer egin behar den argitu digu, bertan ibilbide osoan zehar eman behar izan ditugun pausoak argitzen baitira.

**Google Fonts** erabili dugu webguneko tipografia gehitzeko. Horrek aplikazioari itxura moderno eta irakurgarriagoa emango dio, eta aldi berean nabigatzaile guztietan bateragarritasuna bermatuko du.

**ColorsWall** tresna erabili da kolore-paleta koherentea hautatzeko. Honi esker, aplikazioaren diseinuak identitate bisual bateratua izango du.

**Excalidraw** aplikazioaren bidez egin dira nabigazio-mapak, webgunearen egitura eta orrialdeen arteko loturak planifikatzeko. Tresna honek ideiak modu grafikoan antolatzeko aukera ematen du.

Diseinuaren prototipoak **Figma** erabiliz garatu dira. Horrela, web aplikazioaren itxura eta funtzionalitate nagusiak ikus daitezke programazioa hasi aurretik.

**Canva** erabili da entitate-erlazio (E-R) diagrama eta Eredu erlazionala sortzeko. Honek datu-basearen egitura argi eta bisualki erakusteko aukera ematen du, entitateen eta erlazioen arteko loturak modu garbian azalduz.

**Laravel** izango da proiektuaren back-end framework nagusia, MySQL datu-basearekin konektatzeko eta aplikazioaren logika kudeatzeko. Framework honek segurtasuna, egitura modularra eta mantentze-lan erraza eskaintzen ditu.

**React** erabiliko da erabiltzaile-interfazearen garapenerako (front-end). Bere osagai berrerabilgarrien sistemari esker, aplikazio dinamiko eta arina lortuko da, erabiltzailearen esperientzia hobetuz.

### 3.5 GIZA BALIABIDEAK

Proiektu honetan 3 pertsona ibili gara lanean, Igor Viyuela, Haritz Via eta Josune Jimenez. Igorrek hartu du kordinatzaile rola.

---

## 4 PLANIFIKAZIO FASEA

| ZEREGIN NAGUSIAK | HASIERA DATA | BUKAERA DATA |
|------------------|--------------|--------------|
| 1 Zeregina: talde kontratua | 1-10-2025 | 1-10-2025 |
| 2 Zeregina: Galderak | 1-10-2025 | ? |
| 3 Zeregina: Estilo gida | 1-10-2025 | 16-10-2025 |
| 4 Zeregina: bozeto | 9-10-2025 | 11-10-2025 |
| 5 Zeregina: E-R diagrama | 10-10-2025 | 16-10-2025 |
| 6 Zeregina: Eredu erlazionala | 14-10-2025 | 16-10-2025 |
| 7 Zeregina: Dokumentazioa | 8-10-2025 | 17-10-2025 |
| 8 Zeregina: Use-Case diagrama | 9-10-2025 | 11-10-2025 |
| 9 Zeregina: Prototipoa | 12-10-2025 | 16-10-2025 |

### 4.1 KRONOGRAMA

**GANTT DIAGRAMA**

[Ver Gantt Diagrama](https://docs.google.com/spreadsheets/d/1auNbYF2wQ4y9aUqOPSoamFSFHb0G7IKy4FHzBz8TdYE/edit?gid=0#gid=0)

Pdf moduan entregatu dugu.

---

## 5 ONDORIOAK

### 5.1 ZER IKASI DUGU?

Aurretik garapena egin gabe, aurreproiektu honetan web aplikazio baten planifikazio eta diseinu faseak lantzen ikasi dugu. Horrek barne hartzen du eskakizunen analisia, erabiltzaile mota ezberdinen beharrak identifikatzea, teknologia egokiak aukeratzea (Laravel, React, MySQL, Figma…)...

### 5.2 DENBORA

Denbora nahiko ondo aprobetxatu dugu eta lana denon artean ondo banatu dugu. Ikusi dugu proiektua ondo planifikatzea funtsezkoa dela, denbora modu eraginkorrean kudeatzeko eta hurrengo garapen fasea arazorik gabe hasi ahal izateko.

### 5.3 TALDE-LANA

Talde-lana ona izan da, lana banatzen jakin dugu eta arazoren bat izan dugunean elkarri lagundu diogu. Komunikazio ona izan dugu gure artean eta horrek gauzak erraztu ditu.

---

## 6 BIBLIOGRAFIA

- Axarnet. (2022, abril 4). Laravel el Framework de PHP - Qué es y para qué sirve. Axarnet.es. http://axarnet.es/blog/que-es-laravel

- Cómo utilizar Markdown para escribir documentación. (s/f). Adobe.com. Recuperado el 16 de octubre de 2025, de https://experienceleague.adobe.com/es/docs/contributor/contributor-guide/writing-essentials/markdown

- Erickson, J. (2024, agosto 29). MySQL: qué es y cómo se usa. Oracle.com; Oracle. https://www.oracle.com/es/mysql/what-is-mysql/

- Miró, A. (2016, enero 27). 7 características del lenguaje PHP: lenguaje muy potente. Deusto; Deusto Formación. https://www.deustoformacion.com/blog/programacion-tic/7-caracteristicas-lenguaje-php-que-lo-convierten-uno-mas-potentes

- NetMentor. (s/f). Explicación MVC. https://www.netmentor.es/entrada/explicacion-mvc. Recuperado el 16 de octubre de 2025, de https://www.netmentor.es/entrada/explicacion-mvc

- PHP y HTML. (s/f). Php.net. Recuperado el 16 de octubre de 2025, de https://www.php.net/manual/es/faq.html.php

- Portal, T. I. C. (2019, julio 8). ¿Qué es un servidor, cómo funciona y qué tipos hay? TIC Portal; European Knowledge Center for Information Technology, SL. https://www.ticportal.es/glosario-tic/servidores

- ¿Qué es la comunicación asincrónica? (s/f). Dropbox. Recuperado el 16 de octubre de 2025, de https://www.dropbox.com/es_ES/resources/asynchronous-communication

- Solano, A. A. (2019, enero 1). Qué es PHP: Características y usos. Openwebinars.net. https://openwebinars.net/blog/que-es-php/

- Soni, S. (2022, marzo 26). Cómo usar PHP en HTML. Code Envato Tuts+; Envato Tuts. https://code.tutsplus.com/es/how-to-use-php-in-html-code--cms-34378t

- Vera, R. A. (2021, marzo 31). Qué es Laravel: Características y ventajas. Openwebinars.net. https://openwebinars.net/blog/que-es-laravel-caracteristicas-y-ventajas/

- Wikipedia contributors. (s/f-a). Comunicación asincrónica. Wikipedia, The Free Encyclopedia. https://es.wikipedia.org/w/index.php?title=Comunicaci%C3%B3n_asincr%C3%B3nica&oldid=165577410

- Wikipedia contributors. (s/f-b). Laravel. Wikipedia, The Free Encyclopedia. https://es.wikipedia.org/w/index.php?title=Laravel&oldid=169456192

- Wikipedia contributors. (s/f-c). Servidor. Wikipedia, The Free Encyclopedia. https://es.wikipedia.org/w/index.php?title=Servidor&oldid=168934435

- (S/f-a). Bitbyteinformatika.com. Recuperado el 16 de octubre de 2025, de https://bitbyteinformatika.com/eu/zer-da-web-zerbitzi-bat-zertarako-dago-eta-nola-funtzionamendua/

- (S/f-b). Codigofacilito.com. Recuperado el 16 de octubre de 2025, de https://codigofacilito.com/articulos/mvc-model-view-controller-explicado

---

## 7 ERANSKINAK

### 1. Eranskina: Talde kontratua

![Talde kontratua](./images/Talde_kontratua.pdf)

### 2. Eranskina: Entitate-Erlazio diagrama

![Entitate-Erlazio diagrama](./images/er-diagrama.png)

### 3. Eranskina: Eredu erlazionala

![Eredu erlazionala](./images/eredu-erlazionala.png)

### 4. Eranskina: Use-Case diagrama

![Use-Case diagrama](./images/use-case-diagrama.png)

### 5. Eranskina: Web orrialdeen bozetoa, nabigazio mapa, estilo gida eta prototipoa

![Bozetoak eta prototipoak](./images/bozetoak-prototipoak.png)

---

> **Oharra:** Irudiak `./images/` karpetan gorde behar dituzu eta izenen bat aldatu behar baduzu, markdowneko erreferentziak ere aldatu behar dituzu.
