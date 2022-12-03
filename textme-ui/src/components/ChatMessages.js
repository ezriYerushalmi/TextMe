import React, {useEffect, useState} from "react";
import "./ChatMessages.css";

import Message from "./Message";
import UserAvatar from "./UserAvatar";
import {useMutation} from "@apollo/client";
import {MUTATION_UPDATE_MESSAGE} from "../gql/queries/users";

const ChatMessages = ({user, selectedChatId}) => {


    const [messages, setMessages] = useState(null);
    const [chatData, setChatData] = useState(null);
    const [participantsMap, setParticipantsMap] = useState(new Map());
    const [msg, setMsg] = useState("");

    const {
        chatHeader,
        chat,
        chatContacts
    } = chatData;

    const [fetchChatDetails, {data: chatDetails, error: UserError}] =
        useLazyQuery(QUERY_GET_USER);

    const [addNewMsg] = useMutation(MUTATION_UPDATE_MESSAGE, {
        /*refetchQueries: [
            {
                query: GET_USERS
            }
        ],*/
    });

    useEffect(() => {
        if (selectedChatId && !chatData) {
            fetchChatDetails({variables: {chatId: selectedChatId}})
        }
        if (chatDetails){
            setChatData(chatDetails);
        }
        if (chatContacts) {
            const tempContactMap = new Map();
            chatContacts.forEach((contact) => {
                tempContactMap.set(contact.id, contact);
            })
            tempContactMap.set(user.id, user);
            setParticipantsMap(tempContactMap);
        }
        if (chat && chat.messages) {
            setMessages(chat.messages);
        }

    }, [chatData, selectedChatId, chatContacts]);

    function createMessageObject(msg) {
        const timestamp = new Date().getTime();
        return {
            //id: `msg-${timestamp}`,
            chatId: chat.id,
            writerId: user.id,
            sendDate: timestamp,
            text: msg
        }

    }


    const sendMsg = (e) => {
        e.preventDefault();
        console.log(`typing >>> ${msg}`);
        const newMsg = createMessageObject(msg);
        addNewMsg({variables: {updateMsgInput: newMsg}}).then((response) => {
            const {updateMsg} = response.data;
            setMessages([...messages, updateMsg]);
        });
        setMsg("");
    }

    return (
        <>
            {
                chat ? <div className="chat-messages">
                        <div className="chat-header">
                            <UserAvatar size={48} url={chatHeader.imageUrl}/>
                            <div className="chat-header-info">
                                <h2>{chatHeader.name}</h2>
                                <p>Last Seen at ...</p>
                            </div>
                            <div className="chat-header-right"></div>
                        </div>
                        <div className="chat-messages-body">
                            {messages && messages.map(msg =>
                                <Message key={msg.id} message={msg} isCurrentUser={msg.writerId === user.id}
                                         writer={participantsMap.get(msg.writerId)}></Message>)
                            }
                        </div>
                        <div className="chat-write-message">
                            <form>
                                <input type="text" placeholder="Send a message" value={msg}
                                       onChange={(e) => setMsg(e.target.value)}></input>
                                <button type="submit" onClick={sendMsg}></button>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="chat-messages-start-chat">
                        <div className="chat-messages-start-chat-sentence">
                            <h1>Who do you miss ??? </h1>
                        </div>
                    </div>

            }
        </>

    );
};

export default ChatMessages;
