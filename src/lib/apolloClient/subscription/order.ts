import { gql } from "@apollo/client";

export const SUBSCRIBE_SHOP_ORDERS = gql`
  subscription SubscribeShopOrders {
    shop_orders(where: { order_status: { _eq: "Pending" } }) {
      order_id
      user_id
      username
      created_date
      order_status
      total_price
      billing_address
      delivery_address
      billing_phone_no
      total_items
      shop_total_price
      payment
    }
  }
`;

export const SUBSCRIBE_ORDERS = gql`
  subscription SubscribeShopOrders {
    orders(where: { status: { _eq: "Pending" } }) {
      status
      total_price
      payment_proof
      shipping_address
      created_date
      updated_at
      delivery_user_id
      id
      payment_id
      user_id
    }
  }
`;

export const GET_ORDERS_STREAMING_SUBSCRIPTION = gql`
  subscription GetOrdersStreamingSubscription($delivery_user_id: uuid!) {
    orders(
      where: {
        delivery_user_id: { _eq: $delivery_user_id }
        status: { _in: ["Pending", "Delivering", "Picking Up Order"] }
      }
    ) {
      status
      total_price
      payment_proof
      shipping_address
      created_date
      updated_at
      delivery_user_id
      id
      payment_id
      user_id
    }
  }
`;

export const GET_ORDERS_STREAMING_HISTORY_SUBSCRIPTION = gql`
  subscription GetOrdersStreamingSubscription($delivery_user_id: uuid!) {
    orders(
      where: {
        delivery_user_id: { _eq: $delivery_user_id }
        status: { _in: ["Cancelled", "Complete"] }
      }
    ) {
      status
      total_price
      payment_proof
      shipping_address
      created_date
      updated_at
      delivery_user_id
      id
      payment_id
      user_id
    }
  }
`;

