const { Schema, model } = require("mongoose");
// const { Comentario } = require("");
const dateFormat = require("../utils/dateFormat");

const requisitoSchema = new Schema(
  {
    usuario: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comentario: {
      type: String,
      require: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const Requisito = model("Requisito", requisitoSchema);

module.exports = Requisito;
