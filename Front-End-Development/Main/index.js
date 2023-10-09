import ReactDOM from "react-dom";
import React from "react";

function Header() {
    return(
        <>
            <nav className={"Navigation"}>
                <img src="../../Images/Walter.png" />
                <ul id={"item-lists"}>
                    <li><a>About us</a></li>
                    <li><a>Login in</a></li>
                    <li><a>Codespace - GitHub</a></li>
                </ul>
            </nav>
        </>
    )
}

function Page() {
    return(
        <div>
            <Header />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))