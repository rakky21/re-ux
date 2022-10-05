const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const morgan = require("morgan");

const { typeDefs, resolvers } = require("./schemas");

const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("tiny"));

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await startServer();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// startServer();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 API server running on port ${PORT}!`);
  });
});
