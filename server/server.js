const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const { authMiddleware } = require('./utils/auth')
const morgan = require("morgan");
const routes = require("./routes/api");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;


const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: authMiddleware
  });
  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//  HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);
// app.use(require('./routes/'));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, console.log(`server is starting ${PORT}`));