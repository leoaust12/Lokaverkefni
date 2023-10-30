import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Anchor } from "react-router-dom";
import Final from "./Final";
import Layout from "./components/Core/Copy-Cores/Navigation";

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