import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Anchor, Routes, Route, Link, Outlet } from "react-router-dom";
import Content from "./components/Home/home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/signup";
import Info from "./components/About/about"
import Message from "./components/Message/message";
import S from "./assets/S.png";
import "./components/Core/CSS/index.css";

// This is only temp, I am learning from a web developer.
// The functions in App will not appear together. They'll be in their own files

function App() {
    return(
        <Anchor>
            <div className="Bar">
                <Link id={"homeLink"} to={"/"}> <img alt={"logo"} src={S} width={"auto"} height={"50px"} /> </Link>
                <Link id={"signupLink"} to={"/sign-up"}><strong>Signup</strong></Link>
                <Link id={"loginLink"} to={"/login"}><strong>Login</strong></Link>
                <Link id={"aboutLink"} to={"/about"}><strong>About</strong></Link>
                <Link to={"/message"}><strong>message (temp)</strong></Link>
            </div>
            <Routes>
                <Route path={"/"} element={<Content />}></Route>
                <Route path={"/about"} element={<Info />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"/sign-up"} element={<Signup />}></Route>
                <Route path={"/message"} element={<Message />}></Route>
            </Routes>
        </Anchor>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);