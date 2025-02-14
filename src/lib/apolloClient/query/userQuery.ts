import { gql } from "@apollo/client";

export const GET_USER_BY_SHOP_ID = gql`
  query getUsersByShopId($shop_id: uuid!) {
    users(where: { shop_id: { _eq: $shop_id } }) {
      id
      username
      email
      phone
      role
    }
  }
`;

export const GET_USER_BY_PHONE = gql`
  query getUsersByShopId($phone: String!) {
    users(where: { phone: { _eq: $phone } }) {
      id
      username
      email
      phone
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUsersByShopId($id: uuid!) {
    users(where: { id: { _eq: $id } }) {
      id
      username
      email
      phone
      role
      shop_id
    }
  }
`;