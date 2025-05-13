import { gql } from "@apollo/client";

export const CREATE_CUPON = gql`
  mutation InsertCupons(
    $cupon_number: String
    $type: String
    $expired_date: timestamptz
    $value: float8
  ) {
    insert_cupons(
      objects: {
        cupon_number: $cupon_number
        type: $type
        expired_date: $expired_date
        value: $value
      }
    ) {
      affected_rows
      returning {
        value
        cupon_number
        type
        expired_date
        id
      }
    }
  }
`;
