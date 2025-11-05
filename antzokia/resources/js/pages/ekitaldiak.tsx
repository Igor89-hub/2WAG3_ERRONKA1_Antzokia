import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { EkitaldiGuztiak } from '@/components/ui/ekitaldiGuztiakTxartela';
import { router } from '@inertiajs/react';

interface ekitaldiak {
    id_ekitaldia: number;
    izena: string;
    hasiera_data: string;
    bukaera_data: string;
    lekua: string;
    deskribapena: string;
    image_url: string | null;
}

interface EkitaldiOrriaProps {
    ekitaldiGuztiak: ekitaldiak[] | null,
}

export default function EkitaldiakAntzokia({ ekitaldiGuztiak }: EkitaldiOrriaProps) {

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    console.log("TODOS LOS EKITALDIAK: ", ekitaldiGuztiak);

    const handleEkitaldiBerria = () => {
        router.visit('/ekitaldiakSortu');
    }

    //PARA EDITAR LA EKITALDIA KICKADA NECESITAREMOS PASARLE LA ID DE LA EKITALDIA
    const handleEditatuEkitaldia = (id: number) => {
        router.visit(`/ekitaldiakEditatu/${id}`);
    }

    return (
        <div className="e-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />
            <div className='e-main-pageTitle'>
                <header className='e-main-pageTitle-header'>
                    <h2 className='e-main-pageTitle-headerTitle'>EKITALDI GUZTIAK</h2>
                </header>
            </div>
            <div className='e-main-ekitaldiZerrenda'>
                {ekitaldiGuztiak ? (
                    ekitaldiGuztiak.length > 0 ? (
                        ekitaldiGuztiak.map((eki) => (
                            <div
                            key={eki.id_ekitaldia}
                            onClick={() => handleEditatuEkitaldia(eki.id_ekitaldia)}
                            >
                                <EkitaldiGuztiak ekitaldiak={eki} />
                            </div>

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
            <div className='e-main-sortuBotoia'>
                <button type='button' className='e-main-sortuBotoia-route' value="SORTU" id='sortuBotoia' onClick={() => handleEkitaldiBerria()}>SORTU BERRIA</button>
            </div>
        </div>
    )
}
