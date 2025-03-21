import { gql } from "@apollo/client";

export const CREATE_SHOP_ACTIVITY = gql`
 mutation InsertShopActivity($input: [shop_activities_insert_input!]!) {
    insert_shop_activities(objects: $input) {
      affected_rows
    }
  }
`;
