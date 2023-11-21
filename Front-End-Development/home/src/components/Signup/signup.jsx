import React from "react";
import "./signup.css"

function Signup() {
    return(
        <form className={"all"}>
            <h1>Join the Revolution at <span id="Site">Site</span><span id={"speak"}>Speak</span></h1>
            <div className={"mail"}>
                <label htmlFor={"mail"} >Enter your Email Address</label>
                <input type={"email"} placeholder="Insert Email Addresss"/>
            </div>
            <div className={"user"}>
                <label htmlFor={"username"}>Create Username</label>
                <input type={"text"} placeholder="Insert Username"/>
            </div>
            <div className={"pass"}>
                <label htmlFor={"password"}>Create Password</label>
                <input type={"password"} placeholder="Insert Password"/>
            </div>
            <div className={"word"}>
                <label htmlFor={"reenter"}>Reenter Password</label>
                <input type={"password"} placeholder={"Reenter Password"}/>
            </div>
            <div className={"buttons"}>
                <input type={"submit"} id={"submit-button"} />
                <input type={"reset"} id={"reset-button"} />
            </div>
        </form>
    )
}

export default Signup;