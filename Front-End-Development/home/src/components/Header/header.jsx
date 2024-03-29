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
                    <div>
                        <h1>Welcome: <span>{user.name}</span> to <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span></h1>
                    </div>
                    <LogOut id={"logout-header"} onClick={handleUserLogout} className={"header-link-logout"} />
                </div>
            ): (
                <button>FATAL ERROR. RETURN TO LOGIN</button>
            )}
        </div>
    )
}

export default Header;