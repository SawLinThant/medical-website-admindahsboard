import { gql } from "@apollo/client";

export const UPDATE_NOTIFICATION_BY_ID = gql`
  mutation UpdateNotificationById(
    $id: uuid!
    $is_read: Boolean
  ) {
    update_notifications_by_pk(
      pk_columns: { id: $id }
      _set: {
        is_read: $is_read
      }
    ) {
      id
      is_read
    }
  }
`;