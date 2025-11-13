import { router } from "@inertiajs/react";
import { CiMenuBurger } from "react-icons/ci";
import { LuTheater } from "react-icons/lu";

interface TopBarCherryProps {
    toggleButton: () => void
}

const handleHasiera = () => {
    router.visit('/');
}

export function TopBarCherry({ toggleButton }: TopBarCherryProps) {
    return (
        <>
            <header className="a-main-header">
                <div className="a-main-headerTopBar">
                    <div className="a-main-headerTopBar-logo" onClick={() => handleHasiera()}>
                        <LuTheater size={45} color="#FFF"/>
                    </div>
                    <span className="a-main-headerTopBar-text">BERGARAKO ANTZOKIA</span>
                </div>
                <p className="a-main-headerTopBar-SidebarButton" onClick={toggleButton}>
                    <CiMenuBurger size={45} color="#D4AF37" />
                </p>
            </header>
        </>
    )
}
