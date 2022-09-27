const express = require("express");
const RequisitoPost = require("../models/requisito");
const router = express.Router();
const CreateRequisito = require("../models/requisito");

// SAVING DATA TO OUR MONGO DATABASE
const data = [];

// ROUTES
router.get("/", (req, res) => {
  RequisitoPost.find({})
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
  const newCreateComentario = new CreateRequisito(data);

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
