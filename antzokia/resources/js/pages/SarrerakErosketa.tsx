import { useState } from "react";
import { useForm, router, } from '@inertiajs/react';


// Header + Sidebar (usa tus componentes reales)
import { TopBarCherry } from "@/components/ui/TopBarCherry";
import { SideBarAntzokia } from "@/components/ui/sideBarAntzokia";

// CSS de la página (tu archivo está en resources/css)
import "../../css/SarrerakErosketa.css";

type Eserleku = {
  id_eserleku: number;
  deskribapena: string | null;
  hartuta: boolean | null;
};

type Ekitaldia = {
  id: number;
  izena: string | null;
  hasiera_data: string | null; // "YYYY-MM-DDTHH:mm"
  bukaera_data: string | null;
};

export default function SarrerakErosketa({ ekitaldia, eserlekuak }: { ekitaldia: Ekitaldia; eserlekuak: Eserleku[]; }) {
  const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);
  const toggleSideBar = () => setSideBarDisplayed((s) => !s);

  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  const { data, setData, post, processing, errors } = useForm({
    id_ekitaldia: ekitaldia.id,
    id_eserleku: 0,
    data_ordua: ekitaldia.hasiera_data ?? "",
  });

  function pickSeat(id: number, ocupado?: boolean | null) {
    if (ocupado) return;
    setSelectedSeat(id);
    setData("id_eserleku", id);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post('/erosketa'); // el servidor redirige a /DatuPertsonalak con la sesión poblada
  }

  const anyErrors = errors as unknown as Record<string, string>;

  return (
    <div className="se-page">
      {/* HEADER burdeos + botón hamburguesa que abre la Sidebar */}
      <TopBarCherry toggleButton={toggleSideBar} />
      <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />

      <main className="se-container">
        <h1 className="se-title">SARREREN EROSKETA</h1>

        <section className="se-block">
          <h2 className="se-subtitle">Eserlekuak</h2>
          <p className="se-helper">Aukeratu zure eserlekua ikuskizunaz gozatzeko</p>

          <div className="se-seat-list">
            {eserlekuak.length === 0 && (
              <div className="se-empty">Ez dago eserlekurik ekitaldi honetarako.</div>
            )}

            {eserlekuak.map((s) => {
              const active = selectedSeat === s.id_eserleku;
              const disabled = !!(s.hartuta ?? false);
              return (
                <button
                  type="button"
                  key={s.id_eserleku}
                  onClick={() => pickSeat(s.id_eserleku, s.hartuta)}
                  className={`se-seat ${active ? "is-active" : ""} ${disabled ? "is-disabled" : ""}`}
                  disabled={disabled}
                  title={disabled ? "Eserlekua hartuta" : "Aukeratu eserlekua"}
                  aria-disabled={disabled}
                >
                  <span className={`se-checkbox ${active ? "checked" : ""}`}>
                    {active && "✓"}
                  </span>
                  <span className="se-seat-text">
                    {s.deskribapena ?? `${s.id_eserleku}. eserlekua`}
                    {disabled ? " (hartuta)" : ""}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.id_eserleku && <p className="se-error">{errors.id_eserleku}</p>}
        </section>

        <form className="se-form" onSubmit={handleSubmit}>
          <div className="se-block">


  
            {errors.data_ordua && <p className="se-error">{errors.data_ordua}</p>}
          </div>

          {/* Error global desde withErrors(['global'=>...]) */}
          {anyErrors.global && <p className="se-error">{anyErrors.global}</p>}

          <button
            className="se-cta"
            type="submit"
            disabled={processing || !selectedSeat}
            title={!selectedSeat ? "Aukeratu eserleku bat" : "Erosi"}
          >
            EROSI
          </button>
        </form>
      </main>
    </div>
  );
}
