// This is the file that will complie everything into one JSX.
import React from "react";
import Background_Video from "./components/Core/Copy-Cores/Video.jsx";
import Nav from "./components/Core/Copy-Cores/Navigation.jsx";
import Main from "./components/Core/Copy-Cores/Video.jsx";
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
            <Main />
            <Background_Video />
        </div>
    )
}

export default Final;