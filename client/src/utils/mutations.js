import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($correo: String!, $contracena: String!) {
    login(correo: $correo, contracena: $contracena)
    token
    user {
        _id
        usuario}
    }
}`;

export const ADD_USER = gql`
  mutation addUser($usuario: String!, $correo: String!, $contracena: String!) {
    addUser(usuario: $usuario, correo: $correo, contracena: $contracena) {
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
