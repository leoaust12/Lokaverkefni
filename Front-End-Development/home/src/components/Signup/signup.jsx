import React, {useEffect} from "react";
import { useState } from 'react';
import axios from 'axios';
import "./signup.css";
import { useNavigate ,Link} from "react-router-dom"
import NavBar from "../Core/bar";
import {useAuth} from "../../utility/AuthContext";


const Signup = () => {

    const {user, handleUserRegister} = useAuth()
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password1: "",
        password2: ""
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

    return (
        <div className={"signup-container"}>
            <NavBar />
            <div className={"signup-form"}>
                <form onSubmit={(e) => {handleUserRegister(e, credentials)}} className={"all"}>
                    <h1>Join the Revolution at <span id="Site">Site</span><span id={"speak"}>Speak</span></h1>
                    <div className={"field-wrap"}>
                        <label>Name:</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={credentials.name}
                            placeholder="Enter your name..."
                            onChange={(e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className={"field-wrap"}>
                        <label>Email:</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            value={credentials.email}
                            onChange={(e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className={"field-wrap"}>
                        <label>Password:</label>
                        <input
                            required
                            type="password"
                            name="password1"
                            placeholder="Enter a password..."
                            value={credentials.password1}
                            onChange={(e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className={"field-wrap"}>
                        <label>Confirm password:</label>
                        <input
                            required
                            type="password"
                            name="password2"
                            placeholder="Comfirm your password..."
                            value={credentials.password2}
                            onChange={(e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className={"field-wrap"}>
                        <input id={"sign-up-button--login"} type={"submit"} value={"register"} />
                    </div>
                    <p id={"sign-up-link-button--login"}>Have an account? Log in <Link id={"sign-up-link-button--login-ROUTER"} to={"/login"}>Here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;