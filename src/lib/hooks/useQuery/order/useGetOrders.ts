import { useQuery, useSubscription } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_SHOP_ORDERS,
  GET_ORDER_BY_ID,
  GET_ORDER_ITEMS_BY_ORDER_ID,
} from "@/lib/apolloClient/query/orderQuery";
import { GET_ORDERS_STREAMING_HISTORY_SUBSCRIPTION, GET_ORDERS_STREAMING_SUBSCRIPTION, SUBSCRIBE_ORDERS, SUBSCRIBE_SHOP_ORDERS } from "@/lib/apolloClient/subscription/order";

export interface Order {
  id: string;
  user_id: string;
  username: string;
  created_date: string;
  order_status: string;
  total_price: number;
  billing_address: string;
  delivery_address: string;
  billing_phone_no: string;
  total_items: number;
  shop_total_price: number;
  payment: string;
  status: string;
}

interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  subtotal: number;
  status: string;
  shop_id: string;
  product: {
    id: string;
    name: string;
    price: number;
    bulk_price?: number;
    quantity: number;
    description?: string;
    images: {
      id: string;
      image_url: string;
      product_id: string;
    }[];
  };
}

interface GetOrdersResponse {
  shop_orders: Order[];
  shop_orders_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

interface GetOrderByIdResponse {
  orders: {
    id: string;
    user_id: string;
    status: string;
    created_date: string;
    updated_at: string;
    total_price: number;
    payment_id: string;
    user: {
      id: string;
      username: string;
      email: string;
      phone: string;
      delivery_addresses: {
        firstname: string;
        lastname: string;
        address: string;
        phone: string;
        email: string;
      }[];
    };
  }[];
}

interface GetOrderItemsByOrderIdResponse {
  order_items: OrderItem[];
}

export const useGetOrders = () => {
  const [filters, setFilters] = useState<{
    shop_id?: string;
    status?: string;
    dateRange?: { start_date: string; end_date: string };
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};
    if (filters.shop_id) {
      conditions.shop_id = { _eq: filters.shop_id };
    }
    if (filters.status) {
      conditions.order_status = { _eq: filters.status };
    }
    if (filters.dateRange) {
      conditions.created_date = {
        _gte: filters.dateRange.start_date,
        _lte: filters.dateRange.end_date,
      };
    }

    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }, [filters]);

  const { data, loading, error } = useQuery<GetOrdersResponse>(GET_SHOP_ORDERS, {
    variables: {
      where,
      offset: skip,
      limit: take,
    },
    fetchPolicy: "network-only",
  });

  const orders = data?.shop_orders || [];
  const totalCount = data?.shop_orders_aggregate?.aggregate?.count || 1;

  return {
    orders,
    loading,
    error,
    filters,
    setFilters,
    page,
    setPage,
    take,
    setTake,
    totalCount,
  };
};

export const useGetOrderById = (id: string) => {
  const { data, loading, error } = useQuery<GetOrderByIdResponse>(GET_ORDER_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  const order = data?.orders[0] || null;

  return {
    order,
    loading,
    error,
  };
};

export const useGetOrderItemsByOrderId = (orderId: string) => {
  const { data, loading, error } = useQuery<GetOrderItemsByOrderIdResponse>(
    GET_ORDER_ITEMS_BY_ORDER_ID,
    {
      variables: { order_id: orderId },
      fetchPolicy: "network-only",
    }
  );

  const orderItems = data?.order_items || [];

  return {
    orderItems,
    loading,
    error,
  };
}; 

interface SubscribeShopOrdersResponse {
  shop_orders: Order[];
}

export const useSubscribeShopOrders = () => {
  const { data, loading, error } = useSubscription<SubscribeShopOrdersResponse>(SUBSCRIBE_SHOP_ORDERS, {
    fetchPolicy: "network-only",
  });

  const orders = data?.shop_orders || [];

  return {
    orders,
    loading,
    error,
  };
};

interface SubscribeOrdersResponse {
  orders: Order[];
}

export const useSubscribeOrders = () => {
  const { data, loading, error } = useSubscription<SubscribeOrdersResponse>(SUBSCRIBE_ORDERS, {
    fetchPolicy: "network-only",
  });

  const orders = data?.orders || [];
  console.log("hook orders", data);
  return {
    orders,
    loading,
    error,
  };
};

interface GetOrdersStreamingResponse {
  orders: Order[];
}

interface GetOrdersStreamingVariables {
  delivery_user_id: string;
}

export const useGetOrdersStreaming = (delivery_user_id: string) => {
  const { data, loading, error } = useSubscription<
    GetOrdersStreamingResponse,
    GetOrdersStreamingVariables
  >(GET_ORDERS_STREAMING_SUBSCRIPTION, {
    variables: { delivery_user_id },
    fetchPolicy: "no-cache",
    skip: !delivery_user_id,
  });

  const orders = useMemo(() => data?.orders || [], [data?.orders]);
  console.log("error", error);

  return {
    orders,
    loading,
    error,
  };
};

export const useGetOrdersHistoryStreaming = (delivery_user_id: string) => {
  const { data, loading, error } = useSubscription<
    GetOrdersStreamingResponse,
    GetOrdersStreamingVariables
  >(GET_ORDERS_STREAMING_HISTORY_SUBSCRIPTION, {
    variables: { delivery_user_id },
    fetchPolicy: "network-only",
    skip: !delivery_user_id,
  });

  const orders = useMemo(() => data?.orders || [], [data?.orders]);

  return {
    orders,
    loading,
    error,
  };
};