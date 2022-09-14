const express = require("express");
const ComentarioPost = require("../models/createComentario");
const router = express.Router();
const CreateComentario = require("../models/createComentario");

// SAVING DATA TO OUR MONGO DATABASE
const data = [];

// ROUTES
router.get("/", (req, res) => {
  ComentarioPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("error: ", data);
    });
});

router.get("/name", (req, res) => {
  const data = {
    username: "persona",
    age: 5,
  };
  res.json(data);
});

router.post("/save", (req, res) => {
  console.log("Body", req.body);
  const data = req.body;
  const newCreateComentario = new CreateComentario(data);

  newCreateComentario.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Server error" });
    } else {
      res.json({
        msg: "Data saved",
      });
    }
  });
});

module.exports = router;
