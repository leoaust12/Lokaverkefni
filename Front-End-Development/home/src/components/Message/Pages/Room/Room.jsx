import React, {useState, useEffect} from "react";
import client, {COLLECTION_ID_MESSAGES, DATABASE_ID, databases} from "../../../../appwriteconfiguration";
import { ID, Query } from "appwrite";
import "./room.css"
import {Trash2} from "react-feather";

const Room = () => {

    const [messages, setMessages] = useState([]);
    const [messageBody, setMessageBody] = useState("");

    useEffect(() => {
        getMessages();

        // This will make send to the console a message was sent.
        const unsubscribe = client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`, response => {

            console.log("REAL TIME:", response)

            if(response.events.includes("databases.*.collections.*.documents.*.create")) {
                console.log("A message was recently created. Preparing for append")
                setMessages(prevState => [response.payload, ...prevState])

                console.log("Message Created.")
            }

            if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
                console.log("A message was recently deleted. Preparing for remove.")
                setMessages(prevState => prevState.filter(message => message.$id !== response.payload.$id))

                console.log("Message Deleted.")
            }
        })
        return () => {
            // This will prevent a strange bug that will do the action twice. Send out twice or delete and resend twice.
            unsubscribe();
        }
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

    const handleDeletes = async (message_Id) => {
        databases.deleteDocument(DATABASE_ID, COLLECTION_ID_MESSAGES, message_Id);
        setMessages(prevState => messages.filter(message => message.$id !== message_Id))
        console.log("Message deleted.")
    }

    const getMessages = async () => {
        const Response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID_MESSAGES,
            [
                Query.orderDesc("$createdAt"),
                Query.limit(20)
            ]
        );
        console.log("RESPONSE:", Response);
        setMessages(Response.documents)
    }

    return(
        <main className={"container"}>
            <div className={"Room-container"}>



                <div className={"message-map"}>
                    {messages.map(message => (
                        <div key={message.$id} className={"Message-Wrap"}>
                            <div className={"profile"}>
                                <span id={"userIcon"}>

                                </span>
                                <div className={"usernames"}>

                                </div>
                                <div className={"message-body"}>
                                    <span>
                                        {message.body}
                                    </span>
                                 </div>
                                <div className={"message-footer"}>
                                    <small className={"timestamp-messages"}>{new Date(message.$createdAt).toLocaleString()}</small>
                                    <span className={"delete"}>
                                        <Trash2 onClick={() => {handleDeletes(message.$id)}}  />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"textbox"}>
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
                        <div className={"buttons_rooms"}>
                            <input id={"Submit-Button-Message"} type={"submit"} value={"Send"} />
                        </div>
                    </form>
                </div>

                <div>

                </div>
            </div>
        </main>
    )
}

export default Room;