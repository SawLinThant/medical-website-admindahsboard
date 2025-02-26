import { DELETE_AD_IMAGE } from "@/lib/apolloClient/mutation/advertisementMutation";
import { DELETE_IMAGE } from "@/lib/apolloClient/mutation/productMutation";
import { useMutation } from "@apollo/client";

interface DeleteImageVariables {
    id: string; 
  }
  
  interface DeleteImageResponse {
    delete_images_by_pk: {
      id: string;
      ad_id: string;
      url: string;
    };
  }
  
  export const useDeleteAdImageById = () => {
    const [
      deleteImageMutation,
      { loading: loadingDeleteAdImage, error: errorDeleteAdImage },
    ] = useMutation<DeleteImageResponse, DeleteImageVariables>(DELETE_AD_IMAGE);
  
    const deleteAdImageById = async (id: string) => {
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
  
    return { deleteAdImageById, loadingDeleteAdImage, errorDeleteAdImage };
  };
  