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
                <a href={"xx"} target="_blank">Welcome to SiteSpeak</a>
                <div className={"Drops"}>
                    <div className={"Dropdown"}>
                        <button className={"DropdownButton"}>Dropdown</button>
                        <div className={"dropdown-content"}>
                            <a>Test 1</a>
                            <a>Test 2</a>
                            <a>Test 3</a>
                        </div>
                    </div>
                </div>
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