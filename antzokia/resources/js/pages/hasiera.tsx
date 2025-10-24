import {TopBarCherry} from '../components/ui/topBarCherry';
import {EkitaldiGehiagoTxartela} from '../components/ui/ekitaldiGehiagoTxartela';
export default function Hasiera() {
    return (
        <>
            <div className="a-main">
                <TopBarCherry/>
                <div className="a-main-aurrenekoEkitaldia">
                    <div className="a-main-aurrenekoEkitaldia-Titulua">
                        <h2 className="a-main-aurrenekoEkitaldia-ekitaldiIzena">HURBILEKO EMANALDIA AURKEZPENA</h2>
                    </div>
                    <div className="a-main-aurrenekoEkitaldia-data">
                        <p className="a-main-aurrenekoEkitaldia-dataText">01/01/2025</p>
                    </div>
                    <div className="a-main-aurrenekoEkitaldia-botoia">
                        <button type="button" className="a-main-aurrenekoEkitaldia-botoiaAkzioa" id="sarrerakErosi">Sarrerak Erosi</button>
                    </div>
                </div>
                <div className='a-main-ekitaldeGehiago'>
                    <h2 className='a-main-ekitaldeGehiago-titulua'>Ekitaldi Gehiago</h2>
                    <EkitaldiGehiagoTxartela/>
                </div>
            </div>
        </>

    )

}
