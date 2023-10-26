import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Anchor, Route, Routes} from "react-router-dom";
import Final from "./Final";
import Layout from "./components/Core/Copy-Cores/Navigation";
import Footer from "./components/Core/Copy-Cores/Footer";
import Home from "./components/content";

function App() {
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />}>
                        Home
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

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
            <App />
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