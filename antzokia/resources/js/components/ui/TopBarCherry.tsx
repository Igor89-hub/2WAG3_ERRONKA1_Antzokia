import { CiMenuBurger } from "react-icons/ci";

interface TopBarCherryProps {
    toggleButton: () => void
}

export function TopBarCherry({toggleButton}: TopBarCherryProps) {
    return (
        <>
            <header className="a-main-header">
                <div className="a-main-headerTopBar">
                    <img className="a-main-headerTopBar-logo" alt="TEATRO LOGOA" />
                </div>
                <p className="a-main-headerTopBar-SidebarButton" onClick={toggleButton}>
                    <CiMenuBurger size={45} color="#D4AF37"/>
                </p>
            </header>
        </>
    )
}
