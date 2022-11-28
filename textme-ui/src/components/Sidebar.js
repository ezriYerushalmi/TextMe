import React from "react";
import "./Sidebar.css";
import {Avatar, Button} from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import ChatInfo from "./ChatInfo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
          <Avatar size={32} icon={<UserOutlined />} />
        <div className="sidebar-header-right"></div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
            <Button
                shape="circle"
                size="middle"
                icon={<SearchOutlined/>}
            />

          <input placeholder="Search the desired chat" type="text" />
        </div>
      </div>
      <div className="sidebar-chats">
          <ChatInfo></ChatInfo>
          <ChatInfo></ChatInfo>
          <ChatInfo></ChatInfo>
          <ChatInfo></ChatInfo>
          <ChatInfo></ChatInfo>
      </div>
    </div>
  );
};

export default Sidebar;
