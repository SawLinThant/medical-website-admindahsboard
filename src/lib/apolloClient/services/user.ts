import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_USER_BY_PHONE } from "../query/userQuery";

export interface FindAccountInput {
  phone: string;
}

export interface FindAccountResponse {
  isExist: boolean;
  success: boolean;
}

export const FindAccount = async (
    client: ApolloClient<object>,
    input: FindAccountInput
  ): Promise<FindAccountResponse> => {
    try {
      const { data } = await client.mutate({
        mutation: GET_USER_BY_PHONE,
        variables: {
          phone: input.phone,
        },
      });
  
      console.log("response user:",data?.users)
  
      if (data?.users.length>0) {
        return {
          isExist: true,
          success: true,
        };
      } else {
        return {
          isExist: false,
          success: true,
        };
      }
    } catch (error: any) {
      console.log("Registration error:", error.message || error);
      return {
        isExist: false,
        success: false,
      };
    }
  };