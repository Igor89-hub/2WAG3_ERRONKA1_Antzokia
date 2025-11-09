import { email } from "@/routes/password";
import { router, useForm } from "@inertiajs/react"

export default function LogInAntzokia() {

    const { data, setData, post, errors, processing } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleRegister = () => {
        router.visit('/Users/register');
    }

    const handleLoginForm = (e: React.FormEvent) => {
        e.preventDefault();

        post('/Users/login');
    }
    return (
        <div className="l-main">
            <div className="l-main-card">
                <header className="l-main-card-header">
                    <h1 className="l-main-card-headerTitle">SAIOA HASI</h1>
                </header>
                <div className="l-main-card-formContainer">
                    <form className="l-main-card-formContainer-form" onSubmit={handleLoginForm}>
                        <input type="email" className="l-main-card-formContainer-formInput"
                            id="emailInput" placeholder="Emaila" value={data.email} onChange={(e) => setData('email', e.target.value)} />{errors.email && <span className="text-white-500 text-sm">{errors.email}</span>}<br />
                        <input type="password" className="l-main-card-formContainer-formInput"
                            id="passwordInput" placeholder="Pasahitza" value={data.password} onChange={(e) => setData('password', e.target.value)} />{errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}<br />
                        <label style={{
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '10px',
                            fontSize: '14px'
                        }}>
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            Gogoratu ni
                        </label>
                        <span className="l-main-card-formContainer-formSpan">¿Are not registered? Register
                            <a style={{ marginLeft: '4px' }} href="#" onClick={handleRegister} className="l-main-card-formContainer-formSpan-registerLink"> here</a>
                        </span>
                        <input type="submit" value={processing ? "SARTZEN..." : "SAIOA HASI"}
                        id="submitButton" className="l-main-card-formContainer-formSubmit" disabled={processing}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
