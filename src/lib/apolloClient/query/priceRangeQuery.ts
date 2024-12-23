import { gql } from "@apollo/client";

export const GET_PRICE_RANGE= gql`
  query getPriceRange {
    price_ranges(order_by: { start_price: asc }) {
      id
      start_price
      end_price
    }
  }
`;