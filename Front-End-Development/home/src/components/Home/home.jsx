import "./home.css";
import Img from "../../assets/SiteSpeak.png";
import "../Core/CSS/video.css";
import Video from "../../assets/backgroundTest.mp4";

const Home = () => {
    return(
        <div>
            <img src={Img} id="sitespeak" />
            <h4 id="subtitle" >Empower your voice, preserve your privacy, connect freely</h4>
            <h4 id="signup">Sign Up</h4>

            <div className="content">
                <video src={Video} playsInline autoPlay muted loop>

                </video>
            </div>
        </div>
    )
}

export default Home;