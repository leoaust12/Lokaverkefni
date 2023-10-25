// This is the file that will complie everything into one JSX.
import Background_Video from "./components/Core/Copy-Cores/Video.jsx";
import Nav from "./components/Core/Copy-Cores/Navigation.jsx";
import {BrowserRouter as Anchor, Route, Routes} from "react-router-dom";

const Final = () => {
    return(
        <div>
            <Nav />
            <Background_Video />
        </div>
    )
}

export default Final;