import React from "react";
import "../CSS/main.css";
import Video from "../assets/backgroundTest.mp4";

const Main = () => {
    return(
        <div className="content">
            <video src={Video} playsInline autoPlay muted loop>

            </video>
        </div>
    )
}

export default Main;