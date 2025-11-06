import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useState } from 'react';
export default function Hasiera() {

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    return (
        <>
            <div className="gb-main">
                <TopBarCherry toggleButton={toggleSideBar} />
                <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />
                <div className="gb-main-guriBuruzTitulua">
                    <div className="a-main-aurrenekoEkitaldia-data">
                        <h1 className="gb-main-titulo_guri_buruz">GURI BURUZ</h1>
                    </div>
                    <div className="gb-main-guri_buruz">
                        <p className="gb-main-aurrenekoEkitaldia-botoiaAkzioa" id="sarrerakErosi">Seminarixoa, kulturaren errekaren etorria, tradizioa eta modernitatea, ondarea eta gizartea, iragana eta etorkizuna, zaindu eta berreraiki, historia jaso eta egin, ikasi eta zabaldu, hartu eta eman… kulturaz busti eta erein, kimu berriak hazi daitezen. Horrek guztiak batzen ditu Bergararen iragana kulturaren errekasto garrantzitsuaren bitartez, etorkizunarekin lotzen duen agertoki berriak, Bergarako herriak merezitakoak.

                            2017ko abenduaren 24an zabaldu zituen Seminarixoak ateak lehenengoz. Olentzero eta Mari Domingiren eskutik herritarrek Bergarako kultura agertoki berria lehenengoz ikusi ahal izan zuten!!

                            Seminarixoa Bergara erdi-erdian kokatuta dagoen XVIII. mendeko gure ondare garrantzitsuetako batean XXI. mendeko azpiegituraz atondutako agertoki eder bat da. Arte ondare eta modernitatearen artean ia ezinezkoa zirudien oreka errealitate bihurtu da.

                            Aretoari, gure toponimia eta hizkera-ohiturei jarraituta eta hizkuntza arauak beteta, “Seminarixoa” izena jarri diogu. Eta hala izatea nahi dugu, kulturaren hazitegi bat.
                            Bertara ekarriko ditugu neurri desberdinetako ikuskizunak, haiekin gozatu eta haietaz ikasteko; baina, era berean, herriko kultura taldeek eta artistek ere bertan plazaratuko dituzte beraien sorkuntzak. Gure herriko kultura sortzaile eta kultura zaleok merezitako aretoa daukagu!

                            Udalaren apustua irmoa izan da: Bergarako kultura sortzaileek eta Bergarako herriak behar zuen maila handiko agertoki bat, eta azkenean lortu dugu. Aretoa bera ederra da, gure herriaren ondare bizi-bizia, eta aretoaren beraren baldintza eta azpiegitura teknikoak punta-puntakoak.</p>
                        </div>
                </div>
            </div>
            <div className='gb-main-gure-historia'>
            <h1 className='gb-titulo-gure-historia'>GURE HISTORIA</h1>
                                <div className="gb-main-gure_historia">
                        <p className="gb_gure_historia">Jatorrian Jesuiten ikastetxe ospetsua izandako eraikin hau Bergarako Errege Seminarioa izatera pasa zen XVIII. mendearen azken laurdenean.

Seminarioa zientzia-arloko Europako ikastetxerik eta ikerketa-zentrorik garrantzitsuenetakoa izan zen XVIII. mendearen bukaera aldean.

1783an, bertako laborategietan elementu kimiko berri bat, wolframa, isolatu zuten Elhuyar anaiek. XIX. mendean zehar, mintegiko zientzia-ekipamendua (laborategiak, kabineteak, lorategi botanikoa, meteorologia-behatokia…) Euskal Herriko garrantzitsuenetakoa izan zen.

Egungo fatxada 1867koa da, eta M.J. Laskurainek, azken arkitekto neoklasiko handietako batek, egin zuen. Lehengo fatxada barrokoa zen.

Eraikinaren barruan XVII. mendeko tenplua dago, eta, hegal batean, mende bereko bizitegi-eremua. Gaur egun tenplo hori ikuskizunetarako puntako teknologiarekin prestatutako Seminarixoa aretoa da.</p>
                        </div>
            </div>
        </>

    )

}
