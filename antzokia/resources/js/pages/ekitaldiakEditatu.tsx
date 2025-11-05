import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
export default function EkitaldiakEditatu() {

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }
    return (
        <div className="ed-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />
            <div className='eb-main-title'>
                <header className='eb-main-title-header'>
                    <h2 className='eb-main-title-headerTitle'>EKITALDIA EDITATU</h2>
                </header>
            </div>
            <div className='eb-main-form'>
                <form className='eb-main-formTable'>
                    <button type='submit' value="EZABATU" className='eb-main-formTable-inputGroup-submitErase'>EZABATU</button>
                    <input type="text" name="izena"
                        placeholder="Izena" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="text" name="deskripzioa"
                        placeholder="Deskripzioa*" className='eb-main-formTable-inputGroup' /><br />
                    <input type="datetime-local" className='eb-main-formTable-inputGroup'
                        placeholder='Hasiera data' name='hasieraData' /><br />
                    <input type="datetime-local" className='eb-main-formTable-inputGroup'
                        placeholder='Bukaera Data' name='bukaeraData' /><br />
                    <input type="text" className='eb-main-formTable-inputGroup'
                        placeholder='Lekua' name='lekua' /><br />
                    <input type="file" className='eb-main-formTable-inputGroup' accept="image/*"
                        placeholder='Irudia Igo' name='imageUpload' /><br />
                    <button type='submit' value="GORDE" className='eb-main-formTable-inputGroup-submit' name='bidali'>GORDE</button>
                </form>
            </div>
        </div>
    )
}
