import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { NoificationType } from "../types";
import { GET_NOTIFICATIONS, GET_NOTIFICATIONS_COUNT, GET_SHOP_NOTIFICATION_BY_ID } from "../apolloClient/subscription/notification";
import { useMemo, useState } from "react";
import { UPDATE_NOTIFICATION_BY_ID } from "../apolloClient/mutation/notificationMutation";

interface GetNotificationsByShopResponse {
  notifications: NoificationType[];
}

interface GetNotificationsCountResponse {
  notifications_aggregate: { aggregate: { count: number } };
}

interface GetShopNotificationByIdResponse {
  notifications_by_pk: NoificationType | null;
}

interface UpdateNotificationByIdResponse {
  update_notifications_by_pk: NoificationType | null;
}

interface UseUpdateNotificationByIdReturn {
  updateNotification: (variables: {
    id: string;
    description?: string;
    title?: string;
    type?: string;
    annoucement_id?: string;
    order_id?: string;
    shop_id?: string;
    sender?: string;
    is_read?: boolean;
    created_at?: string;
  }) => Promise<NoificationType | null>;
  loading: boolean;
  error: Error | undefined;
}

interface UseGetNotificationsByShopReturn {
  notifications: NoificationType[];
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
  take: number;
  setTake: (take: number) => void;
  filters: { shop_id?: string; type?: string };
  setFilters: (filters: { shop_id?: string; type?: string; is_read?: boolean; id?: string; created_at?: { _gte?: string; _lte?: string }; }) => void;
  loadingNotifications: boolean;
  error: Error | undefined;
}

export const useGetNotificationsByShop = (
  shop_id: string,
  offset: number = 0,
  limit: number = 10
): UseGetNotificationsByShopReturn => {
  const [filters, setFilters] = useState<{ 
    shop_id?: string; 
    type?: string; 
    is_read?: boolean;
    description?: string;
    created_at?: { _gte?: string; _lte?: string };
  }>({  });
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);
  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const staticCondition = {
      _or: [
        {
          _and: [
            { shop_id: { _eq: shop_id } },
            { type: { _eq: "order" } },
          ],
        },
        { type: { _neq: "order" } },
      ],
    };

    const dynamicConditions: any = {};
    if (filters.shop_id) {
      if (Array.isArray(filters.shop_id)) {
        dynamicConditions.shop_id = { _in: filters.shop_id };
      } else {
        dynamicConditions.shop_id = { _eq: filters.shop_id };
      }
    }
    if (filters.type) {
      dynamicConditions.type = { _eq: filters.type };
    }
    if (filters.is_read !== undefined) {
      dynamicConditions.is_read = { _eq: filters.is_read };
    }
    if (filters.description) {
      dynamicConditions.description = { _ilike: `%${filters.description}%` };
    }
    if (filters.created_at) {
      dynamicConditions.created_at = filters.created_at; 
    }

    const hasDynamicFilters = Object.keys(dynamicConditions).length > 0;
    if (hasDynamicFilters) {
      return {
        _and: [staticCondition, dynamicConditions], 
      };
    }
    return staticCondition; 
  }, [filters, shop_id]);
  const {
    data: subscriptionData,
    loading: loadingNotifications,
    error: subscriptionError,
  } = useSubscription<GetNotificationsByShopResponse>(GET_NOTIFICATIONS, {
    variables: {
      where: where,
      offset: skip,
      limit: take,
    },
  });

  const {
    data: countData,
    loading: loadingCount,
    error: countError,
  } = useQuery<GetNotificationsCountResponse>(GET_NOTIFICATIONS_COUNT, {
    variables: { where: where },
  });

  const notifications = subscriptionData?.notifications || [];
  const totalCount = countData?.notifications_aggregate?.aggregate?.count || 0;
  const error = subscriptionError || countError; 

  return {
    notifications,
    totalCount,
    loadingNotifications: loadingNotifications || loadingCount,
    error,
    page,
    setPage,
    take,
    setTake,
    filters,    
    setFilters,
  };
};

interface UseGetNotificationByIdReturn {
  notification: NoificationType | null;
  loading: boolean;
  error: Error | undefined;
}

export const useGetNotificationById = (id: string): UseGetNotificationByIdReturn => {
  const { data, loading, error } = useQuery<GetShopNotificationByIdResponse>(
    GET_SHOP_NOTIFICATION_BY_ID,
    {
      variables: { id },
    }
  );

  const notification = data?.notifications_by_pk || null;

  return {
    notification,
    loading,
    error,
  };
};

export const useUpdateNotificationById = (): UseUpdateNotificationByIdReturn => {
  const [mutate, { loading, error }] = useMutation<UpdateNotificationByIdResponse>(
    UPDATE_NOTIFICATION_BY_ID
  );

  const updateNotification = async (variables: {
    id: string;
    is_read?: boolean;
  }) => {
    const { data } = await mutate({
      variables,
    });
    return data?.update_notifications_by_pk || null;
  };

  return {
    updateNotification,
    loading,
    error,
  };
};

