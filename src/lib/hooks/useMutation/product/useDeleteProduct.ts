import { DELETE_PRODUCT_BY_ID } from "@/lib/apolloClient/mutation/productMutation";
import { useMutation } from "@apollo/client";

interface DeleteProductVariables {
  id: string; 
}

interface DeleteProductResponse {
  delete_products_by_pk: {
    id: string;
    name: string;
  };
}

export const useDeleteProductById = () => {
  const [
    deleteProductMutation,
    { loading: loadingDeleteProduct, error: errorDeleteProduct },
  ] = useMutation<DeleteProductResponse, DeleteProductVariables>(DELETE_PRODUCT_BY_ID);

  const deleteProductById = async (id: string) => {
    try {
      const response = await deleteProductMutation({
        variables: { id },
      });
      return response?.data?.delete_products_by_pk;
    } catch (err) {
      console.error("Error deleting product:", err);
      throw err;
    }
  };

  return { deleteProductById, loadingDeleteProduct, errorDeleteProduct };
};
