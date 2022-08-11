const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = "";

mongoose.connect(MONGODB_URI || "mongodb://localhost/personas", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongo is connected");
});

// SCHEMA
const Schema = mongoose.Schema;
const ComentarioPostSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// MODEL
const ComentarioPost = mongoose.model("ComentarioPost", ComentarioPostSchema);

// SAVING DATA TO OUR MONGO DATABASE
const data = {
  title: "someting",
  body: "something",
};

const newComentarioPost = new ComentarioPost(data); //INSTANCE OF THE MODEL

newComentarioPost.save((err) => {
  if (err) {
    console.log(" Something went wrong.");
  } else {
    console.log(" Data saved. ");
  }
});

//  HTTP request logger
app.use(morgan("tiny"));

// ROUTES
app.get("/api", (req, res) => {
  then((data) => {
    console.log("Data: ", data);
    res.json(data);
  }).catch((err) => {
    console.log("error: ", data);
  });
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "persona",
    age: 5,
  };
  res.json(data);
});

app.listen(PORT, console.log(`server is starting ${PORT}`));
