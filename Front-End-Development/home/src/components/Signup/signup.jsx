import React from "react";
import SiteSpeak from "../../assets/SiteSpeak.png";

function Signup() {
    return(
        <form>
            <h1>Sign up today at <img alt={"image of the logo"} src={SiteSpeak} width={"auto"} height={"20px"} /></h1>
            <div className={"mail"}>
                <label htmlFor={"mail"}>Insert Email Address</label>
                <input type={"email"} />
            </div>
            <div className={"user"}>
                <label htmlFor={"username"}>)Insert a Username</label>
                <input />
            </div>
            <div>
                <label>Insert a Password</label>
                <input />
            </div>
            <div>
                <label>Re-enter the password</label>
                <input />
            </div>
            <input type={"reset"} />
            <input type={"submit"} />
        </form>
    )
}

export default Signup;