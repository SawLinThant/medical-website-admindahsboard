import { gql } from "@apollo/client";

export const GET_STOCK_HISTORIES = gql`
  query GetStockHistories($shop_id: uuid!, $product_id: uuid) {
    stock_histories(
      where: { 
        shop_id: { _eq: $shop_id },
        product_id: { _eq: $product_id } 
      }
    ) {
      id
      shop_id
      type
      reason
      product_id
      created_at
      stock_available
      adjusted_quantity
      shop {
        name
        shop_admin_name
      }
    }
  }
`;