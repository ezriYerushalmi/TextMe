import React from "react";
import "./ChatInfo.css";
import UserAvatar from "./UserAvatar";

function ChatInfo({ chat, chatDetails, customOnClick, withSecondHeader = true ,selectedChatId}) {
    let lastMessage = '';
    if(withSecondHeader) {
        const {messages} = chat;
        lastMessage = messages && messages.length > 0 ?  messages[messages.length -1].text : 'Start New chat :)'
    }

    return (
        <div className={`chat-details-general ${withSecondHeader && "chat-details"} ${selectedChatId === chat?.id && "chat-details-selected"}`} onClick={customOnClick}>
            <UserAvatar size={32}  url={chatDetails.imageUrl}/>
            <div className="sidebar-info">
                <h2> {chatDetails.name ? chatDetails.name : <span>Unknown User</span>}</h2>
                <p> {withSecondHeader && lastMessage}</p>
            </div>
        </div>
    );
}

export default ChatInfo;