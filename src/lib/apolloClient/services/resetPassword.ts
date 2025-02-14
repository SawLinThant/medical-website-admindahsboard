import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { RESET_PASSWORD } from "../mutation/resetPassword";

export interface ResetPasswordInput {
  password: string;
  phone?: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export const resetPassword = async (
  client: ApolloClient<Object>,
  input: ResetPasswordInput
): Promise<ResetPasswordResponse> => {
  try {
    const { data } = await client.mutate({
      mutation: RESET_PASSWORD,
      variables: {
        password: input.password,
        phone: input.phone,
      },
    });

    if (data?.resetPassword) {
      return {
        success: true,
        message: data.resetPassword.message,
      };
    }

    throw new Error("Unexpected error in reset password.");
  } catch (error: any) {
    console.log("Reset password error:", error.message || error);
    return {
      success: false,
      message: error.message || "Reset password failed",
    };
  }
};