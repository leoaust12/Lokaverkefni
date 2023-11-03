import "./home.css";
import Img from "../../assets/SiteSpeak.png";

const Home = () => {
    return(
        <div>
            <img alt={"logo"} src={Img} id="sitespeak" />
            <h4 id="subtitle" >Empower your voice, preserve your privacy, connect freely</h4>
            <h4 id="signup">Sign Up</h4>
        </div>
    )
}

export default Home;