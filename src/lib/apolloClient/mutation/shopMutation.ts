import { gql } from "@apollo/client";

export const CREATE_SHOP = gql`
  mutation createShop(
   $name: String
   $logo: String
   $description: String
   $address: String
   $phone: String
   $category_id: uuid
   $created_at: timestamptz
   $remark: String
   $shop_admin_name: String
  ) {
    insert_shops_one(
      object: {
        name: $name
        logo: $logo
        description: $description
        address: $address
        phone: $address
        category_id: $category_id
        created_at: $created_at
        remark: remark
        shop_admin_name: $shop_admin_name
      }
    ) {
      id
      name
      logo
      description
      address
      phone
      category_id
      created_at
      remark
      shop_admin_name
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
    $shop_id: uuid!
  ) {
    insert_users_one(
      object: {
        username: $username
        email: $email
        password: $password
        role: $role
        shop_id: $shop_id
      }
    ) {
      id
      username
      email
      role
      shop_id
    }
  }
`;

export const CREATE_SHOP_IMAGES = gql`
  mutation createShopImages(
   $image_url: String
   $shop_id: uuid
  ) {
    insert_shop_images_one(
      object: {
        image_url: $image_url
        shop_id: $shop_id
      }
    ) {
      id
      image_url
      shop_id
    }
  }
`;

export const UPDATE_SHOP_BY_ID = gql`
  mutation updateShopById(
    $id: uuid!
    $name: String
    $logo: String
    $description: String
    $address: String
    $phone: String
    $category_id: uuid
    $remark: String
    $shop_admin_name: String
  ) {
    update_shops_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        logo: $logo
        description: $description
        address: $address
        phone: $phone
        category_id: $category_id
        remark: $remark
        shop_admin_name: $shop_admin_name
      }
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
    }
  }
`;

export const DELETE_SHOP_IMAGE = gql`
  mutation deleteImage($id: uuid!) {
    delete_shop_images_by_pk(id: $id) {
      id
      shop_id
      image_url
    }
  }
`;

export const DELETE_SHOP_BY_ID = gql`
  mutation deleteShop($id: uuid!) {
    delete_shops_by_pk(id: $id) {
      id
      name
    }
  }
`;