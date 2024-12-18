import { useQuery } from "@apollo/client";
import { GET_TAGS } from "../apolloClient/query/tagQuery";
import { GET_CATEGORY } from "../apolloClient/query/categoryQuery";
import { GET_FILTERED_PRODUCTS, GET_PRODUCTS } from "../apolloClient/query/productQuery";
import { useMemo, useState } from "react";
import { GET_PRICE_RANGE } from "../apolloClient/query/priceRangeQuery";

export const useGetTags = () => {
  const { data, loading: loadingTags, error } = useQuery(GET_TAGS);
  const tags = data?.tags || [];
  return { tags, loadingTags, error };
};

export const useGetCategories = () => {
  const { data, loading: loadingCategories, error } = useQuery(GET_CATEGORY);
  const categories = data?.categories || [];
  return { categories, loadingCategories, error };
};

export const useGetAllProducts = () => {
  const {
    data,
    loading:loadingTotalProduct,
    error: fetchTotalProductError,
  } = useQuery(GET_PRODUCTS);
  const totalProducts = data?.products || [];
  const productCount = totalProducts.length;
  return {totalProducts,loadingTotalProduct,fetchTotalProductError,productCount}
};

export const useGetProducts = () => {
  const [filters, setFilters] = useState<{
    name?: string;
    category?: string;
    priceRange?: { start_price: number; end_price: number };
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};

    if (filters.name) {
      conditions.name = { _ilike: `%${filters.name}%` };
    }
    if (filters.category) {
      conditions.category = { id: { _eq: filters.category } };
    }
    if (filters.priceRange) {
      conditions.price = {
        _gte: filters.priceRange.start_price,
        _lte: filters.priceRange.end_price,
      };
    }


    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }, [filters]);

  const { data, loading, error } = useQuery(GET_FILTERED_PRODUCTS, {
    variables: {
      where,
      offset: skip,
      limit: take,
    },
    fetchPolicy: "network-only",
  });

  const products = data?.products || [];
  const totalCount = data?.products_aggregate?.aggregate?.count || 1;

  return {
    products,
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

export const useGetRanges = () => {
  const { data, loading: loadingPriceRange, error } = useQuery(GET_PRICE_RANGE);
  const priceRanges = data?.price_ranges || [];
  return { priceRanges , loadingPriceRange, error };
};