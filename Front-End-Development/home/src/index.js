import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Anchor, Routes, Route, Link, Outlet } from "react-router-dom";

// This is only temp, I am learning from a web developer.
// The functions in App will not appear together. They'll be in their own files
function App() {
    return(
        <Anchor>
            <Link id={"homeLink"} to={"/"}>Home</Link>
            <Link id={"aboutLink"} to={"/about"}>About</Link>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/about"} element={<About />}></Route>
            </Routes>
        </Anchor>
    )
}

// Temp!!

function Home() {
    return(
        <h1>Hello, Home!</h1>
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