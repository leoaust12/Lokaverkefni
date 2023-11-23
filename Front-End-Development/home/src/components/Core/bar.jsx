import S from "../../assets/S.png";
import Content from "../Home/home";
import Info from "../About/about";
import Login from "../Login/Login";
import Signup from "../Signup/signup";
import React from "react";
import {BrowserRouter as Anchor, Link, Route, Routes} from "react-router-dom";
import About from "../About/about";
import "./CSS/bar.css"

const NavBar = () => {
    return(
            <div className="Bar">
                <Link id={"homeLink"} to={"/"}> <img alt={"logo"} src={S} width={"auto"} height={"50px"} /> </Link>
                <Link id={"signupLink"} to={"/sign-up"}><strong>Signup</strong></Link>
                <Link id={"loginLink"} to={"/login"}><strong>Login</strong></Link>
                <Link id={"aboutLink"} to={"/about"}><strong>About</strong></Link>
                <Link to={"/message"}><strong>message (temp)</strong></Link>
            </div>
    )
}

export default NavBar;