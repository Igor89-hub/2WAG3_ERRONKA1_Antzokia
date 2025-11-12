import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useState } from 'react';

export default function GuriBuruz() {
  const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);
  const toggleSideBar = () => setSideBarDisplayed(prev => !prev);

  return (
    <div className="gb-main">
      <TopBarCherry toggleButton={toggleSideBar} />
      <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />

      {/* HERO */}
      <section className="gb-hero">
        <div className="gb-section">
          <h1 className="gb-title">GURI BURUZ</h1>
          <p className="gb-paragraph">
            Seminarixoa, kulturaren errekaren etorria, tradizioa eta modernitatea, ondarea eta gizartea,
            iragana eta etorkizuna, zaindu eta berreraiki, historia jaso eta egin, ikasi eta zabaldu,
            hartu eta eman… kulturaz busti eta erein, kimu berriak hazi daitezen. Horrek guztiak batzen ditu
            Bergararen iragana kulturaren errekasto garrantzitsuaren bitartez, etorkizunarekin lotzen duen
            agertoki berriak, Bergarako herriak merezitakoak.
          </p>
          <p className="gb-paragraph">
            2017ko abenduaren 24an zabaldu zituen Seminarixoak ateak lehenengoz. Olentzero eta Mari
            Domingiren eskutik herritarrek Bergarako kultura agertoki berria lehenengoz ikusi ahal izan zuten!
          </p>
          <p className="gb-paragraph">
            Seminarixoa Bergara erdi-erdian kokatuta dagoen XVIII. mendeko gure ondare garrantzitsuenetako batean
            XXI. mendeko azpiegituraz atondutako agertoki eder bat da. Arte ondare eta modernitatearen artean ia
            ezinezkoa zirudien oreka errealitate bihurtu da. Aretoari, gure toponimia eta hizkera-ohiturei jarraituta
            eta hizkuntza arauak beteta, “Seminarixoa” izena jarri diogu. Eta hala izatea nahi dugu, kulturaren hazitegi bat.
          </p>
          <p className="gb-paragraph">
            Bertara ekarriko ditugu neurri desberdinetako ikuskizunak, haiekin gozatu eta haietaz ikasteko; baina, era
            berean, herriko kultura taldeek eta artistek ere bertan plazaratuko dituzte beraien sorkuntzak. Gure herriko
            kultura sortzaile eta kultura zaleok merezitako aretoa daukagu!
          </p>
          <p className="gb-paragraph">
            Udalaren apustua irmoa izan da: Bergarako kultura sortzaileek eta Bergarako herriak behar zuen maila handiko
            agertoki bat, eta azkenean lortu dugu. Aretoa bera ederra da, gure herriaren ondare bizi-bizia, eta aretoaren
            beraren baldintza eta azpiegitura teknikoak punta-puntakoak.
          </p>
        </div>
      </section>

      {/* GURE HISTORIA */}
      <section className="gb-history">
        <div className="gb-section">
          <h2 className="gb-title">GURE HISTORIA</h2>
          <p className="gb-paragraph gb-paragraph--dark">
            Jatorrian Jesuiten ikastetxe ospetsua izandako eraikin hau Bergarako Errege Seminarioa izatera pasa zen
            XVIII. mendearen azken laurdenean. Seminarioa zientzia-arloko Europako ikastetxerik eta ikerketa-zentrorik
            garrantzitsuenetakoa izan zen XVIII. mendearen bukaera aldean.
          </p>
          <p className="gb-paragraph gb-paragraph--dark">
            1783an, bertako laborategietan elementu kimiko berri bat, wolframa, isolatu zuten Elhuyar anaiek. XIX. mendean
            zehar, mintegiko zientzia-ekipamendua (laborategiak, kabineteak, lorategi botanikoa, meteorologia-behatokia…)
            Euskal Herriko garrantzitsuenetakoa izan zen.
          </p>
          <p className="gb-paragraph gb-paragraph--dark">
            Egungo fatxada 1867koa da, eta M.J. Laskurainek, azken arkitekto neoklasiko handietako batek, egin zuen. Lehengo
            fatxada barrokoa zen. Eraikinaren barruan XVII. mendeko tenplua dago, eta, hegal batean, mende bereko
            bizitegi-eremua. Gaur egun tenplo hori ikuskizunetarako puntako teknologiarekin prestatutako Seminarixoa aretoa da.
          </p>
        </div>
      </section>
    </div>
  );
}
