const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");

const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;

const MONGODB_URI = "";

mongoose.connect(MONGODB_URI || "mongodb://localhost/personas", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongo is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`server is starting ${PORT}`));
