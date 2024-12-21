import { useQuery } from "@apollo/client";
import { GET_TAGS, GET_TAGS_BY_PRODUCT_ID } from "../apolloClient/query/tagQuery";
import { GET_CATEGORY, GET_SHOP_CATEGORY } from "../apolloClient/query/categoryQuery";
import { GET_FILTERED_PRODUCTS, GET_PRODUCTS, GET_PRODUCTS_BY_ID } from "../apolloClient/query/productQuery";
import { useMemo, useState } from "react";
import { GET_PRICE_RANGE } from "../apolloClient/query/priceRangeQuery";
import { GET_IMAGES_BY_PRODUCT_ID } from "../apolloClient/query/productImageQuery";
import { InputTagOptionType } from "../types";

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


interface ShopCategoryResponse{
  id: string;
  name: string
}

export const useGetShopCategories = () => {
  const { data, loading: loadingShopCategories, error } = useQuery<{ shop_categories: ShopCategoryResponse[] }>(GET_SHOP_CATEGORY);
  const shopCategories = data?.shop_categories || [];
  return { shopCategories, loadingShopCategories, error };
};

interface Category {
  id: string
  name: string
}

interface Product {
  id: string;
  name: string;
  price: number;
  bulk_price?: number;
  quantity: number;
  description?: string;
  category_id: string;
  category: Category
}

interface GetProductsByIdResponse {
  products: Product[];
}

interface UseGetProductByIdReturn {
  product: Product | null;
  loadingProduct: boolean;
  error: Error | undefined;
  refetchProduct: any
}

export const useGetProductById = (id: string): UseGetProductByIdReturn => {
  const { data, loading: loadingProduct, error, refetch: refetchProduct } = useQuery<GetProductsByIdResponse>(
    GET_PRODUCTS_BY_ID,
    {
      variables: { id },
      skip: !id,
    }
  );

  const product = data?.products?.[0] || null;

  return { product, loadingProduct, error, refetchProduct };
};

interface Tag {
  id: string;
  tag_id: string;
  tag: {
    id: string
    name: string
  }
}

interface GetTagsByProductIdResponse {
  product_tags: Tag[];
}

interface UseGetTagsByProductIdReturn {
  tagsById: InputTagOptionType[];
  loadingTags: boolean;
  error: Error | undefined;
}

export const useGetTagsByProductId = (productId: string): UseGetTagsByProductIdReturn => {
  const { data, loading: loadingTags, error } = useQuery<GetTagsByProductIdResponse>(
    GET_TAGS_BY_PRODUCT_ID,
    {
      variables: { product_id: productId },
      skip: !productId,
    }
  );

  const tagsById: InputTagOptionType[] = data?.product_tags.map(tag => ({
    id: tag.tag.id,
    name: tag.tag.name,
  })) || [];

  return { tagsById, loadingTags, error };
};

interface Image {
  id: string;
  image_url: string;
}

interface GetImagesByProductIdResponse {
  images: Image[];
}

interface UseGetImagesByProductIdReturn {
  images: Image[];
  loadingImages: boolean;
  error: Error | undefined;
  refetchImage: any
}

export const useGetImagesByProductId = (productId: string): UseGetImagesByProductIdReturn => {
  const { data, loading: loadingImages, error, refetch: refetchImage } = useQuery<GetImagesByProductIdResponse>(
    GET_IMAGES_BY_PRODUCT_ID,
    {
      variables: { product_id: productId },
      skip: !productId, 
    }
  );

  const images = data?.images || [];

  return { images, loadingImages, error, refetchImage };
};