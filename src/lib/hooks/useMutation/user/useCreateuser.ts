
import { REGISTER_USER_MUTATION } from "@/lib/apolloClient/mutation/signupMutation";
import { useMutation, useQuery } from "@apollo/client";

interface CreateUserVariables {
    username: string;
    email: string;
    password: string;
    role: string;
    phone: string;
    shop_id: string; 
  }

  interface CreateUserResponse {
     message: string
     user_id: string
  }

export const useCreateUser = () => {
  const [createUserMutation,{ loading: loadingCreateUser, error:createUserError }]  = useMutation<CreateUserResponse,CreateUserVariables>(REGISTER_USER_MUTATION);
  const createUser = async (variables:CreateUserVariables) => {
    try {
        const response = await createUserMutation({ variables });
        return response?.data;
      } catch (err) {
        console.error("Error creating user:", err);
        throw err;
      }
  }
  return { createUser, loadingCreateUser, createUserError};
};