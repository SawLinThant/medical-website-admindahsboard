import { gql } from "@apollo/client";

export const GET_TAGS= gql`
  query getTags {
    tags {
      id
      name
    }
  }
`;

export const GET_TAGS_BY_PRODUCT_ID= gql`
  query getTags($product_id: uuid!) {
    product_tags(where: { product_id: { _eq: $product_id } }) {
      id
      tag_id
      tag{
        id
        name
      }
    }
  }
`;