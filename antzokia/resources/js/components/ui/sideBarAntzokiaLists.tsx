import gsap from "gsap";
import { useEffect, useRef } from "react";
import { router } from "@inertiajs/react";

interface SideBarAntzokiaListsProps {
    isDisplayed: Boolean
}
export function Lists({ isDisplayed }: SideBarAntzokiaListsProps) {

    useEffect(() => {

        if (isDisplayed) {
            //ANIMAMOS CADA VEZ QUE SE ABRE EL SIDEBAR
            gsap.fromTo('.sb-main-unOrdered-link-listItem',
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.2,
                    ease: 'power2.out'
                }
            );
        }else{
            //RESETEAMOS CUANDO EL SIDEBAR SE CIERRA
            gsap.set('.sb-main-unOrdered-link-listItem', {
                opacity: 0,
                x: 50
            });
        }
    }, [isDisplayed]);

    const handleGuriBuruz = () => {
        router.get('/guri_buruz');
    }
    return (
        <li className="sb-main-unOrdered-lists">
            <div className="sb-main-unOrdered-link">
                <span className="sb-main-unOrdered-link-listItem">LANGILEAK</span>
                <span className="sb-main-unOrdered-link-listItem">EKITALDIAK ALDATU</span>
                <span className="sb-main-unOrdered-link-listItem" onClick={() => handleGuriBuruz()}>GURI BURUZ</span>
                <span className="sb-main-unOrdered-link-listItem">EKITALDIAK</span>
            </div>
        </li>
    )
}
