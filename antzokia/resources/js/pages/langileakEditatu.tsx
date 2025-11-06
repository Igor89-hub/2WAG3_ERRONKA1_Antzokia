import { useState } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import password from '@/routes/password';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function LangileakEditatu() {
    const { props } = usePage<{ user: User }>();
    const user = props.user;

    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);
    const toggleSideBar = () => setSideBarDisplayed(prev => !prev);

    const handleEzabatu = () => {
        if (confirm('Ziur zaude langilea ezabatu nahi duzula?')) {
            router.delete(`/langileakEditatu/${user.id}`);
        }
    };

    // Inertia useForm erabiliko dugu
    const { data, setData, put, processing } = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        role: user.role || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/langileakEditatu/${user.id}`, {
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
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    /> <br />

                    <input
                        type="email"
                        placeholder="Emaila*"
                        className='eb-main-formTable-inputGroup'
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    /> <br />

                    <input
                        type="password"
                        placeholder="Pasahitza (aukerazkoa)"
                        className='eb-main-formTable-inputGroup'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    /> <br />

                    <input
                        type="text"
                        placeholder="Baimen mota*"
                        className='eb-main-formTable-inputGroup'
                        value={data.role}
                        onChange={(e) => setData('role', e.target.value)}
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
