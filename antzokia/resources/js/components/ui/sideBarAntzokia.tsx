import { TfiClose } from "react-icons/tfi";
import { Lists } from '../ui/sideBarAntzokiaLists';
import { UserProfileBar } from '../ui/userProfileBar';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
interface SideBarAntzokiaProps {
    isDisplayed: Boolean,
    onClose: () => void;
}
export function SideBarAntzokia({ isDisplayed, onClose }: SideBarAntzokiaProps) {

    //Guardamos en la variable 'sidebarRef' el elemento con el que luego haremos referencia para añadir animaciones
    const sidebarRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (!sidebarRef.current) return;

        let t1 = gsap.timeline();

        if (isDisplayed) {
            gsap.to(sidebarRef.current, {
                x: 0,
                visibility: 'visible',
                duration: 0.5,
                ease: 'power3.out'
            });
        } else {
            gsap.to(sidebarRef.current, {
                x: '100%',
                duration: 0.4,
                ease: 'power3.out',
                onComplete: () => {
                    if (sidebarRef.current) {
                        gsap.set(sidebarRef.current, { visibility: 'hidden' })
                    }
                }
            });
        }
    }, [isDisplayed]);
    return (
        <aside ref={sidebarRef} className='sb-main'>
            <header className="sb-main-itxiIkonoa" >
                <TfiClose size={40} color="#D4AF37" style={{ padding: '4px' }} onClick={onClose}/>
            </header>
            <ul className="sb-main-unOrdered">
                <Lists isDisplayed={isDisplayed}/>
            </ul>
            <UserProfileBar />
        </aside>
    )
}
