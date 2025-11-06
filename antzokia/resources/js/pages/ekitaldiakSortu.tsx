import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useForm } from '@inertiajs/react';

export default function EkitaldiBerriaSortu() {

    // <-- 2. INICIALIZAR useForm
    // Los nombres (izena, deskribapena, image...) deben ser
    // los mismos que espera tu controlador de Laravel
    const { data, setData, post, processing, errors } = useForm({
        izena: '',
        deskribapena: '', // el backend espera 'deskribapena'
        hasiera_data: '',  // el backend espera 'hasiera_data'
        bukaera_data: '',  // el backend espera 'bukaera_data'
        lekua: '',
        image: null as File | null,       // el backend espera 'image'
    });

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false)

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    // <-- 3. CREAR LA FUNCIÓN de envío
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // <-- 2. SOLUCIÓN AL ERROR DE route()
        // Usamos la URL directa
        post('/ekitaldiak');
    }

    return (
        <div className="eb-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />
            <div className='eb-main-title'>
                <header className='eb-main-title-header'>
                    <h2 className='eb-main-title-headerTitle'>EKITALDI BAT SORTU</h2>
                </header>
            </div>
            <div className='eb-main-form'>
                <form className='eb-main-formTable' onSubmit={handleSubmit}>
                    <input type="text" name="izena" value={data.izena} onChange={e => setData('izena', e.target.value)}
                        placeholder="Izena" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="text" name="deskripzioa" value={data.deskribapena} onChange={e => setData('deskribapena', e.target.value)}
                        placeholder="Deskripzioa*" className='eb-main-formTable-inputGroup' /> {errors.deskribapena && <div style={{ color: 'red' }}>{errors.deskribapena}</div>}<br />
                    <input type="datetime-local" className='eb-main-formTable-inputGroup' value={data.hasiera_data} onChange={e => setData('hasiera_data', e.target.value)}
                        placeholder='Hasiera data' name='hasieraData'/><br />
                    <input type="datetime-local" className='eb-main-formTable-inputGroup' value={data.bukaera_data} onChange={e => setData('bukaera_data', e.target.value)}
                        placeholder='Bukaera Data' name='bukaeraData'/><br />
                    <input type="text" className='eb-main-formTable-inputGroup' value={data.lekua} onChange={e => setData('lekua', e.target.value)}
                        placeholder='Lekua' name='lekua'/><br />
                    <input type="file" className='eb-main-formTable-inputGroup' accept="image/*"  onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                        placeholder='Irudia Igo' name='imageUpload'/><br />
                    <button type='submit' value="GORDE" className='eb-main-formTable-inputGroup-submit' name='bidali'>GORDE</button>
                </form>
            </div>
        </div>
    )
}

