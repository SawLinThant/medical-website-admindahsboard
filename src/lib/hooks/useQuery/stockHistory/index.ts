import { GET_STOCK_HISTORIES } from "@/lib/apolloClient/query/stockHistoryQuery";
import { useQuery } from "@apollo/client";

export const useGetStockHistories = (shop_id: string, product_id?: string) => {
  const { data, loading, error, refetch:refetchStock } = useQuery(GET_STOCK_HISTORIES, {
    variables: { shop_id:shop_id, product_id:product_id },
    skip: !shop_id, 
  });

  return { stockHistories: data?.stock_histories, loading, error, refetchStock };
};