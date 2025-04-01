import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import {
  GET_TAGS,
  GET_TAGS_BY_PRODUCT_ID,
} from "@/lib/apolloClient/query/tagQuery";

interface Tag {
  id: string;
  name: string;
}

interface ProductTag {
  id: string;
  tag_id: string;
  tag: {
    id: string;
    name: string;
  };
}

interface GetTagsResponse {
  tags: Tag[];
}

interface GetTagsByProductIdResponse {
  product_tags: ProductTag[];
}

export const useGetTags = () => {
  const { data, loading, error } = useQuery<GetTagsResponse>(GET_TAGS, {
    fetchPolicy: "network-only",
  });

  const tags = data?.tags || [];

  return {
    tags,
    loading,
    error,
  };
};

export const useGetTagsByProductId = (productId: string) => {
  const { data, loading, error } = useQuery<GetTagsByProductIdResponse>(
    GET_TAGS_BY_PRODUCT_ID,
    {
      variables: { product_id: productId },
      fetchPolicy: "network-only",
    }
  );

  const productTags = data?.product_tags || [];

  return {
    productTags,
    loading,
    error,
  };
}; 