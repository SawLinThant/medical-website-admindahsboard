import { UPDATE_PRODUCT, UPDATE_PRODUCT_QUANTITY } from "@/lib/apolloClient/mutation/productMutation";
import { useMutation } from "@apollo/client";

interface UpdateProductVariables {
    id: string;
    name?: string;
    price?: number;
    bulk_price?: number;
    quantity?: number;
    description?: string;
    dosage?: string;
    usage?: string;
    storage?: string;
    category_id?: string;
    updated_at?: string;
  }
  
  interface UpdateProductResponse {
    update_products_by_pk: {
      id: string;
      name: string;
      price: number;
      bulk_price: number;
      quantity: number;
      description: string;
      category_id: string;
      updated_at: string;
    };
  }
  
  export const useUpdateProduct = () => {
    const [
      updateProductMutation,
      { loading: loadingUpdateProduct, error: errorUpdateProduct },
    ] = useMutation<UpdateProductResponse, UpdateProductVariables>(UPDATE_PRODUCT);
  
    const updateProduct = async (variables: UpdateProductVariables) => {
      try {
        const response = await updateProductMutation({
          variables,
        });
        return response?.data?.update_products_by_pk;
      } catch (err) {
        console.error("Error updating product:", err);
        throw err;
      }
    };
  
    return { updateProduct, loadingUpdateProduct, errorUpdateProduct };
  };
  
  export const useUpdateProductQuantity = () => {
    const [updateProduct, { loading, error, data }] = useMutation<UpdateProductResponse>(UPDATE_PRODUCT_QUANTITY);
  
    const handleUpdateProduct = async (id: string, defaultStock: number, quantity: any) => {
      try {
        const response = await updateProduct({
          variables: {
            id: id,
            input: { 
              quantity: quantity,
              default_stock_level: defaultStock
             },
          },
        });
        return response.data?.update_products_by_pk;
      } catch (err) {
        console.error("Error updating product:", err);
        throw err;
      }
    };
  
    return { handleUpdateProduct, loading, error, data };
  };