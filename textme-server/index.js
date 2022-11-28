const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const {logger} = require("./logger");
require('dotenv').config();



const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: process.env.PORT}).then(({ url }) => {
  logger.info(`The server is up At:  ${url}`);
});
