import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '@/components/ui/sideBarAntzokia';
import { useState } from 'react';
import { router } from '@inertiajs/react';

interface Ekitaldia {
  id_ekitaldia: number;
  izena: string;
  hasiera_data: string;
  bukaera_data: string;
  lekua: string;
  deskribapena: string;
  image_url: string | null;
}

interface EkitaldiXehetasunaProps {
  ekitaldia: Ekitaldia | null;
}

export default function EkitaldiakUserXehetasunak({ ekitaldia }: EkitaldiXehetasunaProps) {
  const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);
  const toggleSideBar = () => setSideBarDisplayed(prev => !prev);

  const handleErosiSarrerak = (e: React.MouseEvent) => {
    e.stopPropagation();               // por si el padre es clicable
    if (!ekitaldia) return;
    router.visit(`/erosketa/${ekitaldia.id_ekitaldia}`);
  };

  return (
    <div className="e-main">
      <TopBarCherry toggleButton={toggleSideBar} />
      <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />

      <div style={{ width: "100%", backgroundColor: "#2f2f2f", color: "white", padding: "40px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700 }}>
          {ekitaldia ? ekitaldia.izena : "AUKERATUTAKO EKITALDIAREN IZENA"}
        </h2>
        <p style={{ marginTop: 10, fontSize: 14 }}>
          Data: {ekitaldia ? ekitaldia.hasiera_data : "01/01/2025"}
        </p>
      </div>

      <div style={{ padding: "30px 25px", textAlign: "center", width: "100%" }}>
        <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 15, color: "black" }}>DESKRIPZIOA</h3>
        <p style={{ fontSize: 15, color: "#333" }}>
          {ekitaldia?.deskribapena ?? "Ekitaldiaren deskribapen zehatza."}
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <button
          onClick={handleErosiSarrerak}
          className="eg-main-ekitakdiInformazioa-erosiBotoia"
          disabled={!ekitaldia}
        >
          Sarrerak Erosi
        </button>
      </div>
    </div>
  );
}
