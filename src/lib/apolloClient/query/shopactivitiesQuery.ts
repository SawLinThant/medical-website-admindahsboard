import { gql } from "@apollo/client";

export const GET_FILTERED_SHOP_ACTIVITIES = gql`
  query getFilteredShopActivities(
    $where: shop_activities_bool_exp
    $offset: Int
    $limit: Int
  ) {
    shop_activities(where: $where, offset: $offset, limit: $limit) {
      activity
      note
      status
      id
      order_id
      shop_id
      created_at
      shop{
        name
      }
    }
    shop_activities_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
