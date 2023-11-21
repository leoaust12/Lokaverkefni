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
                    <label htmlFor={"mail"}>
                        Insert Email Address:
                    </label>
                    <input type={"email"} />
                </div>
                <div className={"user"}>
                    <label htmlFor={"username"}>
                        Insert Username:
                    </label>
                    <input type={"text"} />
                </div>
                <div className={"pass"}>
                    <label htmlFor={"password"}>
                        Insert Password:
                    </label>
                    <input type={"password"} />
                </div>
                <div className={"buttons"}>
                    <input type={"submit"} id={"submit-button"} />
                    <input type={"reset"} id={"reset-button"} />
                </div>
            </form>
        </div>
    )
}

export default Form;