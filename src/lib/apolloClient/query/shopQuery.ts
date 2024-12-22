import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getShops {
    shops(order_by: { created_at: desc }) {
      id
      name
      logo
      category
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
      shop_category{
        id
        name
      }
    }
  }
`;