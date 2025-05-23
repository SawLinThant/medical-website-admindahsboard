import { gql } from "@apollo/client";

export const SUBSCRIBE_DELIVERY_USERS = gql`
  subscription GetDeliveryUsersStreamingSubscription {
    delivery_users {
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