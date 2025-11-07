import { useForm } from "@inertiajs/react";

export default function RegisterAntzokia() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // Previene que la página se recargue
        // 3. Envía los datos al backend.
        //    'route('register')' apunta a la ruta POST de registro de Laravel (de auth.php)
        post("/register");
    }
    return (
        <div className="r-main">
            <div className="r-main-card">
                <header className="r-main-card-header">
                    <h1 className="r-main-card-headerTitle">ERREGISTRATU</h1>
                </header>
                <div className="r-main-card-formContainer">
                    <form className="r-main-card-formContainer-form" onSubmit={handleSubmit}>
                        <input type="text" className="r-main-card-formContainer-formInput"
                        id="nameInput" placeholder="Izena" value={data.name} onChange={(e) => setData("name", e.target.value)}/><br />
                        <input type="email" className="r-main-card-formContainer-formInput"
                        id="emailInput" placeholder="Emaila" value={data.email} onChange={(e) => setData("email", e.target.value)}/><br />
                        <input type="password" className="r-main-card-formContainer-formInput"
                        id="passwordInput" placeholder="Pasahitza" value={data.password} onChange={(e) => setData("password", e.target.value)}/><br />
                        <input type="password" className="r-main-card-formContainer-formInput"
                        id="confirmPasswordInput" placeholder="Pasahitza Konfirmatu" value={data.password_confirmation} onChange={(e) => setData("password_confirmation", e.target.value)}/><br />
                        <span className="r-main-card-formContainer-formSpan">If you are already registered Login <a href="#" className="r-main-card-formContainer-formSpan-loginLink">here</a></span>
                        <input type="submit" value="ERREGISTRATU" id="submitButton" className="r-main-card-formContainer-formSubmit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
