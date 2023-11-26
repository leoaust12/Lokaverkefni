import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Anchor, Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import Content from "./components/Home/home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/signup";
import Info from "./components/About/about"
import Message from "./components/Message/message";
import "./components/Core/CSS/index.css";

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated
  const isAuthenticated = !!document.cookie.includes('token');

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<Content />}></Route>
                <Route path={"/about"} element={<Info />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path={"/sign-up"} element={<Signup />}></Route>
                <Route path="/message" element={<Message />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);