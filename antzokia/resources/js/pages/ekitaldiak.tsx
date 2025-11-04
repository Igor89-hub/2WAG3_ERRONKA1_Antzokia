import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { EkitaldiGuztiak } from '@/components/ui/ekitaldiGuztiakTxartela';

interface ekitaldiak {
    id_ekitaldia: number;
    izena: string;
    hasiera_data: string;
    bukaera_data: string;
    lekua: string;
    deskribapena: string;
}

interface EkitaldiOrriaProps {
    ekitaldiGuztiak: ekitaldiak[] | null,
}

export default function EkitaldiakAntzokia({ekitaldiGuztiak} : EkitaldiOrriaProps) {

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    console.log("TODOS LOS EKITALDIAK: ", ekitaldiGuztiak);

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
                <EkitaldiGuztiak/>
            </div>
        </div>
    )
}
