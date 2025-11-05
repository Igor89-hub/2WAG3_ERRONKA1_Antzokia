import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useEffect, useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { useForm } from '@inertiajs/react';

interface ekitaldiak {
    id_ekitaldia: number;
    izena: string;
    hasiera_data: string;
    bukaera_data: string;
    lekua: string;
    deskribapena: string;
    image_url: string | null;
}

interface ekitaldia {
    ekitaldia: ekitaldiak | null,
}

export default function EkitaldiakEditatu({ ekitaldia }: ekitaldia) {

    console.log("Datos de la ekitaldia: ", ekitaldia);

    const { data, setData, put, processing, errors } = useForm({
        izena: '',
        deskribapena: '', // el backend espera 'deskribapena'
        hasiera_data: '',  // el backend espera 'hasiera_data'
        bukaera_data: '',  // el backend espera 'bukaera_data'
        lekua: '',
        image: null as File | null,
    });

    useEffect(() => {
        if (ekitaldia) {
            setData({
                izena: ekitaldia.izena,
                deskribapena: ekitaldia.deskribapena,
                hasiera_data: ekitaldia.hasiera_data,
                bukaera_data: ekitaldia.bukaera_data,
                lekua: ekitaldia.lekua,

            });
        }
    }, [ekitaldia])

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    const handleUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        put(`/ekitaldiak/${ekitaldia?.id_ekitaldia}`)
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
                <form className='eb-main-formTable' onSubmit={handleUpdateSubmit}>
                    <button type='button' value="EZABATU" className='eb-main-formTable-inputGroup-submitErase'>EZABATU</button>
                    <input type="text" name="izena" value={data.izena} onChange={e => setData('izena', e.target.value)}
                        placeholder="Izena" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="text" name="deskripzioa" value={data.deskribapena} onChange={e => setData('deskribapena', e.target.value)}
                        placeholder="Deskripzioa*" className='eb-main-formTable-inputGroup' /><br />
                    <input type="datetime-local" className='eb-main-formTable-inputGroup' value={data.hasiera_data} onChange={e => setData('hasiera_data', e.target.value)}
                        placeholder='Hasiera data' name='hasieraData' /><br />
                    <input type="datetime-local" className='eb-main-formTable-inputGroup' value={data.bukaera_data} onChange={e => setData('bukaera_data', e.target.value)}
                        placeholder='Bukaera Data' name='bukaeraData' /><br />
                    <input type="text" className='eb-main-formTable-inputGroup' value={data.lekua} onChange={e => setData('lekua', e.target.value)}
                        placeholder='Lekua' name='lekua' /><br />
                    <input type="file" className='eb-main-formTable-inputGroup' accept="image/*"
                        onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                        placeholder='Irudia Igo' name='imageUpload' /><br />
                    <img src={ekitaldia?.image_url ? ekitaldia.image_url : 'Irudirik ez'} alt={ekitaldia?.izena} />
                    <button type='submit' value="GORDE" disabled={processing} className='eb-main-formTable-inputGroup-submit' name='bidali'>GORDE</button>
                </form>
            </div>
        </div>
    )
}
