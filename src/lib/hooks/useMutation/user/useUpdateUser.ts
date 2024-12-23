import { UPDATE_USER_BY_SHOP_ID } from "@/lib/apolloClient/mutation/userMutation";
import { useMutation } from "@apollo/client";

interface UpdateUserByShopIdVariables {
    shop_id: string;
    username?: string;
    email?: string;
    phone?: string;
    role?: string;
    updated_at: String
  }

  interface User {
    id: String
    username: String
    email: String
    password: String
    phone: String
    role: String
    updated_at: String
  }
  
  interface UpdateUserByShopIdResponse {
    update_users: {
      returning: User[];
    };
  }
  
  export const useUpdateUserByShopId = () => {
    const [updateUserByShopIdMutation, { loading: loadingUpdateUser, error: errorUpdateUser }] = useMutation<
      UpdateUserByShopIdResponse,
      UpdateUserByShopIdVariables
    >(UPDATE_USER_BY_SHOP_ID);
  
    const updateUserByShopId = async (variables: UpdateUserByShopIdVariables) => {
      try {
        const response = await updateUserByShopIdMutation({
          variables,
        });
        return response?.data?.update_users.returning;
      } catch (err) {
        console.error("Error updating user by shop ID:", err);
        throw err;
      }
    };
  
    return { updateUserByShopId, loadingUpdateUser, errorUpdateUser };
  };
  