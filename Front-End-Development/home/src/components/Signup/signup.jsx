import React from "react";
import "./signup.css"

function Signup() {
    return(
        <form className={"all"}>
            <h1>Join the Revolution at <span id="Site">Site</span><span id={"speak"}>Speak</span></h1>
            <div className={"mail"}>
                <h2>Enter your Email Address</h2>
                <input type={"email"} placeholder="Insert Email Addresss"/>
            </div>
            <div className={"user"}>
                <h2>Create Username</h2>
                <input type={"text"} placeholder="Insert Username"/>
            </div>
            <div className={"pass"}>
                <h2>Enter Password</h2>
                <input type={"password"} placeholder="Insert Password"/>
            </div>
            <div className={"word"}>
                <h2>Reenter Password</h2>
                <input type={"password"} placeholder={"Reenter Password"}/>
            </div>
            <input type={"submit"} />
        </form>
    )
}

export default Signup;