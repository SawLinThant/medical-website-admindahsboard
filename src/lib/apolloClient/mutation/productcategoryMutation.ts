import { gql } from "@apollo/client";

export const CREATE_PRODUCT_CATEGORY = gql`
    mutation createProductCategory($name: String, $description: String, $image_url: String) {
        insert_categories_one(object: {name: $name, description: $description, image_url: $image_url}) {
            id
            name
            description
            image_url
        }
    }
`