const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
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
    contracena: {
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

userSchema.pre("save", async function (next) {
  if ((this, isNew || this.isModified("contracena"))) {
    const saltRounds = 10;
    this.contracena = await bcrypt.hash(this.contracena, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (contracena) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
