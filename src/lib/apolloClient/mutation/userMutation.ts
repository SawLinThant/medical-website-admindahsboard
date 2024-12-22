import { gql } from "@apollo/client";

export const UPDATE_USER_BY_SHOP_ID = gql`
  mutation updateUserByShopId(
    $shop_id: uuid!
    $username: String
    $email: String
    $phone: String
    $role: String
    $updated_at: timestamptz
  ) {
    update_users(
      where: { shop_id: { _eq: $shop_id } }
      _set: {
        username: $username
        email: $email
        phone: $phone
        role: $role
        updated_at: $updated_at
      }
    ) {
      returning {
        id
        username
        email
        phone
        role
        updated_at
      }
    }
  }
`;
