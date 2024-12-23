import { DELETE_SHOP_IMAGE } from "@/lib/apolloClient/mutation/shopMutation";
import { useMutation } from "@apollo/client";

interface DeleteImageVariables {
    id: string; 
  }
  
  interface DeleteImageResponse {
    delete_shop_images_by_pk: {
      id: string;
      shop_id: string;
      image_url: string;
    };
  }
  
  export const useDeleteShopImageById = () => {
    const [
      deleteImageMutation,
      { loading: loadingDeleteImage, error: errorDeleteImage },
    ] = useMutation<DeleteImageResponse, DeleteImageVariables>(DELETE_SHOP_IMAGE);
  
    const deleteImageById = async (id: string) => {
      try {
        const response = await deleteImageMutation({
          variables: { id },
        });
        return response?.data?.delete_shop_images_by_pk;
      } catch (err) {
        console.error("Error deleting image:", err);
        throw err;
      }
    };
  
    return { deleteImageById, loadingDeleteImage, errorDeleteImage };
  };
  