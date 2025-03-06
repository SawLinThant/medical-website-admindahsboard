import { gql } from "@apollo/client";

export const GET_SHOPS = gql`
  query getShops {
    shops(order_by: { created_at: desc }) {
      id
      name
      logo
      category_id
      description
      address
      phone
      category_id
      remark
      shop_admin_name
    }
  }
`;

export const GET_SHOP_BY_ID = gql`
  query getShopById($id: uuid!) {
    shops_by_pk(id: $id) {
      id
      name
      logo
      description
      address
      phone
      category_id
      remark
      shop_admin_name
      shop_category {
        id
        name
      }
    }
  }
`;

export const GET_FILTERED_SHOPS = gql`
  query getShops($where: shops_bool_exp, $offset: Int, $limit: Int) {
    shops(
      where: $where
      order_by: { created_at: desc }
      offset: $offset
      limit: $limit
    ) {
      id
      name
      logo
      description
      address
      phone
      category_id
      remark
      shop_admin_name
      shop_category {
        id
        name
      }
      products {
        order_items {
          created_at
          id
          quantity
          status
          price
        }
      }
    }
    shops_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_NESTED_FILTERED_SHOPS = gql`
  query getShops(
    $where: shops_bool_exp
    $orderItemWhere: order_items_bool_exp
    $offset: Int
    $limit: Int
  ) {
    shops(
      where: $where
      order_by: { created_at: desc }
      offset: $offset
      limit: $limit
    ) {
      id
      name
      logo
      description
      address
      phone
      category_id
      remark
      shop_admin_name
      shop_category {
        id
        name
      }
      products {
        order_items(where: $orderItemWhere) {
          created_at
          id
          quantity
          status
          price
        }
      }
    }
    shops_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
