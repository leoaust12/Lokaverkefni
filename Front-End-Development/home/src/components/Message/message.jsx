import React from "react";
import "./message.css"

function Message() {
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
                    Send a new Message
                </p>
            </div>
            <div className={"items"}>
                <h1>This is only a demo</h1>
                <h1>Items in this will be the messages displayed</h1>
                <h1>While items in the nav bar are the people who you have sent messages to</h1>
                <h1>Aswell as a "send messages" button</h1>
            </div>
        </div>
    )
}

export default Message;