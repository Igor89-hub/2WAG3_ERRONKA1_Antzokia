import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from'../components/ui/sideBarAntzokia';
import { EkitaldiGehiagoTxartela } from '../components/ui/ekitaldiGehiagoTxartela';
import { useState } from 'react';
export default function Hasiera() {

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    return (
        <>
            <div className="a-main">
                <TopBarCherry toggleButton={toggleSideBar}/>
                <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar}/>
                <div className="a-main-aurrenekoEkitaldia">
                    <div className="a-main-aurrenekoEkitaldia-Titulua">
                        <h2 className="a-main-aurrenekoEkitaldia-ekitaldiIzena"></h2>
                    </div>
                    <div className="a-main-aurrenekoEkitaldia-data">
                        <p className="a-main-aurrenekoEkitaldia-dataText"></p>
                    </div>
                    <div className="a-main-aurrenekoEkitaldia-botoia">
                        
                    </div>
                </div>
                <div className='a-main-ekitaldeGehiago'>
                    <h2 className='a-main-ekitaldeGehiago-titulua'></h2>
                </div>
            </div>
        </>

    )

}
