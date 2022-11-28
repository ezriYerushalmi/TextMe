import React from "react";
import { Avatar, Image } from "antd";
import "./ChatInfo.css";

function ChatInfo(props) {
  return (
    <div className="chat-details">
      <Avatar
        shape="circle"
        size={48}
        src={
          <Image
            src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
            style={{ width: 48 }}
          />
        }
      />
      <div className="sidebar-info">
        <h2> {props.name ? props.name : <span>Unknown User</span>}</h2>
        <p> last Message ...</p>
      </div>
    </div>
  );
}

export default ChatInfo;