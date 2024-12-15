import { gql } from "@apollo/client";

export const REGISTER_STAFF_MUTATION = gql`
  mutation staffRegister($email: String!, $password: String!, $username: String!, $role: String!) {
    staffRegister(name: $name, password: $password, username: $username, role: $role) {
      message
      staff_id
    }
  }
`;