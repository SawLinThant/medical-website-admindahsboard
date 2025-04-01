import { gql } from "@apollo/client";

export const CREATE_PRODUCT_TAG = gql`
    mutation createTag($name: String, $description: String) {
        insert_tags_one(object: {name: $name, description: $description}) {
            id
            name
            description
        }
    }
`