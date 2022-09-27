const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const { authMiddleware } = require('./utils/auth')
const morgan = require("morgan");
const routes = require("./routes/api");
const path = require("path");

// EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 8080;

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