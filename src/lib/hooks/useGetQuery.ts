import { useQuery } from "@apollo/client"
import { GET_TAGS } from "../apolloClient/query/tagQuery"
import { GET_CATEGORY } from "../apolloClient/query/categoryQuery";

export const useGetTags = () => {
    const {data,loading:loadingTags,error} = useQuery(GET_TAGS);
    const tags = data?.tags || [];
    return {tags,loadingTags,error}
}


export const useGetCategories = () => {
    const {data,loading:loadingCategories,error} = useQuery(GET_CATEGORY);
    const categories = data?.categories || [];
    return {categories,loadingCategories,error}
}
