import { FaRegUser } from "react-icons/fa";
import gsap from 'gsap';
import { useEffect, useState, useRef } from "react";
import { router, usePage } from "@inertiajs/react";

export function UserProfileBar() {

    const { auth } = usePage<any>().props

    const [isMenuOpened, setMenuOpened] = useState(false);

    //Con esto hacemos referencia al DROPUP MENU
    const menuReferencia = useRef<HTMLDivElement>(null)

    const handleToggleMenu = () => {
        setMenuOpened(prevState => !prevState)
    }
    useEffect(() => {
        if (!menuReferencia.current) return;

        if (isMenuOpened) {
            gsap.fromTo(menuReferencia.current, {
                visibility: 'hidden',
                opacity: 0,
                y: 50
            },
                {
                    opacity: 1,
                    y: 0,
                    visibility: 'visible',
                    duration: 0.3,
                    ease: 'power2.out'
                }
            );
        } else {
            gsap.to(menuReferencia.current, {
                opacity: 1,
                y: 50,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => {
                    if (menuReferencia.current) {
                        gsap.set(menuReferencia.current, { visibility: 'hidden' })
                    }
                }
            })
        }
    }, [isMenuOpened]);

    const handleLoginAntzokia = () => {
        router.visit('/Users/login');
    }

    const handleLogOut = () => {
        router.post('/logout');
        setMenuOpened(false);
    }

    return (
        <div className="sb-main-userProfileBar">
            <div ref={menuReferencia} className="sb-main-userProfileBar-dropUpMenu-content">
                {auth.user ? (
                    <div className="sb-main-userProfileBar-dropUpMenu-item">
                        <span onClick={() => handleLogOut()}>Itxi Saioa</span>
                    </div>
                ) : (
                    <div className="sb-main-userProfileBar-dropUpMenu-item">
                        <span onClick={() => handleLoginAntzokia()}>Hasi Saioa</span>
                    </div>
                )}
            </div>
            <div className="sb-main-userProfileBar-profileIcon">
                <div className="sb-main-userProfileBar-profileIcon-container">
                    <FaRegUser size={25} color="Black" />
                </div>
            </div>
            <div className="sb-main-userProfileBar-izena">
                <span>{auth.user ? auth.user.name : 'Erabiltzaile Izena'}</span>
            </div>
            <div className="sb-main-userProfileBar-dropUpMenu" onClick={handleToggleMenu}>
                <span>{isMenuOpened ? '-' : '+'}</span>
            </div>
        </div>
    )
}
