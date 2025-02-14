import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
  mutation resetPassword($phone: String!, $password: String! ) {
    resetPassword(phone: $phone, password: $password ) {
      message
    }
  }
`;