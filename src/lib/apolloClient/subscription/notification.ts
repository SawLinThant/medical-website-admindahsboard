import { gql } from "@apollo/client";


export const GET_NOTIFICATIONS = gql`
  subscription GetNotificationsByShop($where: notifications_bool_exp, $offset: Int, $limit: Int) {
    notifications(where: $where, order_by: { created_at: desc }, offset: $offset, limit: $limit) {
      id
      shop_id
      description
      created_at
      type
      sender
      title
      annoucement_id
      order_id
      is_read
    }
  }
`;

export const GET_NOTIFICATIONS_COUNT = gql`
  query GetNotificationsCount($where: notifications_bool_exp) {
    notifications_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_SHOP_NOTIFICATION_BY_ID = gql`
  query GetShopNotificationById($id: uuid!) {
    notifications_by_pk(id: $id) {
      id
      shop_id
      description
      created_at
      type
      sender
      title
      annoucement_id
      order_id
      is_read
    }
  }
`;
