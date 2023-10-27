import React from "react";
import "./CSS/Navigation.css";
import {Helmet} from "react-helmet";
import {Outlet, Link} from "react-router-dom"


// Link work as an anchor, but they only look for a file that is in the main depository.
const Layout = ( ) => {
    return(
        <div className={"navigation"}>
            <h1>Welcome to SiteSpeak</h1>
            <div className={"bar"}>
                <span><img alt={"dropdown"} src={"../../../assets/walter.png"} /></span>
                <nav>
                    <ul>
                        <li>
                            <Link id={"Home"} to={"/"}>Home </Link>
                        </li>
                        <li>
                            <Link id={"login"} to={"/login"}>Login </Link>
                        </li>
                        <li>
                            <Link id={"sign-up"} to={"/sign-up"}>Sign-up </Link>
                        </li>
                        <li>
                            <Link id={"about"} to={"/about"}>About us </Link>
                        </li>
                        <li>
                            <a id={"github"} href={"#"}>Github (not ready)</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </div>
    )
}

export default Layout;