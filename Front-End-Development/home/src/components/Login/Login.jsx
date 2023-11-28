import Nav from "../Core/Navigation";
import {BrowserRouter as Anchor, Route, Router} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavBar from "../Core/bar";

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:5000/login', { username, password })
        .then(response => {

            console.log('Successfully logged in. Redirecting to Message page.');    

            const { username } = response.data;
            // Redirect to the message page with the username
            navigate('/message', { state: { username } });
        })
        .catch(error => {
            setError(alert('Invalid credentials'));
        });
    };

    return(
        <div className={"login-container"}>
            <NavBar />
            <div className={"login"}>
                <h1 id={"advert"}>Login into your <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span> account</h1>
                <form>
                    <div className={"user"}>
                        <h2>Insert Username</h2>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={"pass"}>
                        <h2>Insert Password</h2>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={"buttons"}>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Form;