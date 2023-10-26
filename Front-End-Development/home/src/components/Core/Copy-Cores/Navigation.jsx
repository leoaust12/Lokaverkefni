import React from "react";
import "../../CSS (Special)/nav.css";
import {Helmet} from "react-helmet";
import {Outlet, Link} from "react-router-dom"


// Link work as a anchor but they only look for a file that is in the main depository.
const Layout = ( ) => {
    return(

        <div>
            <nav>
                <Link to={"/"}>Home </Link>
                <Link to={"/login"}>Login </Link>
                <Link to={"/sign-up"}>Sign-up </Link>
                <Link to={"/about"}>About us </Link>
                <a href={"#"}>Github (not ready)</a>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;