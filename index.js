// index.js
const { ApolloServer } = require("apollo-server");
const { typeDefs, LongType } = require("./schema");
const  triggers  = require("./data/triggers");
const  nodes  = require("./data/node.json");
const  actions  = require("./data/actions.json");
const  responses  = require("./data/responses.json");
const  resourceTemplates  = require("./data/resourceTemplate.json");
const { authenticate } = require("./auth");

const resolvers = {
  Long: LongType,
  Query: {
    node: (_, { nodeId }) => {
      return nodes.find((node) => node._id === nodeId);
    },
    action: (_, { actionId }) => {
      return actions.find((action) => action._id === actionId);
    },
    trigger: (_, { triggerId }) => {
      return triggers.find((trigger) => trigger._id === triggerId);
    },
    response: (_, { responseId }) => {
      return responses.find((response) => response._id === responseId);
    },
    resourceTemplate: (_, { resourceTemplateId }) => {
      return resourceTemplates.find((template) => template._id === resourceTemplateId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = authenticate(token); 
    return { user };
  },
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
