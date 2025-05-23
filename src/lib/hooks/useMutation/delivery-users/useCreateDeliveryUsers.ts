import { useMutation } from "@apollo/client";
import { CREATE_DELIVERY_USERS } from "@/lib/apolloClient/mutation/deliveryUsersMutation";

export interface DeliveryUsers {
  age?: number;
  contact_address?: string;
  name?: string;
  phone?: string;
  uid?: string;
  status?: string;
}

interface CreateDeliveryUsersVariables {
  age?: number;
  contact_address?: string;
  name?: string;
  phone?: string;
  uid?: string;
}

interface CreateDeliveryUsersResponse {
  insert_delivery_users: {
    affected_rows: number;
    returning: {
      id: string;
      age: number;
      contact_address: string;
      name: string;
      phone: string;
      uid: string;
    }[];
  };
}

export const useCreateDeliveryUsers = () => {
  const [
    createDeliveryUsersMutation,
    { loading: loadingCreateDeliveryUsers, error: errorCreateDeliveryUsers },
  ] = useMutation<CreateDeliveryUsersResponse, CreateDeliveryUsersVariables>(CREATE_DELIVERY_USERS);

  const createDeliveryUsers = async (variables: CreateDeliveryUsersVariables) => {
    try {
      const response = await createDeliveryUsersMutation({
        variables,
      });
      return response?.data?.insert_delivery_users;
    } catch (err) {
      console.error("Error creating delivery users:", err);
      throw err;
    }
  };

  return { createDeliveryUsers, loadingCreateDeliveryUsers, errorCreateDeliveryUsers };
};