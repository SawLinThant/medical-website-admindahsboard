import { gql } from "@apollo/client";

export const GET_CATEGORY= gql`
  query getTags {
    categories {
      id
      name
    }
  }
`;

export const GET_SHOP_CATEGORY= gql`
  query getTags {
    shop_categories {
      id
      name
    }
  }
`;