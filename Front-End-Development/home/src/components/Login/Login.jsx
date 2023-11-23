import Nav from "../Core/Navigation";
import {BrowserRouter as Anchor, Route, Router} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleLogin = () => {
      axios.post('http://localhost:5000/login', { username, password })
        .then((response) => setMessage(response.data.message))
        .catch((error) => setMessage('Invalid credentials'));
    };

    return(
        <div className={"login"}>
            <h1 id={"advert"}>Login into your <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span> account</h1>
            <form>
                <div className={"user"}>
                    <h2>Enter your Username</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={"pass"}>
                    <h2>Enter your Password</h2>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={"buttons"}>
                    <button onClick={handleLogin}>Log In</button>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    )
}

export default Login;