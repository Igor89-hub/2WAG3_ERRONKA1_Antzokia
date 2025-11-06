import { useState } from 'react'
import { TopBarCherry } from '@/components/ui/TopBarCherry';
import { SideBarAntzokia } from '../components/ui/sideBarAntzokia';
import { LangileGuztiakTxartela } from '@/components/ui/langileGuztiakTxartela';
import { router, usePage } from '@inertiajs/react';


interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function Langileak() {
    const [isSideBarDisplayed, setSideBarDisplayed] = useState(false);

    // Inertia-tik datorren datua jaso
    const { props }: any = usePage();
    const langileGuztiak: User[] = props.langileGuztiak || [];

    const toggleSideBar = () => {
        setSideBarDisplayed((prevState) => !prevState);
    };

    const handleLangileBerria = () => {
        router.visit('/langileakSortu');
    };

    const handleEditatuLangilea = (id: number) => {
        router.visit(`/langileakEditatu/${id}`);
    };

    return (
        <div className="e-main">
            <TopBarCherry toggleButton={toggleSideBar} />
            <SideBarAntzokia isDisplayed={isSideBarDisplayed} onClose={toggleSideBar} />

            <div className="e-main-pageTitle">
                <header className="e-main-pageTitle-header">
                    <h2 className="e-main-pageTitle-headerTitle">LANGILE GUZTIAK</h2>
                </header>
            </div>

            <div className="e-main-ekitaldiZerrenda">
                {langileGuztiak.length > 0 ? (
                    langileGuztiak.map((user) => (
                        <LangileGuztiakTxartela
                            key={user.id}
                            langilea={user}
                            onEditatu={() => handleEditatuLangilea(user.id)}
                        />
                    ))
                ) : (
                    <p>Ez dago langilerik oraindik.</p>
                )}
            </div>

            <div className="e-main-sortuBotoia">
                <button
                    type="button"
                    className="e-main-sortuBotoia-route"
                    id="sortuBotoia"
                    onClick={handleLangileBerria}
                >
                    SORTU LANGILEA
                </button>
            </div>
        </div>
    );
}