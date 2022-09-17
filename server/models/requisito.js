// const mongoose = require("mongoose");

// // SCHEMA
// const Schema = mongoose.Schema;
// const getRequisitoSchema = new Schema({
//   name: String,
//   apellido: String,
//   correo: String,
//   comentario: String,
//   date: {
//     type: String,
//     default: Date.now(),
//   },
// });

// // MODEL
// const getRequisito = mongoose.model("getRequisito", getRequisitoSchema);

// module.exports = getRequisito;


const mongoose = require('mongoose');

const { Schema } = mongoose;

const requisitoSchema = new Schema({
  requestedDate: {
    
  }
})