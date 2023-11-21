import Nav from "../Core/Navigation";
import {BrowserRouter as Anchor, Route, Router} from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";

const Form = () => {
    return(
        <div className={"login"}>
            <h1 id={"advert"}>Login into your <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span> account</h1>
            <form>
                <div className={"email"}>
                    <h2>Enter your Email Address</h2>
                    <input type={"email"} />
                </div>
                <div className={"user"}>
                    <h2>Enter your Username</h2>
                    <input type={"text"} />
                </div>
                <div className={"pass"}>
                    <h2>Enter your Password</h2>
                    <input type={"password"} />
                </div>
<<<<<<< HEAD
                <Link target={"/message"}>Message</Link>
=======
                <div className={"buttons"}>
                    <input type={"submit"} id={"submit-button"} />
                    <input type={"reset"} id={"reset-button"} />
                </div>
>>>>>>> 490fa0fdba776340e0a3733eea6f44ef665567db
            </form>
        </div>
    )
}

export default Form;