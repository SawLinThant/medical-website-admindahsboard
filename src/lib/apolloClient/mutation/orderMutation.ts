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