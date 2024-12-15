import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String
    $price: Int
    $bulk_price: Int
    $quantity: Int
    $description: String
    $shop_id: uuid
    $category_id: uuid
    $created_at: timestamptz
  ) {
    insert_products_one(
      object: {
        name: $name
        price: $price
        bulk_price: $bulk_price
        quantity: $quantity
        description: $description
        shop_id: $shop_id
        category_id: $category_id
        created_at: $created_at
      }
    ) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      description
      created_at
    }
  }
`;


export const CREATE_PRODUCT_TAG = gql`
  mutation createProductTag(
   $product_id: uuid
   $tag_id: uuid
  ) {
    insert_product_tags_one(
      object: {
        product_id: $product_id
        tag_id: $tag_id
      }
    ) {
      id
      product_id
      tag_id
    }
  }
`;

