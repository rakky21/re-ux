const db = require("../config/connection");
const { Requisito, User } = require("../models");

db.once("open", async () => {
  await Requisito.deleteMany({});
  await User.deleteMany({});

  const userData = [];
});
