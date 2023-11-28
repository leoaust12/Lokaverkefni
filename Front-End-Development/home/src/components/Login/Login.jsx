import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import NavBar from "../Core/bar";
import {useAuth} from "../../utility/AuthContext";

const Form = () => {

    const {user, handleUserLogin} = useAuth()
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        if(user) {
            navigate("/message")
        }
    }, []);

    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setCredentials({...credentials, [name]:value})
        console.log(credentials) // This is only for testing purposes.
    }

    return(
        <div className={"login-container"}>
            <NavBar />
            <div className={"login"}>
                <h1 id={"advert"}>Login into your <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span> account</h1>
                <form onSubmit={(e) => {handleUserLogin(e, credentials)}}>
                    <div className={"field-wrap"}>
                        <label>Email:</label>
                        <input
                            type={"email"}
                            required
                            name={"email"}
                            placeholder={"Insert Email Address"}
                            value={credentials.email}
                            onChange={(e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className={"field-wrap"}>
                        <label>Password:</label>
                        <input
                            type={"password"}
                            required
                            name={"password"}
                            placeholder={"Insert Password"}
                            value={credentials.password}
                            onChange={(e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className={"field-wrap"}>
                        <input id={"sign-up-button--login"} className={"login-submit"} type={"submit"} value={"Login"} />
                    </div>
                </form>
                <p id={"sign-up-link-button--login"}>Don't have an account? Why not register <Link id={"sign-up-link-button--login-ROUTER"} to={"/sign-up"}>Here</Link></p>
            </div>
        </div>
    )
}

export default Form;