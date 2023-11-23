import React from "react";
import { useState } from 'react';
import axios from 'axios';
import "./signup.css";
import NavBar from "../Core/bar";


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSignup = () => {
      axios.post('http://localhost:5000/signup', { username, password })
        .then((response) => setMessage(response.data.message))
        .catch((error) => setMessage('Error signing up'));
    };

    return(
        <div>
            <NavBar />
            <form className={"all"}>
                <h1>Join the Revolution at <span id="Site">Site</span><span id={"speak"}>Speak</span></h1>
                <div className={"user"}>
                    <h2>Create Username</h2>
                    <input type="text" placeholder="Username"value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={"pass"}>
                    <h2>Enter Password</h2>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={"buttons"}>
                    <button id={"signup-Button"} onClick={handleSignup}>Sign Up</button>
                    <p>{message}</p>
                </div>
            </form>
        </div>

    )
}

export default Signup;