import { CREATE_SHOP_CATEGORY } from "@/lib/apolloClient/mutation/shopcategoryMutation";
import { useMutation } from "@apollo/client";

interface CreateShopCategoryVariables {
  name: string;
  description: string;
}

interface CreateShopCategoryResponse {
  insert_shop_categories_one: {
    id: string;
    name: string;
    description: string;
  };
}

export const useCreateShopCategory = () => {
  const [
    createShopCategoryMutation,
    { loading: loadingCreateShopCategory, error: errorCreateShopCategory },
  ] = useMutation<CreateShopCategoryResponse, CreateShopCategoryVariables>(CREATE_SHOP_CATEGORY);

  const createShopCategory = async (variables: CreateShopCategoryVariables) => {
    try {
      const response = await createShopCategoryMutation({
        variables,
      });
      return response?.data?.insert_shop_categories_one;
    } catch (err) {
      console.error("Error creating shop category:", err);
      throw err;
    }
  };

  return { createShopCategory, loadingCreateShopCategory, errorCreateShopCategory };
}; 