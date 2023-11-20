import Nav from "../Core/Navigation";
import {BrowserRouter as Anchor, Route, Router} from "react-router-dom";
import "./Login.css";

const Form = () => {
    return(
        <div className={"login"}>
            <h1>Login into your account</h1>
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
                <input
                    type={"submit"}
                    defaultValue={"login"}
                    className={"SubmitButton"}
                />
            </form>
        </div>
    )
}

export default Form;