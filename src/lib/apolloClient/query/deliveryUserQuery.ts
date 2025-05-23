import { gql } from "@apollo/client";

export const GET_FILTERED_DELIVERY_USERS = gql`
  query getFilteredDeliveryUsers(
    $where: delivery_users_bool_exp
    $offset: Int
    $limit: Int
  ) {
    delivery_users(
      where: $where
      offset: $offset
      limit: $limit
    ) {
      id
      age
      contact_address
      name
      phone
      uid
      status
    }
    delivery_users_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_DELIVERY_USER_BY_PHONE_AND_UID = gql`
  query GetDeliveryUserByPhoneAndUid($phone: String!, $uid: String!) {
    delivery_users(where: { phone: { _eq: $phone }, uid: { _eq: $uid } }) {
      id
      uid
      name
      age
      phone
      contact_address
      status
    }
  }
`;

export const GET_DELIVERY_USER_BY_UID = gql`
  query GetDeliveryUserByUid($uid: String!) {
    delivery_users(where: { uid: { _eq: $uid } }) {
      id
      uid
      name
      age
      phone
      contact_address
      status
    }
  }
`;

export const GET_DELIVERY_USER_BY_ID = gql`
  query GetDeliveryUserByid($id: uuid!) {
    delivery_users(where: { id: { _eq: $id } }) {
      id
      uid
      name
      age
      phone
      contact_address
      status
    }
  }
`;