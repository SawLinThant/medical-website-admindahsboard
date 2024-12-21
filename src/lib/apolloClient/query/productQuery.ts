import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    cards(order_by: { created_at: desc }) {
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

export const GET_PRODUCTS_BY_ID = gql`
  query getProducts($id: uuid!) {
    products(where: { id: { _eq: $id } }) {
      id
      name
      price
      bulk_price
      quantity
      description
      category_id
      category{
        id
        name
      }
    }
  }
`;

export const GET_FILTERED_PRODUCTS = gql`
  query getFilteredProducts($where: products_bool_exp, $offset: Int, $limit: Int) {
    products(where: $where, order_by: { created_at: desc }, offset: $offset, limit: $limit) {
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
    products_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;


