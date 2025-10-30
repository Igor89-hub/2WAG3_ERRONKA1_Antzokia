import { FaRegUser } from "react-icons/fa";
export function UserProfileBar(){
    return(
        <div className="sb-main-userProfileBar">
            <div className="sb-main-userProfileBar-profileIcon">
                <div className="sb-main-userProfileBar-profileIcon-container">
                    <FaRegUser size={25} color="Black"/>
                </div>
            </div>
            <div className="sb-main-userProfileBar-izena">
                <span>Erabiltzaile izena</span>
            </div>
            <div className="sb-main-userProfileBar-dropUpMenu">
                <span>+</span>
            </div>
        </div>
    )
}
