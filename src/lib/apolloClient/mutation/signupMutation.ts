import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation userRegister($email: String!, $password: String!, $username: String!, $role: String!, $phone: String, $shop_id: uuid) {
    userRegister(email: $email, password: $password, username: $username, role: $role, phone: $phone, shop_id: $shop_id) {
      message
      user_id
    }
  }
`;