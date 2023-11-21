import drawing from "../../assets/drawing.png";
import "./about.css";

function About() {
    return(
        <><div className={"about"}>
            <h3>Sitespeak is a free to use, open source website dedicated to fast communications without censorship

                Sitespeak is legally obligated to protect user data from third parties, making it one of the safest social media platforms in the world!

                Sign up today and join millions of people in a safe environment for  secure communications with friends, family and total strangers! Empower your voice, preserve your privacy and connect freely!</h3>
        </div>
        
        <img alt={"draw"} src={drawing} /></>
    )
    
}


export default About;