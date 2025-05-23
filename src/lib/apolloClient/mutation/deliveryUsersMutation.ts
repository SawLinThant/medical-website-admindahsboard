import { gql } from "@apollo/client";

export const CREATE_DELIVERY_USERS = gql`
  mutation InsertDeliveryUsers(
    $age: Int
    $contact_address: String
    $name: String
    $phone: String
    $uid: String
  ) {
    insert_delivery_users(
      objects: {
        age: $age
        contact_address: $contact_address
        name: $name
        phone: $phone
        uid: $uid
      }
    ) {
      affected_rows
      returning {
        age
        contact_address
        name
        phone
        uid
        id
      }
    }
  }
`;

export const UPDATE_DELIVERY_USER = gql`
  mutation UpdateDeliveryUser(
    $id: uuid!
    $name: String!
    $uid: String!
    $age: Int!
    $phone: String!
    $contact_address: String!
    $status: String!
  ) {
    update_delivery_users_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        uid: $uid
        age: $age
        phone: $phone
        contact_address: $contact_address
        status: $status
      }
    ) {
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
