import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($user: String!) {
    user(usuario: $usuario) {
      _id
      usuario
      correo
    }
    requisitos {
      _id
      comentario
      createdAt
    }
  }
`;

export const QUERY_REQUISITO = gql`
  query requisito($requisito: String!) {
    _id
    usuario
    comentario
    createdAt
  }
`;

export const QUERY_REQUISITOS = gql`
  query requisitos($usuario: String) {
    requisitos(usuario: $usuario) {
      _id
      usuario
      comentario
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      usuario
      correo
      requisitos
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      usuario
      correo
      requisito
    }
  }
`;
