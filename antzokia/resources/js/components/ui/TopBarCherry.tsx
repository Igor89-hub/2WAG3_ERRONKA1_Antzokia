import { CiMenuBurger } from "react-icons/ci";
export function TopBarCherry() {
    return (
        <>
            <header className="a-main-header">
                <div className="a-main-headerTopBar">
                    <img className="a-main-headerTopBar-logo" alt="TEATRO LOGOA" />
                </div>
                <p className="a-main-headerTopBar-SidebarButton">
                    <CiMenuBurger size={45} color="#D4AF37" />
                </p>
            </header>
        </>
    )
}
