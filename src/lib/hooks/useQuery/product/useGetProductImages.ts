import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_IMAGES_BY_PRODUCT_ID,
} from "@/lib/apolloClient/query/productImageQuery";

interface Image {
  id: string;
  image_url: string;
  product_id: string;
}

interface GetImagesByProductIdResponse {
  images: Image[];
}

export const useGetImagesByProductId = (productId: string) => {
  const { data, loading, error } = useQuery<GetImagesByProductIdResponse>(
    GET_IMAGES_BY_PRODUCT_ID,
    {
      variables: { product_id: productId },
      fetchPolicy: "network-only",
    }
  );

  const images = data?.images || [];

  return {
    images,
    loading,
    error,
  };
}; 