import { UPDATE_ORDER_DELIVERY_USER, UPDATE_ORDER_ITEMS_STATUS_FOR_SHOP } from "@/lib/apolloClient/mutation/orderMutation";
import { useMutation } from "@apollo/client";


interface UpdateOrderItemsVariables {
  order_id: string;
  shop_id: string;
  status: string;
  updated_at: string | null
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

interface UpdateOrderDeliveryUserVariables {
  id: string;
  delivery_user_id: string;
}

interface Order {
  id: string;
  user_id: string;
  status: string;
  payment_id: string;
  payment_proof: string;
  total_price: number;
  created_date: string;
  updated_at: string | null;
  shipping_address: string;
  delivery_user_id: string;
}

interface UpdateOrderDeliveryUserResponse {
  update_orders_by_pk: Order;
}

export const useUpdateOrderDeliveryUser = () => {
  const [mutate, { data, loading, error }] = useMutation<
    UpdateOrderDeliveryUserResponse,
    UpdateOrderDeliveryUserVariables
  >(UPDATE_ORDER_DELIVERY_USER, {
    fetchPolicy: "network-only",
  });

  const updateOrderDeliveryUser = async (variables: UpdateOrderDeliveryUserVariables) => {
    try {
      const response = await mutate({ variables });
      return response.data?.update_orders_by_pk;
    } catch (err) {
      throw new Error("Failed to update order delivery user: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  return {
    updateOrderDeliveryUser,
    data: data?.update_orders_by_pk,
    loading,
    error,
  };
};
