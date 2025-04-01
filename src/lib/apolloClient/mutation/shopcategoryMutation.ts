import { gql } from "@apollo/client";

export const CREATE_SHOP_CATEGORY = gql`
    mutation createShopCategory($name: String, $description: String) {
        insert_shop_categories_one(object: {name: $name, description: $description}) {
            id
            name
            description
        }
    }
`
