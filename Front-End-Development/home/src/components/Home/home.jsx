import "./home.css";
import Img from "../../assets/SiteSpeak.png";
import "../Core/CSS/video.css";
import Video from "../../assets/backgroundTest.mp4";
import {useNavigate, Link} from "react-router-dom";
import NavBar from "../Core/bar";
import {useAuth} from "../../utility/AuthContext";
import {useEffect} from "react";

const Home = () => {
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
            <div className="content">
                <video src={Video} playsInline autoPlay muted loop>

                </video>
            </div>

            <img alt={"logo"} width={"auto"} height={"auto"} src={Img} id="sitespeak" />
            <h4 id="subtitle" >Empower your voice, preserve your privacy, connect freely</h4>
            
            <Link to={"/sign-up"} id="signup">Sign Up</Link>

        </div>
    )
}

document.createElement("h1")

export default Home;