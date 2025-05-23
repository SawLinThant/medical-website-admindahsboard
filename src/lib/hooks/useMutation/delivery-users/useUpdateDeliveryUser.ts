import { useMutation } from "@apollo/client";
import { DeliveryUser } from "@/lib/hooks/useQuery/delivery-users/useGetDeliveryUsers";
import { UPDATE_DELIVERY_USER } from "@/lib/apolloClient/mutation/deliveryUsersMutation";

interface UpdateDeliveryUserVariables {
  id: string;
  name: string;
  uid: string;
  age: number;
  phone: string;
  contact_address: string;
  status: string;
}

interface UpdateDeliveryUserResponse {
  update_delivery_users_by_pk: DeliveryUser;
}

export const useUpdateDeliveryUser = () => {
  const [updateDeliveryUserMutation, { loading, error }] = useMutation<
    UpdateDeliveryUserResponse,
    UpdateDeliveryUserVariables
  >(UPDATE_DELIVERY_USER, {
    fetchPolicy: "network-only",
  });

  const updateDeliveryUser = async (input: UpdateDeliveryUserVariables) => {
    try {
      const { data } = await updateDeliveryUserMutation({
        variables: input,
      });
      return data?.update_delivery_users_by_pk;
    } catch (err) {
      throw err;
    }
  };

  return {
    updateDeliveryUser,
    loading,
    error,
  };
};