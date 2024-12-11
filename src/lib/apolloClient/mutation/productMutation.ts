import { gql } from "@apollo/client";

export const CREATE_CARD = gql`
  mutation createProduct(
    $name: String
    $category: String
    $image_url: String
    $price: integer
    $bulk_price: integer
    $quantity: integer
    $description: String
    $tag: String
  ) {
    insert_cards_one(
      object: {
        card_number: $card_number
        card_password: $card_password
      }
    ) {
      card_number
      card_password
      created_at
      updated_at
      disabled
      balance
    }
  }
`;