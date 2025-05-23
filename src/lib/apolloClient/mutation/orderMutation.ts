import { gql } from "@apollo/client";

export const UPDATE_ORDER_ITEMS_STATUS_FOR_SHOP = gql`
mutation UpdateOrderItemsStatusForShop($order_id: uuid!, $shop_id: uuid!, $status: String!) {
  update_order_items(
    where: { order_id: { _eq: $order_id }, shop_id: { _eq: $shop_id } },
    _set: { status: $status }
  ) {
    affected_rows
  }
}
`


export const UPDATE_ORDER_DELIVERY_USER = gql`
  mutation UpdateOrderDeliveryUser($id: uuid!, $delivery_user_id: uuid!) {
    update_orders_by_pk(pk_columns: { id: $id }, _set: { delivery_user_id: $delivery_user_id }) {
      id
      user_id
      status
      payment_id
      payment_proof
      total_price
      created_date
      updated_at
      shipping_address
      delivery_user_id
    }
  }
`;

export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($id: uuid!, $status: String!) {
    update_orders_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`;
