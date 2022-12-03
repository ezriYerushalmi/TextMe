

const {usersList} = require("./Data/Users");
const {chatsData} = require("./Data/Chats");
const {messagesData} = require("./Data/Messages");
const {User} = require("./Classes/User");

const {find} = require("lodash");
const {UserInputError} = require("apollo-server");
const {removeItemFromArray} = require("../../Utiles");
const {Message} = require("./Classes/Message");


function getUsers() {
    return Promise.resolve(usersList);
}

function getUserById(userId) {
    return new Promise((resolve, reject) => {
        const user = find(usersList, {id: userId});
        user ? resolve(user) : reject(user);
    })
}

function searchUser(freeText) {
    const userProperties = Object.getOwnPropertyNames(usersList[0]);
    const users = usersList.filter((user) => {
        const matchCaseProperties = userProperties.filter((property) => {
            if (typeof user[property] === "string") {
                return user[property].includes(freeText);
            } else {
                return false;
            }
        });
        return matchCaseProperties.length > 0;
    });
    return Promise.resolve(users);
}

function createUser(input) {
    if (!find(usersList, {phone: input.phone})) {
        const newUser = new User(input);
        console.log(`new user - ${newUser.id} created`);
        usersList.push(newUser);
        return newUser;
    } else {
        throw new UserInputError("User already exist");
    }
}

function getUserLandPage(userId) {
    const chats = chatsData.filter((chat) => {
        return chat.chatMemberIds.includes(userId);
    });
    const contactIds = [];
    chats.forEach((chat) => {
        contactIds.push(chat.chatMemberIds);
        chat.messages = messagesData.filter(msg =>  msg.chatId === chat.id);
    });
    const uniqueContactIds = [...new Set(contactIds.flat())];
    const uniqueContactIdsWithoutUser = removeItemFromArray(uniqueContactIds, userId)
    const contacts = uniqueContactIdsWithoutUser.map((uId) => usersList.find(usr => usr.id === uId));
    const user = usersList.find(usr => usr.id === userId)
    return Promise.resolve({user, contacts, chats})
}

function getChatDetails(userId, chatId) {
    const chat = chatsData.find(c => c.id === chatId);
    const chatContacts = chat.chatMemberIds.map(cmId => usersList.find(usr => cmId === userId));
if(chat)
    const chatHeader = {
        imageUrl:
        },
}

function updateMsg(input){
    const message = new Message(input);
    messagesData.push(message);
    return Promise.resolve(message);
}


module.exports = {
    getUsers,
    getUserById,
    searchUser,
    createUser,
    getUserLandPage,
    updateMsg
};
