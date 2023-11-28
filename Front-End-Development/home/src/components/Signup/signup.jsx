import React from "react";
import { useState } from 'react';
import axios from 'axios';
import "./signup.css";
import NavBar from "../Core/bar";


const Signup = () => {
    return (
        <div className={"signup-container"}>
            <form className={"all"}>
                <NavBar />
                <h1>Join the Revolution at <span id="Site">Site</span><span id={"speak"}>Speak</span></h1>
                <div className={"user"}>
                    <h2>Create Username</h2>
                    <input type="text" placeholder="Username" />
                </div>
                <div className={"pass"}>
                    <h2>Enter Password</h2>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className={"buttons"}>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;