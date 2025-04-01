import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_CATEGORY,
  GET_SHOP_CATEGORY,
} from "@/lib/apolloClient/query/categoryQuery";

interface Category {
  id: string;
  name: string;
}

interface ShopCategory {
  id: string;
  name: string;
}

interface GetCategoriesResponse {
  categories: Category[];
}

interface GetShopCategoriesResponse {
  shop_categories: ShopCategory[];
}

export const useGetCategories = () => {
  const { data, loading, error } = useQuery<GetCategoriesResponse>(GET_CATEGORY, {
    fetchPolicy: "network-only",
  });

  const categories = data?.categories || [];

  return {
    categories,
    loading,
    error,
  };
};

export const useGetShopCategories = () => {
  const { data, loading, error } = useQuery<GetShopCategoriesResponse>(GET_SHOP_CATEGORY, {
    fetchPolicy: "network-only",
  });

  const shopCategories = data?.shop_categories || [];

  return {
    shopCategories,
    loading,
    error,
  };
}; 