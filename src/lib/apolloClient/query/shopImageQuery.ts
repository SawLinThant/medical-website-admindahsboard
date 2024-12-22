import { gql } from "@apollo/client";

export const GET_IMAGES_BY_SHOP_ID= gql`
  query getImages($shop_id: uuid!) {
    shop_images(where: { shop_id: { _eq: $shop_id } }) {
      id
      image_url
    }
  }
`;