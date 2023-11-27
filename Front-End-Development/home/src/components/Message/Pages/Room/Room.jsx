import React, {useState, useEffect} from "react";
import {COLLECTION_ID_MESSAGES, DATABASE_ID, databases} from "../../../../appwriteconfiguration";
import { ID, Query } from "appwrite";
import "./room.css"
import message from "../../message";

const Room = () => {

    const [messages, setMessages] = useState([]);
    const [messageBody, setMessageBody] = useState("");

    useEffect(() => {
        getMessages();
    }, []);

    const handleNewMessages = async (e) => {
        e.preventDefault(); // This will prevent the website from refreshing itself, as set by default

        let payload = {
            body:messageBody
        }

        let response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID_MESSAGES,
            ID.unique(),
            payload
        )

        console.log("Created: ", response)



        setMessageBody("");
    }

    const getMessages = async () => {
        const Response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID_MESSAGES,
            [
                Query.orderDesc("$createdAt"),
                // Query.limit(2)
            ]
        );
        console.log("RESPONSE:", Response);
        setMessages(Response.documents)
    }

    return(
        <main className={"container"}>
            <div className={"Room-container"}>

                <form onSubmit={handleNewMessages} id={"message-form"}>
                    <div>
                        <textarea
                            required
                            maxLength="400"
                            placeholder="Insert a message"
                            onChange={(e) => {setMessageBody(e.target.value)}}
                            value={messageBody}>
                        </textarea>
                    </div>

                    <div>
                        <input id={"Submit-Button-Message"} type={"submit"} value={"Send"} />
                    </div>
                </form>

                <div className={"message-map"}>
                    {messages.map(message => (
                        <div key={message.$id} className={"Message-Wrap"}>
                            <div className={"message-body"}>
                                <span>
                                    {message.body}
                                </span>
                            </div>
                            <div className={"message-footer"}>
                                <small className={"timestamp-messages"}>{message.$createdAt}</small>
                            </div>
                        </div>
                    ))}
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}

export default Room;