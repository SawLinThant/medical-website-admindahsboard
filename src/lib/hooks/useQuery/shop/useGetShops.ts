import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_FILTERED_SHOPS,
  GET_SHOP_BY_ID,
} from "@/lib/apolloClient/query/shopQuery";

interface ShopCategory {
  id: string;
  name: string;
}

interface OrderItem {
  created_at: string;
  id: string;
  quantity: number;
  status: string;
  price: number;
}

interface Shop {
  id: string;
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
  category_id: string;
  remark: string;
  shop_admin_name: string;
  shop_category: ShopCategory;
  products: {
    order_items: OrderItem[];
  }[];
}

interface GetShopsResponse {
  shops: Shop[];
  shops_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

interface GetShopByIdResponse {
  shops_by_pk: Shop;
}

export const useGetShops = () => {
  const [filters, setFilters] = useState<{
    name?: string;
    category_id?: string;
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};
    if (filters.name) {
      conditions.name = { _ilike: `%${filters.name}%` };
    }
    if (filters.category_id) {
      conditions.category_id = { _eq: filters.category_id };
    }

    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }, [filters]);

  const { data, loading, error } = useQuery<GetShopsResponse>(GET_FILTERED_SHOPS, {
    variables: {
      where,
      offset: skip,
      limit: take,
    },
    fetchPolicy: "network-only",
  });

  const shops = data?.shops || [];
  const totalCount = data?.shops_aggregate?.aggregate?.count || 1;

  return {
    shops,
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

export const useGetShopById = (id: string) => {
  const { data, loading, error } = useQuery<GetShopByIdResponse>(GET_SHOP_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  const shop = data?.shops_by_pk || null;

  return {
    shop,
    loading,
    error,
  };
}; 