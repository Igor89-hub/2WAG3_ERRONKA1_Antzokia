interface Langilea {
    id_langilea: number;
    izena: string;
    abizenak: string;
    emaila: string;
    telefonoa?: string; // telefonoa batzuetan null edo undefined izan daiteke
    baimen_mota: string;
}

interface LangileGuztiakTxartelProps {
    langilea: Langilea;
    onEditatu?: () => void; // ← gehitu dugu prop aukerazkoa
}

export function LangileGuztiakTxartela({ langilea, onEditatu }: LangileGuztiakTxartelProps) {
    return (
        <div className="eg-main">
            <div className="ek-main-ekitakdiInformazioa">
                <span className="ek-main-ekitakdiInformazioa-izena">
                    {langilea.izena} {langilea.abizenak}
                </span>
                <p className="ek-main-ekitakdiInformazioa-deskribapena">
                    {langilea.emaila} • {langilea.telefonoa ?? '—'}
                </p>
                <p className="ek-main-ekitakdiInformazioa-deskribapena">
                    {langilea.baimen_mota}
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
