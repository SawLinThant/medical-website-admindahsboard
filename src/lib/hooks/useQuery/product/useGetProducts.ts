import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_FILTERED_PRODUCTS,
  GET_FILTERED_PRODUCTS_DROPDOWN,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_ID,
} from "@/lib/apolloClient/query/productQuery";
import { GET_IMAGES_BY_PRODUCT_ID } from "@/lib/apolloClient/query/productImageQuery";
import { GET_TAGS_BY_PRODUCT_ID } from "@/lib/apolloClient/query/tagQuery";
import { InputTagOptionType } from "@/lib/types";

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  bulk_price?: number;
  quantity: number;
  description?: string;
  category_id: string;
  default_stock_level: number;
  category: Category;
}

interface GetProductsByIdResponse {
  products: Product[];
}

interface UseGetProductByIdReturn {
  product: Product | null;
  loadingProduct: boolean;
  error: Error | undefined;
  refetchProduct: any;
}

interface Tag {
  id: string;
  tag_id: string;
  tag: {
    id: string;
    name: string;
  };
}

interface GetTagsByProductIdResponse {
  product_tags: Tag[];
}

interface UseGetTagsByProductIdReturn {
  productTagsById: Tag[];
  tagsById: InputTagOptionType[];
  loadingTags: boolean;
  error: Error | undefined;
}

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
  refetchImage: any;
}

export const useGetAllProducts = () => {
  const {
    data,
    loading: loadingTotalProduct,
    error: fetchTotalProductError,
  } = useQuery(GET_PRODUCTS);
  const totalProducts = data?.products || [];
  const productCount = totalProducts.length;
  return {
    totalProducts,
    loadingTotalProduct,
    fetchTotalProductError,
    productCount,
  };
};

export const useGetProducts = () => {
  const [filters, setFilters] = useState<{
    shop_id?: string | string[];
    name?: string;
    category?: string | string[];
    stock_level?: string;
    stock_status?: string;
    product_category?: string;
    status?: string;
    priceRange?: { start_price: number; end_price: number };
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};
    if (filters.shop_id) {
      if (Array.isArray(filters.shop_id)) {
        conditions.shop_id = { _in: filters.shop_id };
      } else {
        conditions.shop_id = { _eq: filters.shop_id };
      }
    }
    if (filters.name) {
      conditions.name = { _ilike: `%${filters.name}%` };
    }
    if (filters.category) {
      if (Array.isArray(filters.category)) {
        conditions.category = { id: { _in: filters.category } };
      } else {
        conditions.category = { id: { _eq: filters.category } };
      }
    }
    if (filters.stock_level) {
      conditions.stock_level = { _eq: filters.stock_level };
    }
    if (filters.stock_status) {
      conditions.stock_status = { _eq: filters.stock_status };
    }
    if (filters.status) {
      conditions.status = { _eq: filters.status };
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

export const useGetDropdownProducts = () => {
  const [filters, setFilters] = useState<{
    shop_id?: string;
    name?: string;
    category?: string;
    priceRange?: { start_price: number; end_price: number };
  }>({});

  const where = useMemo(() => {
    const conditions: any = {};
    if (filters.shop_id) {
      conditions.shop_id = { _eq: filters.shop_id };
    }
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

  const { data, loading, error } = useQuery(GET_FILTERED_PRODUCTS_DROPDOWN, {
    variables: {
      where,
    },
    fetchPolicy: "network-only",
  });
  const products = data?.products || [];

  return { filters, setFilters, where, products };
};

export const useGetProductById = (id: string): UseGetProductByIdReturn => {
  const {
    data,
    loading: loadingProduct,
    error,
    refetch: refetchProduct,
  } = useQuery<GetProductsByIdResponse>(GET_PRODUCTS_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  const product = data?.products[0] || null;

  return {
    product,
    loadingProduct,
    error,
    refetchProduct,
  };
};

export const useGetTagsByProductId = (
  productId: string
): UseGetTagsByProductIdReturn => {
  const { data, loading: loadingTags, error } = useQuery<GetTagsByProductIdResponse>(
    GET_TAGS_BY_PRODUCT_ID,
    {
      variables: { productId },
      fetchPolicy: "network-only",
    }
  );

  const productTagsById = data?.product_tags || [];
  const tagsById = productTagsById.map((tag) => ({
    id: tag.tag.id,
    name: tag.tag.name,
  }));

  return {
    productTagsById,
    tagsById,
    loadingTags,
    error,
  };
};

export const useGetImagesByProductId = (
  productId: string
): UseGetImagesByProductIdReturn => {
  const {
    data,
    loading: loadingImages,
    error,
    refetch: refetchImage,
  } = useQuery<GetImagesByProductIdResponse>(GET_IMAGES_BY_PRODUCT_ID, {
    variables: { productId },
    fetchPolicy: "network-only",
  });

  const images = data?.images || [];

  return {
    images,
    loadingImages,
    error,
    refetchImage,
  };
}; 