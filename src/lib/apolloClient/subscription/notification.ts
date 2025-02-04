import { gql } from "@apollo/client";


export const GET_NOTIFICATIONS_BY_SHOP = gql`
  subscription GetNotificationsByShop($shop_id: uuid!) {
    notifications(where: { shop_id: { _eq: $shop_id } }) {
      id
      shop_id
      description
      created_at
      type
      order_id
      is_read
    }
  }
`;
