const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    usuario: String
    apellido: String
    correo: String
    requisitos: String
  }
  
  type Requisito {
    _id: ID
    createdAt: String
    usuario: String
    comentario: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(usuario: String!): User
    users: [User]
    requisito(_id: ID!): Requisito
    requisitos(usuario: String): Requisito
  }

  type Mutation {
    login(correo: String!, password: String!): Auth
    addUser(usuario: String!, correo: String!, password: String!): Auth
    addRequisito(comentario: String!): Requisito
  }
`;

module.exports = typeDefs;
