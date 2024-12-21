import { gql } from "@apollo/client";

export const GET_IMAGES_BY_PRODUCT_ID= gql`
  query getImages($product_id: uuid!) {
    images(where: { product_id: { _eq: $product_id } }) {
      id
      image_url
    }
  }
`;