
import { DELETE_AD_BY_ID } from "@/lib/apolloClient/mutation/advertisementMutation";
import { useMutation } from "@apollo/client";

interface DeleteAdvertisementVariables {
  id: string; 
}

interface DeleteAdvertisementResponse {
  delete_advertisements_by_pk: {
    id: string;
    name: string;
  };
}

export const useDeleteAdvertisementById = () => {
  const [
    deleteAdvertisementMutation,
    { loading: loadingDeleteAdvertisement, error: errorDeleteAdvertisement },
  ] = useMutation<DeleteAdvertisementResponse, DeleteAdvertisementVariables>(DELETE_AD_BY_ID);

  const deleteAdvertisementById = async (id: string) => {
    try {
      const response = await deleteAdvertisementMutation({
        variables: { id },
      });
      return response?.data?.delete_advertisements_by_pk;
    } catch (err) {
      console.error("Error deleting advertisement:", err);
      throw err;
    }
  };

  return { deleteAdvertisementById, loadingDeleteAdvertisement, errorDeleteAdvertisement };
};
