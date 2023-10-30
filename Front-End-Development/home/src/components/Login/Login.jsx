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
                <button>
                    Submit
                </button>
                <input type={"reset"} id={"Reset-button"} />
            </form>
        </div>
    )
}

function Final() {
    return(
        <div>
            <Content />
            <Form />
        </div>
    )
}

export default Final;