// This is the file that will complie everything into one JSX.
import React from "react";
import Background_Video from "./components/Core/Video.jsx";
import Nav from "./components/Core/Navigation.jsx";
import Main from "./components/Core/Video.jsx";
import Content from "./components/Home/home";


const Final = () => {
    return(
        <div>
            <Nav />
            <Content />
            <Main />
            <Background_Video />
        </div>
    )
}

export default Final;