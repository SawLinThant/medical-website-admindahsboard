import { gql } from "@apollo/client";

export const CREATE_ADVERTISEMENT = gql`
  mutation InsertAdvertisements(
    $name: String
    $status: String
    $budget: numeric
    $duration: String
    $shop_id: uuid
    $product_id: uuid
    $start_date: timestamptz
    $end_date: timestamptz
    $certification: String
    $approval_number: String
    $disclaimer: String
  ) {
    insert_advertisements(
      objects: {
        name: $name
        status: $status
        budget: $budget
        duration: $duration
        shop_id: $shop_id
        product_id: $product_id
        start_date: $start_date
        end_date: $end_date
        certification: $certification
        approval_number: $approval_number
        disclaimer: $disclaimer
      }
    ) {
      affected_rows
      returning {
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
    }
  }
`;

export const DELETE_AD_IMAGE = gql`
  mutation deleteAdImage($id: uuid!) {
    delete_ad_images_by_pk(id: $id) {
      id
      ad_id
      url
    }
  }
`;

export const UPDATE_ADVERTISEMENT_BY_ID = gql`
  mutation updateAdvertisement(
    $id: uuid!
    $name: String
    $status: String
    $budget: numeric
    $duration: String
    $shop_id: uuid
    $product_id: uuid
    $start_date: timestamptz
    $end_date: timestamptz
    $certification: String
    $approval_number: String
    $disclaimer: String
  ) {
    update_advertisements_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        status: $status
        budget: $budget
        duration: $duration
        shop_id: $shop_id
        product_id: $product_id
        start_date: $start_date
        end_date: $end_date
        certification: $certification
        approval_number: $approval_number
        disclaimer: $disclaimer
      }
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
  }
`;

export const DELETE_AD_BY_ID = gql`
  mutation deleteAdvertisement($id: uuid!) {
    delete_advertisements_by_pk(id: $id) {
      id
      name
    }
  }
`;
