interface Ekitaldiak {
    id_ekitaldia: number;
    izena: string;
    hasiera_data: string;
    bukaera_data: string;
    lekua: string;
    deskribapena: string;
    image_url: string | null; 
}

interface EkitaldiGuztiakTxartelProps {
    ekitaldiak: Ekitaldiak | null,
}

export function EkitaldiGuztiak({ekitaldiak}: EkitaldiGuztiakTxartelProps){
    return(
         <>
            <div className="eg-main">
                <header className="eg-main-ekitakdiIrudia">
                    {ekitaldiak?.image_url ? (
                        <img
                            className="eg-main-ekitakdiIrudia-img"
                            src={ekitaldiak.image_url} // <-- ¡USA LA VARIABLE!
                            alt={ekitaldiak.izena}    // <-- Usa el nombre como texto alternativo
                        />
                    ) : (
                        // Si NO hay URL, muestra un placeholder
                        <div className="eg-main-irudia-placeholder">
                            Irudirik ez
                        </div>
                    )}
                </header>
                <div className="ek-main-ekitakdiInformazioa">
                    <span className="ek-main-ekitakdiInformazioa-izena">
                        {ekitaldiak ? ekitaldiak.izena : "Ekitaldiare Izena"}
                    </span>
                </div>
            </div>
        </>
    )
}
