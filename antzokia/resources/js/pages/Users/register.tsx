import { useForm } from "@inertiajs/react"


export default function RegisterAntzokia() {
    return (
        <div className="r-main">
            <div className="r-main-card">
                <header className="r-main-card-header">
                    <h1 className="r-main-card-headerTitle">ERREGISTRATU</h1>
                </header>
                <div className="r-main-card-formContainer">
                    <form className="r-main-card-formContainer-form">
                        <input type="text" className="r-main-card-formContainer-formInput" id="nameInput" placeholder="Izena" /><br />
                        <input type="email" className="r-main-card-formContainer-formInput" id="emailInput" placeholder="Emaila" /><br />
                        <input type="password" className="r-main-card-formContainer-formInput" id="passwordInput" placeholder="Pasahitza" /><br />
                        <input type="password" className="r-main-card-formContainer-formInput" id="confirmPasswordInput" placeholder="Pasahitza Konfirmatu" /><br />
                        <span className="r-main-card-formContainer-formSpan">If you are already registered Login <a href="#" className="r-main-card-formContainer-formSpan-loginLink">here</a></span>
                        <input type="submit" value="ERREGISTRATU" id="submitButton" className="r-main-card-formContainer-formSubmit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
