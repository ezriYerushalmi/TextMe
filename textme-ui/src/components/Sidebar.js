import React from "react";
import "./Sidebar.css";
import ChatInfo from "./ChatInfo";
import {SearchOutlined} from "@ant-design/icons";
import {Button} from "antd";

const Sidebar = ({user, chats, contacts, setSelectedChat, selectedChat}) => {
    console.log(chats);
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <ChatInfo key={user.id}  chatDetails={{imageUrl: user.avatarImage, name: `${user.name} ${user.lastName}` }} withSecondHeader={false} customOnClick = {() => {}}/>
                <div className="sidebar-header-right"></div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <Button
                        shape="circle"
                        size="middle"
                        icon={<SearchOutlined/>}
                    />

                    <input placeholder="Search the desired chat" type="text"/>
                </div>
            </div>
            <div className="sidebar-chats">
                {chats && chats.map((chat) => {
                    console.log(chat);
                    const chatContacts = chat.chatMemberIds
                        .map(contactId => contacts.find(con => con.id === contactId))
                        .filter(contact => contact);
                    const chatHeader = {
                        name: chat.name,
                        imageUrl: chat.imageUrl, //TODO: chat.image notExist at the Schema when group would be an option sholud change it
                    };
                    if (chatHeader.name === 'USER_NAME') {
                        const contact = chatContacts[0];
                        chatHeader.name = `${contact.name} ${contact.lastName}`;
                        chatHeader.imageUrl = contact.avatarImage;
                    }
                    return <ChatInfo key={chat.id} chat={chat} chatDetails={chatHeader} selectedChat = {selectedChat} userID={user.id} customOnClick = {() => {
                        setSelectedChat({
                            id: chat.id,
                            chatHeader,
                            chat,
                            chatContacts
                        })
                    }}/>
                })}

            </div>

        </div>
    );
};

export default Sidebar;
