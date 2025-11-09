
interface ekitaldiak {
    id_ekitaldia: number;
    izena: string;
    hasiera_data: string;
    bukaera_data: string;
    lekua: string;
    deskribapena: string;
    image_url: string | null;
}

interface besteEkitaldiProps {
    besteEkitaldiak: ekitaldiak | null
}
export function EkitaldiGehiagoTxartela({ besteEkitaldiak }: besteEkitaldiProps) {
    return (
        <>
            <div className="eg-main">
                <header className="eg-main-ekitakdiIrudia">
                    {besteEkitaldiak?.image_url ? (
                        <img className="eg-main-ekitakdiIrudia-img"
                            src={besteEkitaldiak.image_url}
                            alt={besteEkitaldiak.izena}
                        />
                    ) : (
                        // Si NO hay URL, muestra un placeholder
                        <div className="eg-main-irudia-placeholder">
                            Irudirik ez
                        </div>
                    )}
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
