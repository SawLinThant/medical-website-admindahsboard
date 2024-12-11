import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query getCards {
    cards (order_by: { created_at: desc }){
      id
      card_number
      card_password
      created_at
      updated_at
      disabled
      balance
      customer{
        id
        name
      }
    }
  }
`;