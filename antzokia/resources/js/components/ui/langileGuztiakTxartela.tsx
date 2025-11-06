interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface LangileGuztiakTxartelProps {
    langilea: User;
    onEditatu?: () => void; // ← gehitu dugu prop aukerazkoa
}

export function LangileGuztiakTxartela({ langilea, onEditatu }: LangileGuztiakTxartelProps) {
    return (
        <div className="eg-main">
            <div className="ek-main-ekitakdiInformazioa">
                <span className="ek-main-ekitakdiInformazioa-izena">
                    {langilea.name}
                </span>
                <p className="ek-main-ekitakdiInformazioa-deskribapena">
                    {langilea.email}
                </p>
                <p className="ek-main-ekitakdiInformazioa-deskribapena">
                    {langilea.role}
                </p>
            </div>

            {/* Aukerazko botoia langilea editatzeko */}
            {onEditatu && (
                <button
                    type="button"
                    className="eb-main-formTable-inputGroup-submit-editatu"
                    onClick={onEditatu}
                >
                    Editatu
                </button>
            )}
        </div>
    );
}
