import { useSubscription } from "@apollo/client";
import { GET_NOTIFICATIONS_BY_SHOP } from "../apolloClient/subscription/notification";
import { NoificationType } from "../types";

interface GetNotificationsByShopResponse {
    notifications: NoificationType[];
  }
  
  interface UseGetNotificationsByShopReturn {
    notifications: NoificationType[];
    loadingNotifications: boolean;
    error: Error | undefined;
  }
  
  export const useGetNotificationsByShop = (shop_id: string): UseGetNotificationsByShopReturn => {
    const { data, loading: loadingNotifications, error } = useSubscription<GetNotificationsByShopResponse>(
      GET_NOTIFICATIONS_BY_SHOP,
      {
        variables: { shop_id},
      }
    );
  
    const notifications = data?.notifications || [];
  
    return { notifications, loadingNotifications, error };
  };