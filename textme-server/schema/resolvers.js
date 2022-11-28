const { usersList } = require("../Data/fakeUsers");
const {find} = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return usersList;
    },
    user: (_, args) => {
      const { id } = args;
      return find(usersList, {id});
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const userInput = args.input;
      console.log(userInput);
      return usersList[0];
    }
  }
};


module.exports = {resolvers};