import Nav from "../Core/Navigation";
import {BrowserRouter as Anchor, Route, Router} from "react-router-dom";
import "./Login.css";
import {Link} from "react-router-dom";
import NavBar from "../Core/bar"

const Form = () => {
    return(
        <div>
            <NavBar />
            <div className={"login"}>
                <h1 id={"advert"}>Login into your <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span> account</h1>
                <form>
                    <div className={"user"}>
                        <label htmlFor={"username"}>
                            Insert Username:
                        </label>
                        <input type={"text"} placeholder={"Insert username"} />
                    </div>
                    <div className={"pass"}>
                        <label htmlFor={"password"}>
                            Insert Password:
                        </label>
                        <input type={"password"} placeholder={"Insert password"} />
                    </div>
                    <div className={"buttons"}>
                        <button id={"login-Button"}>Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Form;