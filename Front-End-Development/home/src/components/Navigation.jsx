import React from "react";
import "./CSS (Special)/nav.css";
import image from "../assets/walter.png"
import {Helmet} from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <!-- Working on thus -->
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