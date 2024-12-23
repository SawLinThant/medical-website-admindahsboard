import { CREATE_PRODUCT } from "@/lib/apolloClient/mutation/productMutation";
import { useMutation } from "@apollo/client";

interface CreateProductVariables {
    name: string;
    price: number;
    bulk_price: number;
    quantity: number;
    description: string;
    shop_id: string;
    category_id: string;
    created_at: string;
  }
  
  interface CreateProductResponse {
    insert_products_one: {
      id: string;
      name: string;
      price: number;
      bulk_price: number;
      quantity: number;
      description: string;
      shop_id: string;
      category_id: string;
      created_at: string;
    };
  }
  
  export const useCreateProduct = () => {
    const [
      createProductMutation,
      { loading: loadingCreateProduct, error: errorCreateProduct },
    ] = useMutation<CreateProductResponse, CreateProductVariables>(CREATE_PRODUCT);
  
    const createProduct = async (variables: CreateProductVariables) => {
      try {
        const response = await createProductMutation({
          variables,
        });
        return response?.data?.insert_products_one;
      } catch (err) {
        console.error("Error creating product:", err);
        throw err;
      }
    };
  
    return { createProduct, loadingCreateProduct, errorCreateProduct };
  };