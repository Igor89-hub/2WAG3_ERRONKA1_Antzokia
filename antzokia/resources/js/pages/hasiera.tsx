import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { EkitaldiGehiagoTxartela } from '../components/ui/ekitaldiGehiagoTxartela';
import { router } from '@inertiajs/react';           // 👈 importa router
import { useState } from 'react';

interface ekitaldiak {
  id_ekitaldia: number;
  izena: string;
  hasiera_data: string;
  bukaera_data: string;
  lekua: string;
  deskribapena: string;
  image_url: string | null;
}

interface HasieraOrriaProps {
  aurrenekoEkitaldia: ekitaldiak | null;
  besteEkitaldiak: ekitaldiak[] | null;
}

export default function Hasiera({ aurrenekoEkitaldia, besteEkitaldiak }: HasieraOrriaProps) {
  const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);
  const toggleSideBar = () => setSideBarDisplayed(prev => !prev);

  // 👇 función de navegación a /erosketa/{id}
  const goToBuy = (id: number) => router.visit(`/erosketa/${id}`);

  return (
    <div className="a-main">
      <TopBarCherry toggleButton={toggleSideBar} />
      <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />

      <div className="a-main-aurrenekoEkitaldia">
        <div className="a-main-aurrenekoEkitaldia-Titulua">
          <h2 className="a-main-aurrenekoEkitaldia-ekitaldiIzena">
            {aurrenekoEkitaldia ? aurrenekoEkitaldia.izena : 'HURRENKO EKITALDIA'}
          </h2>
        </div>
        <div className="a-main-aurrenekoEkitaldia-data">
          <p className="a-main-aurrenekoEkitaldia-dataTestua">
            {aurrenekoEkitaldia
              ? `Hasiera Data: ${aurrenekoEkitaldia.hasiera_data}`
              : 'Hasiera Data: 01/01/2025'}
          </p>
        </div>

        {/* 👇 botón principal -> /erosketa/{id} */}
        <div className="a-main-aurrenekoEkitaldia-botoia">
          <button
            type="button"
            className="a-main-aurrenekoEkitaldia-botoiaAkzioa"
            id="sarrerakErosi"
            onClick={() => aurrenekoEkitaldia && goToBuy(aurrenekoEkitaldia.id_ekitaldia)}
            disabled={!aurrenekoEkitaldia}
          >
            Sarrerak Erosi
          </button>
        </div>
      </div>

      <div className="a-main-ekitaldeGehiago">
        <h2 className="a-main-ekitaldeGehiago-titulua">Ekitaldi Gehiago</h2>

        {besteEkitaldiak ? (
          besteEkitaldiak.length > 0 ? (
            besteEkitaldiak.map((ekitaldi) => (
              // 👇 toda la tarjeta navega a /erosketa/{id}
              <div
                key={ekitaldi.id_ekitaldia}
                onClick={() => goToBuy(ekitaldi.id_ekitaldia)}
                style={{ cursor: 'pointer' }}
              >
                <EkitaldiGehiagoTxartela besteEkitaldiak={ekitaldi} />
              </div>
            ))
          ) : (
            <p>Ez dago ekitaldi gehiagorik.</p>
          )
        ) : (
          <p>Ekitaldiak kargatzen...</p>
        )}
      </div>
    </div>
  );
}
