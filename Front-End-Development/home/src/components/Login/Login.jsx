import "./Login.css";
import React, {useState} from "react";
import { auth } from "../../Firebase_Settings/accountDatabase";
import { signInWithEmailAndPassword  } from "firebase/auth";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword (auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className={"login"}>
            <h1>Login into your account</h1>
            <form onSubmit={signIn}>
                <div className={"email"}>
                    <label htmlFor={"mail"}>
                        Insert Email Address:
                    </label>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={"pass"}>
                    <label htmlFor={"password"}>
                        Insert Password:
                    </label>
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={"SubmitButton"}>
                    Log in
                </button>
                <input type={"reset"} id={"Reset-button"} />
            </form>
        </div>
    )
}

export default Form;