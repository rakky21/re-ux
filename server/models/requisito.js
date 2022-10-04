const { Schema, model } = require("mongoose");
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
    commentario: {
      type: String,
      require: "You need to leave a message",
      minlength: 1,
      maxlength: 300,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Requisito = model("Requisito", requisitoSchema);

module.exports = Requisito;