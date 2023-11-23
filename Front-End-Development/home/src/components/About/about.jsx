import drawing from "../../assets/drawing.png";
import "./about.css"
import NavBar from "../Core/bar";

function About() {
    return(
        <div>
            <NavBar />
            <div className={"content"}>
                <h3>Sitespeak is a free to use, open source website dedicated to fast communications without censorship
                    Sitespeak is legally obligated to protect user data from third parties, making it one of the safest social media platforms in the world!
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
            </div>
            <img id={"about-Image"} alt={"draw"} src={drawing} />
        </div>
        

    )
    
}


export default About;