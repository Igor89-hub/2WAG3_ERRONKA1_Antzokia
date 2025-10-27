import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { EkitaldiGehiagoTxartela } from '../components/ui/ekitaldiGehiagoTxartela';
import { usePage } from '@inertiajs/react';
import { ekitaldiak } from '@/actions/App/Http/Controllers/HasieraOrriaController';
import { Key } from 'lucide-react';

interface ekitaldiak {
    id_ekitaldia: number;
    izena: string;
    hasiera_data: string;
    bukaera_data: string;
    lekua: string;
    deskribapena: string;
}

interface HasieraOrriaProps {
    aurrenekoEkitaldia: ekitaldiak | null,
    besteEkitaldiak: ekitaldiak[] | null,
}


export default function Hasiera({ aurrenekoEkitaldia, besteEkitaldiak }: HasieraOrriaProps) {

    //DEBUGUEAR
    console.log('Datos conseguidos: ', aurrenekoEkitaldia);

    console.log("Beste ekitaldiak: ", besteEkitaldiak)

    return (
        <>
            <div className="a-main">
                <TopBarCherry />
                <div className="a-main-aurrenekoEkitaldia">
                    <div className="a-main-aurrenekoEkitaldia-Titulua">
                        <h2 className="a-main-aurrenekoEkitaldia-ekitaldiIzena">
                            {aurrenekoEkitaldia ? aurrenekoEkitaldia.izena : 'HURRENKO EKITALDIA'}
                        </h2>
                    </div>
                    <div className="a-main-aurrenekoEkitaldia-data">
                        <p className="a-main-aurrenekoEkitaldia-dataTestua">
                            {aurrenekoEkitaldia ? 'Hasiera Data: ' + aurrenekoEkitaldia.hasiera_data : 'Hasiera Data: 01/01/2025'}
                        </p>
                    </div>
                    <div className="a-main-aurrenekoEkitaldia-botoia">
                        <button type="button" className="a-main-aurrenekoEkitaldia-botoiaAkzioa" id="sarrerakErosi">Sarrerak Erosi</button>
                    </div>
                </div>
                <div className='a-main-ekitaldeGehiago'>
                    <h2 className='a-main-ekitaldeGehiago-titulua'>Ekitaldi Gehiago</h2>
                    {besteEkitaldiak ? ( // Comprueba si besteEkitaldiak existe
                        besteEkitaldiak.length > 0 ? ( // Si existe, comprueba si tiene elementos
                            besteEkitaldiak.map((ekitaldi) => (
                                <EkitaldiGehiagoTxartela
                                    key={ekitaldi.id_ekitaldia}
                                    besteEkitaldiak={ekitaldi}
                                />
                            ))
                        ) : (
                            // QUÉ FALTA 1: Esto se muestra si el array está vacío
                            <p>Ez dago ekitaldi gehiagorik.</p>
                        )
                    ) : (
                        // QUÉ FALTA 2: Esto se muestra si besteEkitaldiak es null o undefined
                        <p>Ekitaldiak kargatzen...</p>
                    )}
                </div>
            </div>
        </>

    )

}
