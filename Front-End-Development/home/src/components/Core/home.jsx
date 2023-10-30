import React from "react";
import SiteSpeak from "../../assets/SiteSpeak.png"
import Helmet from "react-helmet"

class Title extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
            </div>
        )
    }
}

function Main() {
    return(
        <div>
            <Title />
            <div className={"Title"}>
                <h1>Welcome to SiteSpeak</h1>
                <h2>Free to use communcation website</h2>
                <img src={SiteSpeak} alt={"SiteSpeak"} width={"auto"} height={"100px"}/>
                <p>
                    <b>Free Communcation website without the fear of government interferance.</b> Our goal here is to allow people to speak to another without being tracked by anyone or anywho.
                </p>
            </div>
        </div>
    )
}

export default Main;