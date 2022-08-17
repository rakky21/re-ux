const mongoose = require("mongoose");

// SCHEMA
const Schema = mongoose.Schema;
const ComentarioPostSchema = new Schema({
  name: String,
  apellido: String,
  correo: String,
  comentario: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// MODEL
const ComentarioPost = mongoose.model("ComentarioPost", ComentarioPostSchema);

module.exports = ComentarioPost;
