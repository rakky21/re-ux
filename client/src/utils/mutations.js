import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($correo: String!, $password: String!) {
    login(correo: $correo, password: $password)
    token
    user {
        _id
        usuario}
    }
}`;

export const ADD_USER = gql`
  mutation addUser($usuario: String!, $correo: String!, $password: String!) {
    addUser(usuario: $usuario, correo: $correo, password: $password) {
      token
      user {
        _id
        usuario
      }
    }
  }
`;

export const ADD_REQUISITO = gql`
mutation addRequisito($comentario: String!) {
    addRequisito(comentario: $comentario) {
        _id
        comentario
        createdAt
        usuario
    }
}`;
