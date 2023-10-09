import React from "react";
import { Helmet } from "react-helmet";

const title = "Log-in | SiteSpeak";

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

function App() {
  return(
    <MyComponent />
  )
}

export default App;
