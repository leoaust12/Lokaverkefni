import React from "react";
import "../CSS/main.css";
import image from "../assets/walter.png"

const Bar = ( ) => {
    return(
        <div>
            <nav id="Navbar">
                <a href={"../../../home/src/App.js"} target="_BLANK"><img src={image} width="60px"/></a>
                <a href={"xx"} target="_blank">Welcome to SiteSpeak</a>
                <ul id="hiddenBars">
                    <a target="_self" href="../../../xx"><li>About us</li></a>
                    <a target="_blank" href="https://github.com/leoaust12/Lokaverkefni"><li>Codespace - Github</li></a>
                    <a target="_self" href="../../../xx"><li>Sign up</li></a>
                    <a target="_self" href="../../../log-in/src/App.js"><li>Log in</li></a>
                </ul>
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