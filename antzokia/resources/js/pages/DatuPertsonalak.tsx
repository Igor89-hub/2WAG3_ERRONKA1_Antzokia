import { useState } from "react";
import { TopBarCherry } from "@/components/ui/TopBarCherry";
import { SideBarAntzokia } from "@/components/ui/sideBarAntzokia";
import { useForm } from "@inertiajs/react";


export default function DatuPertsonalak() {
  // useForm con los campos que vas a enviar al backend
  const { data, setData, post, processing, errors } = useForm({
    izena: "",
    abizenak: "",
    telefonoa: "",
    posta_kodea: "",
    emaila: "",
    emaila_berriro: "",
  });

  const [isSideBarDisplayed, setSideBarDisplayed] = useState<boolean>(false);
  const toggleSideBar = () => setSideBarDisplayed((s) => !s);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // usa la URL directa; cambia si necesitas otra ruta
    post("/datupertsonalak");
  }

  return (
    <div className="dp-main">
      <TopBarCherry toggleButton={toggleSideBar} />
      <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />

      {/* Título centrado como en tu ejemplo */}
      <div className="dp-main-title">
        <header className="dp-main-title-header">
          <h2 className="dp-main-title-headerTitle">SARTU ZURE DATU PERTSONALAK</h2>
        </header>
      </div>

      {/* Formulario */}
      <div className="dp-main-form">
        <form className="dp-main-formTable" onSubmit={handleSubmit}>
          <input
            type="text"
            name="izena"
            value={data.izena}
            onChange={(e) => setData("izena", e.target.value)}
            placeholder="Izena*"
            className="dp-input"
          />
          {errors.izena && <div className="dp-error">{errors.izena}</div>}

          <input
            type="text"
            name="abizenak"
            value={data.abizenak}
            onChange={(e) => setData("abizenak", e.target.value)}
            placeholder="Abizenak*"
            className="dp-input"
          />
          {errors.abizenak && <div className="dp-error">{errors.abizenak}</div>}

          <input
            type="tel"
            name="telefonoa"
            value={data.telefonoa}
            onChange={(e) => setData("telefonoa", e.target.value)}
            placeholder="Telefonoa*"
            className="dp-input"
          />
          {errors.telefonoa && <div className="dp-error">{errors.telefonoa}</div>}

          <input
            type="text"
            name="posta_kodea"
            value={data.posta_kodea}
            onChange={(e) => setData("posta_kodea", e.target.value)}
            placeholder="Posta Kodea*"
            className="dp-input"
          />
          {errors.posta_kodea && <div className="dp-error">{errors.posta_kodea}</div>}

          <input
            type="email"
            name="emaila"
            value={data.emaila}
            onChange={(e) => setData("emaila", e.target.value)}
            placeholder="Emaila*"
            className="dp-input"
          />
          {errors.emaila && <div className="dp-error">{errors.emaila}</div>}

          <input
            type="email"
            name="emaila_berriro"
            value={data.emaila_berriro}
            onChange={(e) => setData("emaila_berriro", e.target.value)}
            placeholder="Errepikatu Emaila*"
            className="dp-input"
          />
          {errors.emaila_berriro && <div className="dp-error">{errors.emaila_berriro}</div>}

          <button type="submit" className="dp-submit" disabled={processing}>
            BIDALI
          </button>
        </form>
      </div>
    </div>
  );
}
