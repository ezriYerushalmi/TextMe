const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: 4080}).then(({ url }) => {
  console.log(`The server is up At:  ${url}`);
});
