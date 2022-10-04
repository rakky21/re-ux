const { AuthenticationError } = require("apollo-server-express");
const { User, Requisitos } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async () => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.User._id })
          .select("-__V -contracena")
          .populate("requisitos");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__V -password").populate("requisitos");
    },
    user: async (parent, { usuario }) => {
      return User.findOne({ usuario })
        .select("-___V -password")
        .populate("requisitos");
    },
    requisitos: async (parent, { usuario }) => {
      const params = usuario ? { usuario } : {};
      return Requisitos.find(params).sort({ createdAt: -1 });
    },
    requisito: async (parent, { _id }) => {
      return Requisitos.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, arg) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { correo, contracena }) => {
      const user = await User.findOne({ correo });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectContracena(contracena);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addRequisito: async (parent, args, context) => {
      if (context.user) {
        const requisito = await Requisito.create({
          ...args,
          usuario: context.user.usuario,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { requisitos: requisito._id } },
          { new: true }
        );

        return requisito;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;