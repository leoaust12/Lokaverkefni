import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Anchor, Routes, Route, Link, Outlet } from "react-router-dom";
import Content from "./components/Home/home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/signup";

// This is only temp, I am learning from a web developer.
// The functions in App will not appear together. They'll be in their own files
function App() {
    return(
        <Anchor>
            <div>
                <Link id={"homeLink"} to={"/"}>Home</Link>
                <Link id={"aboutLink"} to={"/about"}>About</Link>
                <Link id={"signupLink"} to={"/sign-up"}>Sign up</Link>
                <Link id={"loginLink"} to={"/login"}>Login</Link>
                <a id={"githubLink"} href={"#"}>GitHub</a>
            </div>

            <Routes>
                <Route path={"/"} element={<Content />}></Route>
                <Route path={"/about"} element={<About />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"/sign-up"} element={<Signup />}></Route>
            </Routes>
        </Anchor>
    )
}

function About() {
    return(
        <h1>Hello, About!</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);