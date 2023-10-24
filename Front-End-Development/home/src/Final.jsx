// This is the file that will complie everything into one JSX.
import React from "react";
import Background_Video from "./components/Video.jsx";
import Nav from "./components/Navigation.jsx";
import Home from "./components/Home/home.jsx"
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

const Final = () => {
    return(
        <div>
            <MyComponent />
            <Nav />
            <Home />
            <Background_Video />
        </div>
    )
}

export default Final;