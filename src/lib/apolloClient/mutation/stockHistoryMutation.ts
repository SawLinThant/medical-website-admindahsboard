import { gql } from "@apollo/client";

export const CREATE_STOCK_HISTORY = gql`
  mutation InsertStockHistories(
    $reason: String
    $type: String
    $product_id: uuid
    $shop_id: uuid
    $stock_available: Int
    $adjusted_quantity: Int
  ) {
    insert_stock_histories(
      objects: {
        reason: $reason
        type: $type
        product_id: $product_id
        shop_id: $shop_id
        stock_available: $stock_available
        adjusted_quantity: $adjusted_quantity
      }
    ) {
      affected_rows
      returning {
        reason
        type
        id
        product_id
        shop_id
        stock_available
        adjusted_quantity
      }
    }
  }
`;
