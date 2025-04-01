import { gql } from "@apollo/client";

export const GET_ANNOUCEMENTS = gql`
  query getAnnoucements($where: announcements_bool_exp, $offset: Int, $limit: Int) {
    announcements(where: $where, order_by: { created_at: desc }, offset: $offset, limit: $limit) {
        attachment
		description
		subject
		created_at
		id
    }
    announcements_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;