import { gql } from "@apollo/client";

export const CREATE_ANNOUNCEMENT = gql`
  mutation CreateAnnouncement($subject: String!, $description: String!, $attachment: String!, $shop_id: uuid, $type: String!) {
    insert_announcements_one(object: {subject: $subject, description: $description, attachment: $attachment, shop_id: $shop_id, type: $type}) {
      id
      subject
      description
      attachment
      shop_id
    }
  }
`;