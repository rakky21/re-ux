const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    usuario: String
    apellido: String
    correo: String
    requisitos: [Requisito]
  }
  type Requisito {
    _id: ID
    comentario: String
    createdAt: String
    usuario: String
  }
  type Query {
    me: User
    users: [User]
    user(usuario: String!): User
    requisitos(usuario: String): [Requisito]
    requisito(_id: ID!): Requisito
  }

  type Mutation {
    login(correo: String!, password: String!): Auth
    addUser(usuario: String!, correo: String!, password: String!): Auth
    addRequisito(comentario: String!): Requisito
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
