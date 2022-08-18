const express = require("express");
const router = express.Router();
const CreateComentario = require("../models/createComentario");

// ROUTES
router.get("/", (req, res) => {
  CreateComentario.find({})
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