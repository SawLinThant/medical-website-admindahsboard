import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_SHOP_ORDERS,
  GET_ORDER_BY_ID,
  GET_ORDER_ITEMS_BY_ORDER_ID,
} from "@/lib/apolloClient/query/orderQuery";

interface Order {
  order_id: string;
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