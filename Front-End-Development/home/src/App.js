import React from "react";
import "./CSS/main.css"; // CSS file
import Background_Video from "./components/Video.jsx";
import Nav from "./components/Navigation.jsx";
import {Helmet} from "react-helmet";

// Title section

const title = "Welcome to SiteSpeak";

class MyComponent extends React.PureComponent {
  render () {
    return(
      <>
        <Helmet>
          <title>{ title }</title>
        </Helmet>
      </>
    )
  }
}

// Render section

function App() {
  return (
    <div>
      <MyComponent />
      <Background_Video />
      <Nav />
    </div>
  )
}

export default App;