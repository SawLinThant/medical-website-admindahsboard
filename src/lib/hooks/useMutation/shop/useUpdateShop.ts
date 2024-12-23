import { UPDATE_SHOP_BY_ID } from "@/lib/apolloClient/mutation/shopMutation";
import { useMutation } from "@apollo/client";

interface UpdateShopByIdVariables {
    id: string;
    name?: string;
    logo?: string;
    category?: string;
    description?: string;
    address?: string;
    phone?: string;
    category_id?: string;
    remark?: string;
    shop_admin_name?: string;
  }

  interface Shop {
    id: string;
    name: string;
    logo: string;
    description: string;
    address: string;
    phone: string;
    category_id: string;
    remark: string;
    shop_admin_name: string;
  }
  
  interface UpdateShopByIdResponse {
    update_shops_by_pk: Shop;
  }
  
  export const useUpdateShopById = () => {
    const [updateShopByIdMutation, { loading: loadingUpdateShop, error: errorUpdateShop }] = useMutation<
      UpdateShopByIdResponse,
      UpdateShopByIdVariables
    >(UPDATE_SHOP_BY_ID);
  
    const updateShopById = async (variables: UpdateShopByIdVariables) => {
      try {
        const response = await updateShopByIdMutation({
          variables,
        });
        return response?.data?.update_shops_by_pk;
      } catch (err) {
        console.error("Error updating shop by ID:", err);
        throw err;
      }
    };
  
    return { updateShopById, loadingUpdateShop, errorUpdateShop };
  };
  