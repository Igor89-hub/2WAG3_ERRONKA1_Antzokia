import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { useState } from 'react';
import { router } from '@inertiajs/react';

interface EkitaldiXehetasunaProps {
    ekitaldia: {
        id_ekitaldia: number;
        izena: string;
        hasiera_data: string;
        bukaera_data: string;
        lekua: string;
        deskribapena: string;
        image_url: string | null;
    } | null;
}

export default function EkitaldiakUserXehetasunak({ ekitaldia }: EkitaldiXehetasunaProps) {
    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);

    const toggleSideBar = () => {
        setSideBarDisplayed(prevState => !prevState);
    };

    const handleSarrerakErosi = () => {
        router.visit(`/sarrerakErosi/${ekitaldia?.id_ekitaldia}`);
    };

    return (
        <div className="e-main">
            <TopBarCherry toggleButton={toggleSideBar} />

            <div
                style={{
                    width: "100%",
                    backgroundColor: "#2f2f2f",
                    color: "white",
                    padding: "40px 0",
                    textAlign: "center",
                }}
            >
                <h2 style={{ fontSize: "22px", fontWeight: "700" }}>
                    {ekitaldia ? ekitaldia.izena : "AUKERATUTAKO EKITALDIAREN IZENA"}
                </h2>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                    Data: {ekitaldia ? ekitaldia.hasiera_data : "01/01/2025"}
                </p>
            </div>

            <div
                style={{
                    padding: "30px 25px",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <h3
                    style={{
                        fontSize: "22px",
                        fontWeight: "900",
                        marginBottom: "15px",
                        color: "black",
                    }}
                >
                    DESKRIPZIOA
                </h3>
                <p style={{ fontSize: "15px", color: "#333" }}>
                    {ekitaldia?.deskribapena
                        ? ekitaldia.deskribapena
                        : "Ekitaldiaren deskribapen zehatza."}
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px",
                }}
            >
                <button
                    onClick={handleSarrerakErosi}
                    style={{
                        backgroundColor: "#d4a017",
                        color: "white",
                        border: "none",
                        borderRadius: "15px",
                        padding: "12px 30px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Sarrerak Erosi
                </button>
            </div>
        </div>
    );
}
