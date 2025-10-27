
    interface ekitaldiak {
        id_ekitaldia: number;
        izena: string;
        hasiera_data: string;
        bukaera_data: string;
        lekua: string;
        deskribapena: string;
    }

    interface besteEkitaldiProps {
        besteEkitaldiak : ekitaldiak | null
    }
export function EkitaldiGehiagoTxartela({besteEkitaldiak} : besteEkitaldiProps) {
    return (
        <>
            <div className="eg-main">
                <header className="eg-main-ekitakdiIrudia">
                    <img className="eg-main-ekitakdiIrudia-img" alt="EKITALDIAREN IRUDIA" />
                </header>
                <div className="eg-main-ekitakdiInformazioa">
                    <div className="eg-main-ekitakdiInformazioa-cotentSeparator">
                        <span className="eg-main-ekitakdiInformazioa-izena">
                            {besteEkitaldiak ? besteEkitaldiak.izena : "Ez dago ekitaldirik"}
                        </span>
                    </div>
                    <div className="eg-main-ekitakdiInformazioa-cotentSeparator">
                        <button type="button" className="eg-main-ekitakdiInformazioa-erosiBotoia" id="sarreraEkitaldi">Sarrerak Erosi</button>
                    </div>
                </div>
            </div>
        </>
    )
}
