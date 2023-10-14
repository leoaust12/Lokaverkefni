import React from "react";
import "./CSS (Special)/nav.css";
import image from "../assets/walter.png"
import {Helmet} from "react-helmet";

const title = "Welcome to SiteSpeak";

class MyComponent extends React.PureComponent {
    render () {
        return(
            <>
                <Helmet>
                    <title>{ title }</title>
                </Helmet>
            </>
        )
    }
}

const Bar = ( ) => {
    return(
        <div className={"navigation"}>
            <nav id="Navbar">
                <a href={"../../../home/src/App.js"} target="_BLANK"><img src={image} width="60px"/></a>
                <h1 id={"Header"}>Welcome to SiteSpeak</h1>
                <a>Log in</a>
                <a>Sign up</a>
                <a>About us</a>
                <a >Codespace</a>
            </nav>
        </div>
    )
}


// This will collect everything made in this file and compress it into one declaration for it to be used in App.js
const FinalProduct = ( ) => {
    return(
        <Bar />
    )
}


export default FinalProduct;