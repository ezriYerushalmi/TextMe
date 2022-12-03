

const { gql } = require("apollo-server");


const typeDefs = gql`
  ###################
  #     Types       #
  ###################

  type User {
    id: ID!
    name: String!
    lastName: String!
    phone: String!
    isConnected: Boolean!
    lastSeen: Float!
    avatarImage: String!
  }
  
  type Chat {
    id: ID!
    name: String!
    chatMemberIds: [ID!]!
    lastUpdatedDate: Float!
    messages: [Message]!
  }

  type Message {
    id: ID!
    writerId: ID!
    sendDate: Float!
    text: String!
    chatId: ID!
  }
  
  
  type UserLandPageResponse {
    user: User!
    contacts: [User]!
    chats: [Chat]!
  }

  ###################
  #   Input Types   #
  ###################

  input CreateUserInput {
    name: String!
    lastName: String!
    phone: String!
    avatarImage: String!
  }
  
  input UpdateMessageInput {
    chatId: ID!
    writerId: ID!
    sendDate: Float!
    text: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    getUserLandPage(userId: ID!): UserLandPageResponse
    searchUser(freeText: String): [User!]!
    getChatDetails(chatId: ID!): Chat!
  }

  type Mutation {
    createUser(input: CreateUserInput): [User!]!
    addNewFriend(userId: ID!): User!
    updateMsg( input: UpdateMessageInput): Message!
  }
`;

module.exports = { typeDefs };
