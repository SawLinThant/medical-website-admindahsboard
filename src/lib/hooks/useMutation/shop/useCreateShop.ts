import { CREATE_SHOP } from "@/lib/apolloClient/mutation/shopMutation";
import { useMutation } from "@apollo/client";

interface CreateShopVaraibles {
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
  category_id: string;
  created_at: string;
  remark: string
  shop_admin_name: string
}

interface CreateShopResponse {
  insert_shops_one: {
    id: string;
    name: string;
    logo: string;
    description: string;
    address: string;
    phone: string;
    category_id: string;
    created_at: string;
    remark: string
    shop_admin_name: string
  };
}

export const useCreateShop = () => {
  const [
    createShopMutation,
    { loading: loadingCreteShop, error: errorCreateShop },
  ] = useMutation<CreateShopResponse, CreateShopVaraibles>(CREATE_SHOP);
  const createShop = async (variables: CreateShopVaraibles) => {
    try {
      const response = await createShopMutation({
        variables: {
          name: variables.name,
          logo: variables.logo,
          description: variables.description,
          address: variables.address,
          phone: variables.phone,
          category_id: variables.category_id,
          created_at: variables.created_at,
          remark: variables.remark,
          shop_admin_name: variables.shop_admin_name
        },
      });
      return response?.data?.insert_shops_one;
    } catch (err) {
      console.error("error creating user:", err);
      throw err;
    }
  };
  return { createShop, loadingCreteShop, errorCreateShop };
};
