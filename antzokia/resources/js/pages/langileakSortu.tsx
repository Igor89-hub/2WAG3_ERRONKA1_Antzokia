import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { useForm } from '@inertiajs/react';

export default function LangileakSortu() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: ''
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
                    <input type="text" name="izena" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Izena*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="email" name="emaila" value={data.email} onChange={e => setData('email', e.target.value)} placeholder="Emaila*" className='eb-main-formTable-inputGroup' /> <br />
                    <input type="password" name="pasahitza" value={data.password} onChange={e => setData('password', e.target.value)} placeholder="Pasahitza*" className='eb-main-formTable-inputGroup' /> <br />
                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        placeholder="Pasahitza konfirmatu*"
                        className='eb-main-formTable-inputGroup'
                    />
                    <br />
                    <select
                        name="role"
                        value={data.role}
                        onChange={e => setData('role', e.target.value)}
                        className='eb-main-formTable-inputGroup'
                    >
                        <option value="">Aukeratu baimen mota*</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="adminNagusia">Admin Nagusia</option>
                    </select>
                    {errors.role && <span className="text-red-500">{errors.role}</span>} <br />
                    <button type='submit' value="GORDE" className='eb-main-formTable-inputGroup-submit'>GORDE</button>
                </form>
            </div>
        </div>
    )
}
