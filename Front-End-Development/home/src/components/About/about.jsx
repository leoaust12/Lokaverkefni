import drawing from "../../assets/drawing.png";
import "./about.css"
import NavBar from "../Core/bar";
import {useAuth} from "../../utility/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function About() {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate("/message")
        }
    }, []);

    return(
        <div>
            <NavBar />
            <img id={"about-Image"} alt={"draw"} height={"auto"} width={"300px"} src={drawing} />
            <div className={"content"}>
                <h3>SiteSpeak is a free to use, open source website dedicated to fast communications without censorship
                    SiteSpeak is legally obligated to protect user data from third parties, making it one of the safest social media platforms in the world!
                    Sign up today and join millions of people in a safe environment for  secure communications with friends, family and total strangers! Empower your voice, preserve your privacy and connect freely!
                </h3>
                <br />
                <h3>
                    In today's fast-paced digital world, communication is the lifeline that connects us all. Whether it's sharing life updates with loved ones, collaborating on projects, or engaging in lively debates with like-minded individuals, we all rely on communication platforms to express ourselves. However, the landscape of digital communication isn't always as open, free, or secure as we'd like it to be. That's where SiteSpeak steps in, ready to redefine your messaging experience with a commitment to "communication with no censorship."
                </h3>
                <br />
                <h3>
                    SiteSpeak isn't just another messaging website; it's a revolution in how we connect, share, and interact with the world. Our mission is simple yet powerful: to provide you with a platform where communication knows no boundaries, censorship is non-existent, and your voice is truly heard.
                </h3>
                <h3>
                    We take pride in being more than just a messaging website; we're a community-driven platform built on open source codespace. This means that SiteSpeak is not just for you, it's by you. Our transparent, collaborative approach allows developers from around the world to contribute, ensuring that our platform evolves to meet your evolving needs. With open source at the core, SiteSpeak remains a hub of innovation, customization, and continuous improvement.
                </h3>
                <h3>
                    Freedom of expression is a cornerstone of democracy, and at SiteSpeak, we take it seriously. We understand the importance of open, uncensored conversations, where your thoughts are valued and your voice is heard. Our commitment to zero censorship means that you can discuss, share, and connect without fear of interference or discrimination. SiteSpeak is your sanctuary for unfiltered communication, where diverse ideas and perspectives are celebrated.
                </h3>
                <h1 id={"latin"}>Loqui Animo</h1>
            </div>
        </div>
        

    )
    
}


export default About;