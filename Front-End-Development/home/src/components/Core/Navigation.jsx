import React from "react";
import "./CSS/Navigation.css";
import {Helmet} from "react-helmet";
import {Outlet, Link} from "react-router-dom"
import Logo from "../../assets/SiteSpeak.png"


// Link work as an anchor, but they only look for a file that is in the main depository.
const Layout = ( ) => {
    return(
        <div className={"navigation"}>
            <h1>Welcome to</h1>
            <img alt={"logo of SiteSpeak"} width={"auto"} height={"50px"} src={Logo}/>
            <div className={"bar"}>

            </div>
            <Outlet />
        </div>
    )
}

export default Layout;