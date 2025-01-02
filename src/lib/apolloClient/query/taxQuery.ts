import { gql } from "@apollo/client";

export const GET_TAXES= gql`
  query getTags {
    taxes {
      id
      value
    }
  }
`;