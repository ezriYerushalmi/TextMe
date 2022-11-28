import React from 'react';
import './Message.css'
import TimeStamp from "./TimeStamp";

const Message = ({writer, message, isCurrentUser}) => {
    const name = isCurrentUser ? 'Me' : `${writer.name} ${writer.lastName}`;
    return (
        <div className="message">
            <p className={`chat-msg ${isCurrentUser && "chat-receiver "}`}>
                <span className="chat-writer-name"> {name}</span>
                {message.text && <span>{message.text}</span>}
                <TimeStamp timeStampString={message.sendDate}></TimeStamp>
            </p>
        </div>
    );
};
//
export default Message;