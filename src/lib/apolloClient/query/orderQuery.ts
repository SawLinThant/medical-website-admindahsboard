import { gql } from "@apollo/client";

export const GET_SHOP_ORDERS = gql`
  query GetShopOrders($where: shop_orders_bool_exp, $offset: Int, $limit: Int) {
    shop_orders(where: $where, offset: $offset, limit: $limit) {
      order_id
      user_id
      username
      created_date
      order_status
      total_price
      billing_address
      shipping_address
      billing_phone_no
      total_items
      shop_total_price
      payment
    }
    shop_orders_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_ORDER_BY_ID = gql`
  query GetOrders($id: uuid!) {
    orders(where: { id: { _eq: $id } }) {
      id
      user_id
      status
      created_date
      updated_date
      total_price
      billing_address
      billing_phone_no
      payment_id
      user {
        id
        username
        email
        phone
      }
    }
  }
`;

export const GET_ORDER_ITEMS_BY_ORDER_ID = gql`
  query GetOrderItems($order_id: uuid!) {
    order_items(where: { order_id: { _eq: $order_id } }) {
      id
      order_id
      product_id
      quantity
      price
      subtotal
      status
      shop_id
      product {
        id
        name
        price
        bulk_price
        quantity
        description
        images{
          id
          image_url
          product_id

        }
      }
    }
  }
`;
