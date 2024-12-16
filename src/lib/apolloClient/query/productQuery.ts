import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query getCards {
    cards(order_by: { created_at: desc }) {
      id
      card_number
      card_password
      created_at
      updated_at
      disabled
      balance
      customer {
        id
        name
      }
    }
  }
`;

export const GET_FILTERED_PRODUCTS = gql`
  query getFilteredProducts($where: products_bool_exp) {
  products(where: $where, order_by: { created_at: desc }) {
    id
    name
    price
    quantity
    category {
      id
      name
    }
      images {
        id
        image_url
        product_id
        product {
        id
          name
        }
      }
  }
}
`;
