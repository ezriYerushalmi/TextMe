require('dotenv').config();
const {logger} = require("../logger");
const {UserInputError} = require("apollo-server");
const {
    getUsers,
    getUserById,
    searchUser,
    createUser,
    getUserLandPage,
    updateMsg,
    getChatDetails
} = require(`../modules/${process.env.STORE_TYPE}/queries`);
const resolvers = {
    Query: {
        users:  () => {
            return getUsers();
        },
        user:  (_, args) => {
            const {id} = args;
            return  getUserById(id);
        },
        searchUser:  (_, args) => {
            const {freeText} = args;
            return searchUser(freeText);
        },
        getUserLandPage: (_, args) => {
            const {userId} = args;
            return getUserLandPage(userId);
        },
        getChatDetils: (_, args) => {
            const {userId, chatId} = args;
            return getChatDetails(userId, chatId);
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const {input} = args;
            return createUser(input);
        },
        updateMsg: async (parent, args) => {
            const {input} = args;
            logger.info('updateMsg', JSON.stringify(input));
            return updateMsg(input);
        }
    },
};

module.exports = {resolvers};
