import { router } from "@inertiajs/react"

export default function LogInAntzokia() {

    const handleRegister = () =>{
        router.visit('/Users/register');
    }
    return (
        <div className="l-main">
            <div className="l-main-card">
                <header className="l-main-card-header">
                    <h1 className="l-main-card-headerTitle">SAIOA HASI</h1>
                </header>
                <div className="l-main-card-formContainer">
                    <form className="l-main-card-formContainer-form">
                        <input type="email" className="l-main-card-formContainer-formInput" id="emailInput" placeholder="Emaila" /><br />
                        <input type="password" className="l-main-card-formContainer-formInput" id="passwordInput" placeholder="Pasahitza" /><br />
                        <span className="l-main-card-formContainer-formSpan">¿Are not registered? Register
                            <a style={{marginLeft: '4px'}} href="#" onClick={handleRegister} className="l-main-card-formContainer-formSpan-registerLink"> here</a>
                        </span>
                        <input type="submit" value="SAIOA HASI" id="submitButton" className="l-main-card-formContainer-formSubmit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
