import React from "react";
import "./message.css"
import { useLocation } from 'react-router-dom';



const Message = () => {
    const location = useLocation();
    const { username } = location.state || {};
      
    return(
        <div>
            <div className={"leftBar"}>
                <h1><span id={"yellow"}>Site</span><span id={"blue"}>Speak</span></h1>
                <ul>
                    <li>Test1</li>
                    <li>Test2</li>
                    <li>Test3</li>
                    <li>Test4</li>
                    <li>Test5</li>
                    <li>Test6</li>
                    <li>Test7</li>
                </ul>
                <p id={"create-demo"}>
                    Welcome, {username}!
                </p>
            </div>
            <div className={"items"}>
                
            </div>
        </div>
    )
}

export default Message;