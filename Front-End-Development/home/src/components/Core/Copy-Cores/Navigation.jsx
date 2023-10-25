import React from "react";
import "../../CSS (Special)/nav.css";
import {Helmet} from "react-helmet";
import {Outlet, Link} from "react-router-dom"

const Layout = ( ) => {
    return(

        <div>
            <nav>
                <ul>
                    <li>
                        Hello World
                    </li>
                    <li>
                        This is under construction still. :(
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout;