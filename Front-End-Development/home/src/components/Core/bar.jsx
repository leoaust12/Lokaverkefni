import S from "../../assets/S.png";
import Content from "../Home/home";
import Info from "../About/about";
import Login from "../Login/Login";
import Signup from "../Signup/signup";
import React from "react";
import {BrowserRouter as Anchor, Link, Route, Routes} from "react-router-dom";

export default function Bar() {
    return(
        <Anchor>
            <div className="Bar">
                <Link id={"homeLink"} to={"/"}> <img alt={"logo"} src={S} width={"auto"} height={"50px"} /> </Link>
                <Link id={"signupLink"} to={"/sign-up"}><strong>Signup</strong></Link>
                <Link id={"loginLink"} to={"/login"}><strong>Login</strong></Link>
                <Link id={"aboutLink"} to={"/about"}><strong>About</strong></Link>
            </div>
            <Routes>
                <Route path={"/"} element={<Content />}></Route>
                <Route path={"/about"} element={<Info />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"/sign-up"} element={<Signup />}></Route>
            </Routes>
        </Anchor>
    )
}