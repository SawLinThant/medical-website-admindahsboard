import { UPDATE_ORDER_ITEMS_STATUS_FOR_SHOP } from "@/lib/apolloClient/mutation/orderMutation";
import { useMutation } from "@apollo/client";


interface UpdateOrderItemsVariables {
  order_id: string;
  shop_id: string;
  status: string;
}

interface UpdateOrderItemsResponse {
  update_order_items: {
    affected_rows: number;
  };
}

export const useUpdateOrderItemsStatus = () => {
  const [
    updateOrderItemsMutation,
    { loading: loadingUpdateOrderItems, error: errorUpdateOrderItems },
  ] = useMutation<UpdateOrderItemsResponse, UpdateOrderItemsVariables>(
    UPDATE_ORDER_ITEMS_STATUS_FOR_SHOP
  );

  const updateOrderItemsStatus = async (variables: UpdateOrderItemsVariables) => {
    try {
      const response = await updateOrderItemsMutation({
        variables,
      });
      return response?.data?.update_order_items.affected_rows;
    } catch (err) {
      console.log("Error updating order items status:", err);
      throw err;
    }
  };

  return { updateOrderItemsStatus, loadingUpdateOrderItems, errorUpdateOrderItems };
};
