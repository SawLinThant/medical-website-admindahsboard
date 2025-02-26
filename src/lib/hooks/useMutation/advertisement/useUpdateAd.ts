import { UPDATE_ADVERTISEMENT_BY_ID } from "@/lib/apolloClient/mutation/advertisementMutation";
import { Advertisements } from "@/lib/types";
import { useMutation } from "@apollo/client";

interface UpdateAdvertisementVariables {
    id: string;
    name?: string;
    status?: string;
    budget?: number;
    duration?: string;
    shop_id?: string;
    product_id?: string;
    certification?: string;
    start_date?: string;
    end_date?: string;
    approval_number?: string;
    disclaimer?: string;
  }
  
  interface UpdateAdvertisementResponse {
    update_advertisements_by_pk: Advertisements;
  }
  
  export const useUpdateAdvertisementById = () => {
    const [updateAdvertisementMutation, { loading: loadingUpdate, error: errorUpdate }] = useMutation<UpdateAdvertisementResponse, UpdateAdvertisementVariables>(UPDATE_ADVERTISEMENT_BY_ID);
  
    const updateAdvertisement = async (variables: UpdateAdvertisementVariables) => {
      try {
        const response = await updateAdvertisementMutation({
          variables,
        });
        return response?.data?.update_advertisements_by_pk || null;
      } catch (error) {
        console.error("Error updating advertisement:", error);
        throw error;
      }
    };
  
    return { updateAdvertisement, loadingUpdate, errorUpdate };
  };