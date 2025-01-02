import { useQuery } from "@apollo/client";
import { GET_TAGS, GET_TAGS_BY_PRODUCT_ID } from "../apolloClient/query/tagQuery";
import { GET_CATEGORY, GET_SHOP_CATEGORY } from "../apolloClient/query/categoryQuery";
import { GET_FILTERED_PRODUCTS, GET_PRODUCTS, GET_PRODUCTS_BY_ID } from "../apolloClient/query/productQuery";
import { useMemo, useState } from "react";
import { GET_PRICE_RANGE } from "../apolloClient/query/priceRangeQuery";
import { GET_IMAGES_BY_PRODUCT_ID } from "../apolloClient/query/productImageQuery";
import { InputTagOptionType, Order, OrderItem, ShopOrders, Tax } from "../types";
import { GET_FILTERED_SHOPS, GET_SHOP_BY_ID } from "../apolloClient/query/shopQuery";
import { GET_USER_BY_SHOP_ID } from "../apolloClient/query/userQuery";
import { GET_IMAGES_BY_SHOP_ID } from "../apolloClient/query/shopImageQuery";
import { GET_ORDER_BY_ID, GET_ORDER_ITEMS_BY_ORDER_ID, GET_SHOP_ORDERS } from "../apolloClient/query/orderQuery";
import { GET_TAXES } from "../apolloClient/query/taxQuery";

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
    shop_id?: string;
    name?: string;
    category?: string;
    priceRange?: { start_price: number; end_price: number };
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};
    if(filters.shop_id){
      conditions.shop_id =  {_eq: filters.shop_id};
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
  productTagsById: Tag[]
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

  const productTagsById = data?.product_tags || [];
  const tagsById: InputTagOptionType[] = data?.product_tags.map(tag => ({
    id: tag.tag.id,
    name: tag.tag.name,
  })) || [];

  return { productTagsById, tagsById, loadingTags, error };
};

interface Image {
  id: string;
  image_url: string;
}

interface GetImagesByProductIdResponse {
  images: Image[];
}

interface GetShopImagesByShoptIdResponse {
  shop_images: Image[];
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

export const useGetImagesByShopId = (shopId: string): UseGetImagesByProductIdReturn => {
  const { data, loading: loadingImages, error, refetch: refetchImage } = useQuery<GetShopImagesByShoptIdResponse>(
    GET_IMAGES_BY_SHOP_ID,
    {
      variables: { shop_id: shopId },
      skip: !shopId, 
    }
  );

  const images = data?.shop_images || [];

  return { images, loadingImages, error, refetchImage };
};

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
  shop_category: {
    id: string
    name: string
  }
}

interface GetShopByIdResponse {
  shops_by_pk: Shop | null;
}

interface UseGetShopByIdReturn {
  shop: Shop | null;
  loadingShop: boolean;
  errorShop: Error | undefined;
  refetchShop: any;
}

export const useGetShopById = (id: string): UseGetShopByIdReturn => {
  const { data, loading: loadingShop, error: errorShop, refetch: refetchShop } = useQuery<GetShopByIdResponse>(
    GET_SHOP_BY_ID,
    {
      variables: { id },
      skip: !id,
    }
  );

  const shop = data?.shops_by_pk || null;

  return { shop, loadingShop, errorShop, refetchShop };
};

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
}

interface GetUsersByShopIdResponse {
  users: User[] | null;
}

interface UseGetUsersByShopIdReturn {
  user: User | null;
  loadingUser: boolean;
  errorUser: Error | undefined;
  refetchUser: any;
}

export const useGetUsersByShopId = (shop_id: string): UseGetUsersByShopIdReturn => {
  const { data, loading: loadingUser, error: errorUser, refetch: refetchUser } = useQuery<GetUsersByShopIdResponse>(
    GET_USER_BY_SHOP_ID,
    {
      variables: { shop_id: shop_id },
      skip: !shop_id,
    }
  );

  const user = data?.users?.[0] || null;

  return { user, loadingUser, errorUser, refetchUser };
};

