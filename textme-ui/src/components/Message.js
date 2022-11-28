import React from 'react';
import './Message.css'

const Message = (props) => {
    return (
        <div className="message">
            <p className={`chat-msg ${ props.receiver && "chat-receiver "}`}>
                <span className="chat-writer-name"> Ezri Yerushalmi</span>
                <span>{props.text}</span>
                <span className="chat-msg-timestamp">3:52 pm</span>
            </p>
        </div>
    );
};
//
export default Message;