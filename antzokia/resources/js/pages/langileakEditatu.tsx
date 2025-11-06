import { useState } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { TopBarCherry } from '@/components/ui/TopBarCherry';

interface Langilea {
    id_langilea: number;
    izena: string;
    abizenak: string;
    emaila: string;
    telefonoa?: string;
    baimen_mota: string;
}

export default function LangileakEditatu() {
    const { props } = usePage<{ langilea: Langilea }>();
    const langilea = props.langilea;

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);
    const toggleSideBar = () => setSideBarDisplayed(prev => !prev);

    const handleEzabatu = () => {
        if (confirm('Ziur zaude langilea ezabatu nahi duzula?')) {
            router.delete(`/langileakEditatu/${langilea.id_langilea}`);
        }
    };

    // Inertia useForm erabiliko dugu
    const { data, setData, put, processing } = useForm({
        izena: langilea.izena || '',
        abizenak: langilea.abizenak || '',
        emaila: langilea.emaila || '',
        telefonoa: langilea.telefonoa || '',
        pasahitza: '',
        baimen_mota: langilea.baimen_mota || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/langileakEditatu/${langilea.id_langilea}`, {
            onSuccess: () =>
                router.visit('/langileak'),
        });
    };

    return (
        <div className="ed-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />
            
            <div className='eb-main-title'>
                <header className='eb-main-title-header'>
                    <h2 className='eb-main-title-headerTitle'>LANGILEA EDITATU</h2>
                </header>
            </div>

            <div className='eb-main-form'>
                <form className='eb-main-formTable' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Izena*"
                        className='eb-main-formTable-inputGroup'
                        value={data.izena}
                        onChange={(e) => setData('izena', e.target.value)}
                    /> <br />

                    <input
                        type="text"
                        placeholder="Abizenak*"
                        className='eb-main-formTable-inputGroup'
                        value={data.abizenak}
                        onChange={(e) => setData('abizenak', e.target.value)}
                    /> <br />

                    <input
                        type="email"
                        placeholder="Emaila*"
                        className='eb-main-formTable-inputGroup'
                        value={data.emaila}
                        onChange={(e) => setData('emaila', e.target.value)}
                    /> <br />

                    <input
                        type="text"
                        placeholder="Telefonoa*"
                        className='eb-main-formTable-inputGroup'
                        value={data.telefonoa}
                        onChange={(e) => setData('telefonoa', e.target.value)}
                    /> <br />

                    <input
                        type="password"
                        placeholder="Pasahitza (aukerazkoa)"
                        className='eb-main-formTable-inputGroup'
                        value={data.pasahitza}
                        onChange={(e) => setData('pasahitza', e.target.value)}
                    /> <br />

                    <input
                        type="text"
                        placeholder="Baimen mota*"
                        className='eb-main-formTable-inputGroup'
                        value={data.baimen_mota}
                        onChange={(e) => setData('baimen_mota', e.target.value)}
                    /> <br />

                    <button
                        type='submit'
                        disabled={processing}
                        className='eb-main-formTable-inputGroup-submit'
                    >
                        {processing ? 'Gordetzen...' : 'GORDE'}
                    </button>
                    <button
                        type="button"
                        className="eb-main-formTable-inputGroup-submit-ezabatu"
                        onClick={handleEzabatu}
                        
                    >
                        EZABATU
                    </button>
                </form>
            </div>
        </div>
    );
}
