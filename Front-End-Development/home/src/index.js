import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthenticationVerify from "./utility/PrivateRoutes"
import { BrowserRouter as Anchor, Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import {AuthProvider} from "./utility/AuthContext";

import Content from "./components/Home/home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/signup";
import Info from "./components/About/about"
import Message from "./components/Message/message";
import "./components/Core/CSS/index.css";

const App = () => {
    return(
        <Anchor>
            <AuthProvider>
                <Routes>
                    <Route path={"/"} element={<Content />}></Route>
                    <Route path={"/about"} element={<Info />}></Route>
                    <Route path={"/login"} element={<Login />}></Route>
                    <Route path={"/"} element={<AuthenticationVerify />}>
                        <Route path={"/message"} element={<Message />}></Route>
                    </Route>
                    <Route path={"/sign-up"} element={<Signup />}></Route>
                </Routes>
            </AuthProvider>
        </Anchor>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);