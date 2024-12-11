import { useQuery } from "@apollo/client"
import { GET_TAGS } from "../apolloClient/query/tagQuery"

const useGetTags = () => {
    const {data,loading,error} = useQuery(GET_TAGS);
    const tags = data?.tags || [];
    return {tags,loading,error}
}
export default useGetTags;