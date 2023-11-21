import drawing from "../../assets/drawing.png";
<<<<<<< HEAD
import "./about.css";

function About() {
    return(
        <><div className={"about"}>
            <h3>Sitespeak is a free to use, open source website dedicated to fast communications without censorship
=======
import "./about.css"

function About() {
    return(
        <div>
            <div className={"content"}>
                <h3>Sitespeak is a free to use, open source website dedicated to fast communications without censorship
>>>>>>> 490fa0fdba776340e0a3733eea6f44ef665567db

                    Sitespeak is legally obligated to protect user data from third parties, making it one of the safest social media platforms in the world!

                    Sign up today and join millions of people in a safe environment for  secure communications with friends, family and total strangers! Empower your voice, preserve your privacy and connect freely!</h3>
            </div>

            <img alt={"draw"} src={drawing} />
        </div>
        

    )
    
}


export default About;