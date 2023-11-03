import React from "react";

import {auth, provider } from "./messageDatabase";
import { signInWithPopup } from "firebase/auth";
import GoogleLogo from "../assets/GoogleLogo.png"

const Authentication = () => {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    }

    return(
        <div className={"authentication"}>
            <p>
                Sign in today with Google to continue
            </p>
            <button onClick={signInWithGoogle}><img src={GoogleLogo} alt={"Google Logo"} />Google</button>
        </div>
    )
}

export default Authentication;