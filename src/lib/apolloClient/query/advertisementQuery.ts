import { gql } from "@apollo/client";

export const GET_FILTERED_ADVERTISEMENT = gql`
  query getFilteredAdvertisements(
    $where: advertisements_bool_exp
    $offset: Int
    $limit: Int
  ) {
    advertisements(
      where: $where
      order_by: { start_date: desc }
      offset: $offset
      limit: $limit
    ) {
      id
      name
      status
      budget
      start_date
      end_date
      duration
      shop_id
      product_id
      certification
      approval_number
      disclaimer
    }
    advertisements_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_ADVERTISEMENT_BY_ID = gql`
  query getAdvertisements($id: uuid!) {
    advertisements(where: { id: { _eq: $id } }) {
      id
      name
      status
      budget
      start_date
      end_date
      duration
      shop_id
      product_id
      certification
      approval_number
      disclaimer
      shop{
       name
      }
       product{
         name
       }
      ad_images{
        id
        ad_id
        url
      }
    }
  }
`;
