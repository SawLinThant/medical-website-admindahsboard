import { gql, useMutation } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
  mutation userLogin($username: String!, $password: String!) {
    userLogin(username: $username, password: $password) {
      token
      message
    }
  }
`;
