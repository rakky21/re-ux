const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

const UserSchema = new Schema(
  {
    usuario: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
    },
    requisitos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Requisito",
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

UserSchema.pre("save", async function (next) {
  if ((this, isNew || this.isModified("password"))) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

UserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
