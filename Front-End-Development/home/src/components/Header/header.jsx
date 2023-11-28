import React from "react";
import { LogOut } from "react-feather"
import {useAuth} from "../../utility/AuthContext";
import "./headerRoom.css"

const Header = () => {
    const {user, handleUserLogout} = useAuth();
    return(
        <div className={"Bar-Header"}>
            {user ? (
                <div>
                    <h1>Welcome: <span>{user.name}</span> to SiteSpeak</h1>
                    <LogOut id={"logout-header"} onClick={handleUserLogout} className={"header-link-logout"} />
                </div>
            ): (
                <button>FATAL ERROR. RETURN TO LOGIN</button>
            )}
        </div>
    )
}

export default Header;