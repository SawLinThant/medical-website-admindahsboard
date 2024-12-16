import { useQuery } from "@apollo/client";
import { GET_TAGS } from "../apolloClient/query/tagQuery";
import { GET_CATEGORY } from "../apolloClient/query/categoryQuery";
import { GET_FILTERED_PRODUCTS } from "../apolloClient/query/productQuery";
import { useState } from "react";

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

export const useGetProducts = () => {
  const [nameSearch, setNameSearch] = useState<string>("");
  const shouldFilter = nameSearch === "" ? false : true;
  const {
    data,
    loading:loadingProduct,
    error: fetchProductError,
  } = useQuery(GET_FILTERED_PRODUCTS, {
    variables: {
        variables: {
            where: nameSearch
              ? { name: { _eq: nameSearch } }
              : {}, 
          },
    },
  });
  const products = data?.products || [];

  return {products,loadingProduct,fetchProductError}
};
