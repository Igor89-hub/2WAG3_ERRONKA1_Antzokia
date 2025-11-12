import { useState } from 'react';
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '@/components/ui/sideBarAntzokia';
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
    ekitaldiGuztiak: ekitaldiak[] | null;
}

export default function EkitaldiakUser({ ekitaldiGuztiak }: EkitaldiOrriaProps) {

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);

    const toggleSideBar = () => {
        setSideBarDisplayed(prevState => !prevState);
    };

    const handleErosiSarrerak = (id: number, e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que se active el onClick del div padre
        router.visit(`/erosketa/${id}`);
    };

    const handleEkitakdiXehetasunak = (id: number) => {
        router.visit(`/ekitaldiakUserXehetasunak/${id}`);
    }

    return (
        <div className="e-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar}/>
            <div className='e-main-pageTitle'>
                <header className='e-main-pageTitle-header'>
                    <h2 className='e-main-pageTitle-headerTitle'>EKITALDIEN ZERRENDA</h2>
                </header>
            </div>

            <div className='e-main-ekitaldiZerrenda'>
                {ekitaldiGuztiak ? (
                    ekitaldiGuztiak.length > 0 ? (
                        ekitaldiGuztiak.map((eki) => (
                            <div key={eki.id_ekitaldia}>
                                <div onClick={() => handleEkitakdiXehetasunak(eki.id_ekitaldia)}>
                                    <EkitaldiGuztiak ekitaldiak={eki} />
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "10px"
                                }}>
                                    <button
                                        onClick={(e) => handleErosiSarrerak(eki.id_ekitaldia, e)}
                                        className='eg-main-ekitakdiInformazioa-erosiBotoia'
                                    >
                                        Sarrerak Erosi
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Ez dago ekitaldi gehiagorik.</p>
                    )
                ) : (
                    <p>Ekitaldiak kargatzen...</p>
                )}
            </div>
        </div>
    );
}
