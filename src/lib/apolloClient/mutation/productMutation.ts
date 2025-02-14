import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String
    $price: Int
    $bulk_price: Int
    $quantity: Int
    $description: String
    $dosage: String
    $usage: String
    $storage: String
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
        dosage: $dosage
        usage: $usage
        storage: $storage
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
  mutation createProductTag($product_id: uuid, $tag_id: uuid) {
    insert_product_tags_one(
      object: { product_id: $product_id, tag_id: $tag_id }
    ) {
      id
      product_id
      tag_id
    }
  }
`;

export const DELETE_PRODUCT_TAG = gql`
  mutation DeleteProductTag($product_id: uuid!, $tag_id: uuid!) {
    delete_product_tags(
      where: { product_id: { _eq: $product_id }, tag_id: { _eq: $tag_id } }
    ) {
      affected_rows
    }
  }
`;

export const CREATE_IMAGE = gql`
  mutation createImage($product_id: uuid, $image_url: String) {
    insert_images_one(
      object: { product_id: $product_id, image_url: $image_url }
    ) {
      id
      product_id
      image_url
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation deleteImage($id: uuid!) {
    delete_images_by_pk(id: $id) {
      id
      product_id
      image_url
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: uuid!
    $name: String
    $price: Int
    $bulk_price: Int
    $quantity: Int
    $description: String
    $dosage: String
    $usage: String
    $storage: String
    $category_id: uuid
    $updated_at: timestamptz
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        price: $price
        bulk_price: $bulk_price
        quantity: $quantity
        description: $description
        dosage: $dosage
        usage: $usage
        storage: $storage
        category_id: $category_id
        updated_at: $updated_at
      }
    ) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      description
      updated_at
    }
  }
`;

export const DELETE_PRODUCT_BY_ID = gql`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const UPDATE_PRODUCT_QUANTITY = gql`
  mutation updateProduct($id: uuid!, $input: products_set_input!) {
    update_products_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      updated_at
    }
  }
`;

