import React, {useState} from "react";
import "./ChatMessages.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Message from "./Message";

const ChatMessages = () => {

    const [msg, setMsg] = useState("");

    const sendMsg = (e) => {
        e.preventDefault();
        console.log(`typing >>> ${msg}`);
        setMsg("");
    }


  return (
    <div className="chat-messages">
      <div className="chat-header">
        <Avatar size={32} icon={<UserOutlined />} />
        <div className="chat-header-info">
          <h2>Chat Name</h2>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat-header-right"></div>
      </div>
      <div className="chat-messages-body">
        <Message text={"vla"}></Message>
        <Message text={"vla"} receiver={true}></Message>
        <Message text={"vla"}></Message>
        <Message text={"vla"} receiver={true}></Message>
      </div>
      <div className="chat-write-message">
        <form>
          <input type="text" placeholder="Send a message" value={msg} onChange={ (e) => setMsg(e.target.value)}></input>
          <button type="submit" onClick={sendMsg}> </button>
        </form>
      </div>
    </div>
  );
};

export default ChatMessages;
