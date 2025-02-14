import { CREATE_STOCK_HISTORY } from "@/lib/apolloClient/mutation/stockHistoryMutation";
import { useMutation } from "@apollo/client";

export const useCreateStockHistory = () => {
  const [createStockHistory, { loading, error, data }] =
    useMutation(CREATE_STOCK_HISTORY);

  const handleCreateStockHistory = async (input: {
    reason?: string;
    type?: string;
    product_id?: string;
    shop_id?: string;
    stock_available?: number;
    adjusted_quantity?: number;
  }) => {
    try {
      const response = await createStockHistory({
        variables: input,
      });
      return response.data?.insert_stock_histories.returning;
    } catch (err) {
      console.error("Error creating stock history:", err);
      throw err;
    }
  };

  return { handleCreateStockHistory, loading, error, data };
};
