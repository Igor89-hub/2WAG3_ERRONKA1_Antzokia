import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useForm } from '@inertiajs/react';

export default function LangileakSortu() {

    const { data, setData, post, processing, errors } = useForm({
        izena: '',
        abizenak: '',
        emaila: '',
        telefonoa: '',
        pasahitza: '',
        baimen_mota: ''
    });

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);

    const toggleSideBar: any = () => {
        setSideBarDisplayed(prevState => !prevState)
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/langileak');
    }

    return (
        <div className="eb-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />
            <div className='eb-main-title'>
                <header className='eb-main-title-header'>
                    <h2 className='eb-main-title-headerTitle'>LANGILE BERRI BAT SORTU</h2>
                </header>
            </div>
            <div className='eb-main-form'>
                <form className='eb-main-formTable' onSubmit={handleSubmit}>
                    <input type="text" name="izena" value={data.izena} onChange={e => setData('izena', e.target.value)} placeholder="Izena*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="text" name="abizenak" value={data.abizenak} onChange={e => setData('abizenak', e.target.value)} placeholder="Abizenak*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="email" name="emaila" value={data.emaila} onChange={e => setData('emaila', e.target.value)} placeholder="Emaila*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="text" name="telefonoa" value={data.telefonoa} onChange={e => setData('telefonoa', e.target.value)} placeholder="Telefonoa*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="password" name="pasahitza" value={data.pasahitza} onChange={e => setData('pasahitza', e.target.value)} placeholder="Pasahitza*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="text" name="baimen_mota" value={data.baimen_mota} onChange={e => setData('baimen_mota', e.target.value)} placeholder="Baimen mota*" className='eb-main-formTable-inputGroup' /> <br />
                    <button type='submit' value="GORDE" className='eb-main-formTable-inputGroup-submit'>GORDE</button>
                </form>
            </div>
        </div>
    )
}
