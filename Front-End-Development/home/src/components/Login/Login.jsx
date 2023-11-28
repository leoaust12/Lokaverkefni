import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavBar from "../Core/bar";

const Form = () => {

    return(
        <div className={"login-container"}>
            <NavBar />
            <div className={"login"}>
                <h1 id={"advert"}>Login into your <span id={"blue"}>Site</span><span id={"yellow"}>Speak</span> account</h1>
                <form>
                    <div className={"user"}>
                        <h2>Insert Username</h2>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className={"pass"}>
                        <h2>Insert Password</h2>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className={"buttons"}>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Form;