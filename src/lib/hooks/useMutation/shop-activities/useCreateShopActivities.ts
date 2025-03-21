import { CREATE_SHOP_ACTIVITY } from "@/lib/apolloClient/mutation/shopactivitiesMutation";
import { useMutation } from "@apollo/client";

interface ShopActivityInput {
    shop_id: string;
    activity: string;
    order_id?: string; 
    status: string;
    note?: string; 
    created_at?: string; 
  }
  
  interface CreateShopActivityResponse {
    insert_shop_activities: {
      affected_rows: number;
      returning: {
        id: string;
        shop_id: string;
        activity: string;
        order_id?: string;
        status: string;
        note?: string;
        created_at: string;
      }[];
    };
  }
  
  export const useCreateShopActivity = () => {
    const [
      createShopActivityMutation,
      { loading: loadingCreateShopActivity, error: errorCreateShopActivity },
    ] = useMutation<CreateShopActivityResponse, { input: ShopActivityInput[] }>(
      CREATE_SHOP_ACTIVITY
    );
  
    const createShopActivity = async (variables: ShopActivityInput) => {
      try {
        const response = await createShopActivityMutation({
          variables: {
            input: [variables], 
          },
        });
        return response?.data?.insert_shop_activities; 
      } catch (err) {
        console.error("Error creating shop activity:", err);
        throw err;
      }
    };
  
    return { 
      createShopActivity, 
      loadingCreateShopActivity, 
      errorCreateShopActivity 
    };
  };