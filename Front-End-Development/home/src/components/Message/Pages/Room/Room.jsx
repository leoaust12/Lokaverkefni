import React, {useState, useEffect} from "react";
import client, {account, COLLECTION_ID_MESSAGES, DATABASE_ID, databases} from "../../../../appwriteconfiguration";
import { ID, Query, Role, Permission } from "appwrite";
import "./room.css"
import {Trash2} from "react-feather";
import Header from "../../../Header/header";
import {useAuth} from "../../../../utility/AuthContext";

const Room = () => {

    const [messages, setMessages] = useState([]);
    const [messageBody, setMessageBody] = useState("");
    const [messageAccount, setMessageAccount] = useState("");
    const {user} = useAuth();

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
            userId:user.$id,
            userName:user.name,
            body:messageBody,
        }

        let permission = [
            Permission.write(Role.user(user.$id))
        ]

        let response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID_MESSAGES,
            ID.unique(),
            payload,
            permission
        )

        console.log("Created: ", response)



        setMessageBody("");
        setMessageAccount("")
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
                <Header />
                <div className={"form-textbox"}>
                <form onSubmit={handleNewMessages} id={"message-form"}>
                    <div>
                        <div className={"textbox"}>
                            <textarea id={"speak-form-message"}
                                      required
                                      maxLength={"400"}
                                      minLength={"1" /* This is to prevent any empty messages being able to send out as it could clog the web and the server */}
                                      placeholder={"Speak"}
                                      onChange={(e) => {setMessageBody(e.target.value)}}
                                      value={messageBody}
                            ></textarea>
                        </div>
                    </div>
                    <div className={"buttons_rooms"}>
                        <button id={"room-submit"} type={"submit"} value={"submit"}>Submit</button>
                    </div>
                </form>
                    <br />
            </div>
                <div className={"message-map"}>
                    {messages.map(message => (
                        <div key={message.$id} className={"Message-Wrap"}>
                            <div className={"profile"}>
                                <div className={"usernames"}>
                                    <div id={"username-span"}>
                                        <h5>Username: </h5>
                                        <p>
                                            {message?.userName ? (
                                                <span>
                                                    {message.userName}
                                                </span>
                                            ): (
                                                <span>"Anonymous User"</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className={"delete"}>
                                    {message.$permissions.includes(`delete(\"user:${user.$id}\")`) && (
                                        <Trash2 className="delete--btn" onClick={() => {handleDeletes(message.$id)}}/>
                                    )}
                                </div>

                                </div>
                                <div className={"message-body"}>
                                    <span id={"body-span"}>
                                        {message.body}
                                    </span>
                                 </div>

                                <div className={"message-footer"}>
                                    <small className={"timestamp-messages"}>{new Date(message.$createdAt).toLocaleString()}</small>

                                </div>
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