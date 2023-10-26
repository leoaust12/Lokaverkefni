import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Anchor, Route, Routes} from "react-router-dom";
import Final from "./Final";
import Layout from "./components/Core/Copy-Cores/Navigation";

function App() {
    return(
        <div>
            <Anchor>
                <Routes>
                    <Route path={"/"} element={<Layout />}>

                    </Route>
                </Routes>
            </Anchor>
        </div>
    )
}

function Content() {
    return(
        <div>

        </div>
    )
}

function Complete() {
    return(
        <div>
            <App />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Complete />
  </React.StrictMode>
);