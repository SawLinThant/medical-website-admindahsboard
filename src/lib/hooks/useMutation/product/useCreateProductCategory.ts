import { CREATE_PRODUCT_CATEGORY } from "@/lib/apolloClient/mutation/productcategoryMutation";
import { useMutation } from "@apollo/client";

interface CreateProductCategoryVariables {
  name: string;
  description: string;
  image_url: string;
}

interface CreateProductCategoryResponse {
  insert_categories_one: {
    id: string;
    name: string;
    description: string;
    image_url: string;
  };
}

export const useCreateProductCategory = () => {
  const [
    createProductCategoryMutation,
    { loading: loadingCreateProductCategory, error: errorCreateProductCategory },
  ] = useMutation<CreateProductCategoryResponse, CreateProductCategoryVariables>(CREATE_PRODUCT_CATEGORY);

  const createProductCategory = async (variables: CreateProductCategoryVariables) => {
    try {
      const response = await createProductCategoryMutation({
        variables,
      });
      return response?.data?.insert_categories_one;
    } catch (err) {
      console.error("Error creating product category:", err);
      throw err;
    }
  };

  return { createProductCategory, loadingCreateProductCategory, errorCreateProductCategory };
}; 