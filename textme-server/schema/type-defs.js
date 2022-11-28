const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    lastName: String!
    phone: String!
    isConnected: Boolean!
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  
  input CreateUserInput {
    name: String!
    lastName: String!
    phone: String!
  }
  
  type Mutation {
    createUser(input: CreateUserInput ): User! 
  }
`;

module.exports = { typeDefs };
