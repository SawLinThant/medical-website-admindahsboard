import { CREATE_PRODUCT_TAG } from "@/lib/apolloClient/mutation/producttagMutation";
import { useMutation } from "@apollo/client";

interface CreateProductTagVariables {
  name: string;
  description: string;
}

interface CreateProductTagResponse {
  insert_tags_one: {
    id: string;
    name: string;
    description: string;
  };
}

export const useCreateProductTag = () => {
  const [
    createProductTagMutation,
    { loading: loadingCreateProductTag, error: errorCreateProductTag },
  ] = useMutation<CreateProductTagResponse, CreateProductTagVariables>(CREATE_PRODUCT_TAG);

  const createProductTag = async (variables: CreateProductTagVariables) => {
    try {
      const response = await createProductTagMutation({
        variables,
      });
      return response?.data?.insert_tags_one;
    } catch (err) {
      console.error("Error creating product tag:", err);
      throw err;
    }
  };

  return { createProductTag, loadingCreateProductTag, errorCreateProductTag };
}; 