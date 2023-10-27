import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Anchor } from "react-router-dom";
import Final from "./Final";
import Layout from "./components/Core/Copy-Cores/Navigation";
import Footer from "./components/Core/Copy-Cores/Footer";
import Item from "./components/content";

function Content() {
    return(
        <div>
            <Final />
        </div>
    )
}

function Complete() {
    return(
        <div>
            <Content />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Anchor>
          <Complete />
      </Anchor>
  </React.StrictMode>
);