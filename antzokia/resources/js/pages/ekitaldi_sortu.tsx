import React from 'react';
import { Head, useForm } from '@inertiajs/react';


export default function Sortu() {
  const { data, setData, post, processing, errors } = useForm({
    izena: '',
    deskribapena: '',
    hasierako_data: '',
    azkeneko_data: '',
    hasiera_ordua: '',
    bukatze_ordua: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Si vas a enviar como datetime al backend, concaténalo allí.
    post('/ekitaldi_sortu');
  };

  return (
    <>
      <Head title="Ekitaldi berria" />
      <div className="ek-page">
        {/* Header superior */}
        <header className="ek-header">
          <span className="ek-header__title">TEATRO IZENA</span>
          <button className="ek-header__close" type="button" aria-label="Cerrar">×</button>
        </header>

        <main className="ek-container">
          <h1 className="ek-title">EKITALDI BERRI BAT SORTU</h1>

          <form className="ek-form" onSubmit={handleSubmit}>
            <div className="ek-field">
              <input
                className="ek-input"
                placeholder="Izena*"
                value={data.izena}
                onChange={e => setData('izena', e.target.value)}
              />
              {errors.izena && <p className="ek-error">{errors.izena}</p>}
            </div>

            <div className="ek-field">
              <textarea
                className="ek-input ek-input--textarea"
                placeholder="Deskripzioa*"
                value={data.deskribapena}
                onChange={e => setData('deskribapena', e.target.value)}
              />
              {errors.deskribapena && <p className="ek-error">{errors.deskribapena}</p>}
            </div>

            <div className="ek-field">
              <input
                type="date"
                className="ek-input ek-input--with-caret"
                placeholder="Hasierako data*"
                value={data.hasierako_data}
                onChange={e => setData('hasierako_data', e.target.value)}
              />
              {errors.hasierako_data && <p className="ek-error">{errors.hasierako_data}</p>}
            </div>

            <div className="ek-field">
              <input
                type="date"
                className="ek-input ek-input--with-caret"
                placeholder="Azkeneko Data*"
                value={data.azkeneko_data}
                onChange={e => setData('azkeneko_data', e.target.value)}
              />
              {errors.azkeneko_data && <p className="ek-error">{errors.azkeneko_data}</p>}
            </div>

            <div className="ek-field">
              <input
                type="time"
                className="ek-input"
                placeholder="Hasiera ordua*"
                value={data.hasiera_ordua}
                onChange={e => setData('hasiera_ordua', e.target.value)}
              />
              {errors.hasiera_ordua && <p className="ek-error">{errors.hasiera_ordua}</p>}
            </div>

            <div className="ek-field">
              <input
                type="time"
                className="ek-input"
                placeholder="Bukatze Ordua*"
                value={data.bukatze_ordua}
                onChange={e => setData('bukatze_ordua', e.target.value)}
              />
              {errors.bukatze_ordua && <p className="ek-error">{errors.bukatze_ordua}</p>}
            </div>

            <button className="ek-submit" disabled={processing}>
              GORDE
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
