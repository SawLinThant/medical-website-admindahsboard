import { DELETE_IMAGE } from "@/lib/apolloClient/mutation/productMutation";
import { useMutation } from "@apollo/client";

interface DeleteImageVariables {
    id: string; 
  }
  
  interface DeleteImageResponse {
    delete_images_by_pk: {
      id: string;
      product_id: string;
      image_url: string;
    };
  }
  
  export const useDeleteImageById = () => {
    const [
      deleteImageMutation,
      { loading: loadingDeleteImage, error: errorDeleteImage },
    ] = useMutation<DeleteImageResponse, DeleteImageVariables>(DELETE_IMAGE);
  
    const deleteImageById = async (id: string) => {
      try {
        const response = await deleteImageMutation({
          variables: { id },
        });
        return response?.data?.delete_images_by_pk;
      } catch (err) {
        console.error("Error deleting image:", err);
        throw err;
      }
    };
  
    return { deleteImageById, loadingDeleteImage, errorDeleteImage };
  };
  