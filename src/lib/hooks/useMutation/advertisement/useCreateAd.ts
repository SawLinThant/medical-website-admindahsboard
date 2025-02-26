import { useMutation } from "@apollo/client";
import { CREATE_ADVERTISEMENT } from "@/lib/apolloClient/mutation/advertisementMutation";

interface CreateAdvertisementVariables {
  name?: string;
  status?: string;
  budget?: number;
  duration?: string;
  image_url?: string;
  video_url?: string;
  start_date?: string;
  end_date?: string;
  shop_id?: string;
  product_id?: string;
  certification?: string;
  approval_number?: string;
  disclaimer?: string;
}

interface CreateAdvertisementResponse {
  insert_advertisements: {
    affected_rows: number;
    returning: {
      id: string;
      name: string;
      status: boolean;
      budget: number;
      start_date?: string;
      end_date?: string;
      duration: string;
      image_url?: string;
      video_url?: string;
      shop_id: string;
      product_id?: string;
      certification?: string;
      approval_number?: string;
      disclaimer?: string;
    }[];
  };
}

export const useCreateAdvertisement = () => {
  const [
    createAdvertisementMutation,
    { loading: loadingCreateAdvertisement, error: errorCreateAdvertisement },
  ] = useMutation<CreateAdvertisementResponse, CreateAdvertisementVariables>(CREATE_ADVERTISEMENT);

  const createAdvertisement = async (variables: CreateAdvertisementVariables) => {
    try {
      const response = await createAdvertisementMutation({
        variables,
      });
      return response?.data?.insert_advertisements?.returning[0];
    } catch (err) {
      console.error("Error creating advertisement:", err);
      throw err;
    }
  };

  return { createAdvertisement, loadingCreateAdvertisement, errorCreateAdvertisement };
};
