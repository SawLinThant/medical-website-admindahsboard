
import { DELETE_SHOP_BY_ID } from "@/lib/apolloClient/mutation/shopMutation";
import { useMutation } from "@apollo/client";

interface DeleteShopVariables {
  id: string; 
}

interface DeleteShoptResponse {
  delete_shops_by_pk: {
    id: string;
    name: string;
  };
}

export const useDeleteShopById = () => {
  const [
    deleteShopMutation,
    { loading: loadingDeleteShop, error: errorDeleteShop },
  ] = useMutation<DeleteShoptResponse, DeleteShopVariables>(DELETE_SHOP_BY_ID);

  const deleteShopById = async (id: string) => {
    try {
      const response = await deleteShopMutation({
        variables: { id },
      });
      return response?.data?.delete_shops_by_pk;
    } catch (err) {
      console.error("Error deleting shop:", err);
      throw err;
    }
  };

  return { deleteShopById, loadingDeleteShop, errorDeleteShop };
};
