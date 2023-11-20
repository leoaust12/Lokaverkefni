import Nav from "../Core/Navigation";
import {BrowserRouter as Anchor, Route, Router} from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";

const Form = () => {
    return(
        <div className={"login"}>
            <h1>Login into your account</h1>
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
                <Link target={"/message"}>Message</Link>
            </form>
        </div>
    )
}

export default Form;