type ShopFilter = {
  name?: string;
  shop_category?: string;
};

export const useGetShops = () => {
  const [filters, setFilters] = useState<ShopFilter>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};

    if (filters.name) {
      conditions.name = { _ilike: `%${filters.name}%` };
    }
    if (filters.shop_category) {
      conditions.shop_category = { id: { _eq: filters.shop_category } };
    }

    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }, [filters]);

  const { data, loading, error } = useQuery(GET_FILTERED_SHOPS, {
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
    totalCount
  };
};

export const useGetShopOrders = () => {
  const [filters, setFilters] = useState<{
    shop_id?: string;
    order_id?: string;
    order_status?: string;
    payment?: string;
    username?: string;
    created_date?: { start_date: string; end_date: string };
  }>({});
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(10);

  const skip = useMemo(() => (page - 1) * take, [page, take]);

  const where = useMemo(() => {
    const conditions: any = {};
    if (filters.shop_id) {
      conditions.shop_id = { _eq: filters.shop_id };
    }
    if (filters.order_id) {
      conditions.order_id = { _eq: filters.order_id };
    }
    if (filters.order_status) {
      conditions.order_status = { _eq: filters.order_status };
    }
    if (filters.payment) {
      conditions.payment = { _eq: filters.payment };
    }
    if (filters.username) {
      conditions.username = { _ilike: `%${filters.username}%` };
    }
    if (filters.created_date) {
      conditions.created_date = {
        _gte: filters.created_date.start_date,
        _lte: filters.created_date.end_date,
      };
    }

    return Object.keys(conditions).length > 0 ? conditions : undefined;
  }, [filters]);

  const { data, loading, error } = useQuery(GET_SHOP_ORDERS, {
    variables: {
      where,
      offset: skip,
      limit: take,
    },
    fetchPolicy: "network-only",
  });

  const shopOrders: ShopOrders[] = data?.shop_orders || [];
  const totalCount = data?.shop_orders_aggregate?.aggregate?.count || 1;

  return {
    shopOrders,
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


interface GetOrderssByIdResponse {
  orders: Order[]
}

interface UseGetOrderByIdReturn {
  order: Order | undefined
  loadingOrder: boolean;
  error: Error | undefined;
  refetchOrder: any
}

export const useGetOrderById = (orderId: string): UseGetOrderByIdReturn => {
  const { data, loading: loadingOrder, error, refetch:refetchOrder } = useQuery<GetOrderssByIdResponse>(GET_ORDER_BY_ID,
    {
      variables:{id: orderId},
      skip: !orderId
    }
  )
  const order = data? data.orders?.[0] : undefined;

  return {order,loadingOrder,error,refetchOrder}
}

interface GetOrderItemsByIdResponse {
  order_items: OrderItem[]
}

interface UseGetOrderItemByOrderIdReturn {
  orderItems: OrderItem[] | undefined
  loadingOrder: boolean;
  error: Error | undefined;
}

export const useGetOrderItemByOrderId = (orderId: string): UseGetOrderItemByOrderIdReturn => {
  const { data, loading: loadingOrder, error } = useQuery<GetOrderItemsByIdResponse>(GET_ORDER_ITEMS_BY_ORDER_ID,
    {
      variables:{order_id: orderId},
      skip: !orderId
    }
  )
  const orderItems = data? data.order_items : undefined;

  return {orderItems,loadingOrder,error}
}

interface GetTaxResponse {
  taxes: Tax[]
}

interface UseGetTaxReturn {
  tax: Tax | undefined
  loadingTax: boolean;
  error: Error | undefined;
}

export const useGetTax = ():UseGetTaxReturn => {
  const { data, loading: loadingTax, error } = useQuery<GetTaxResponse>(GET_TAXES)
  const tax = data? data.taxes[0] : undefined;

  return {tax,loadingTax,error}
}