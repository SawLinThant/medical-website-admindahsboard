import { GENERATE_OTP, SEND_OTP, SEND_REGISTER_OTP, VERIFY_OTP, VERIFY_REGISTER_OTP } from "@/lib/apolloClient/mutation/otp";
import { useMutation } from "@apollo/client";

interface SendOtpResponse {
  sendOtp: {
    message: string;
    transactionId: string;
  };
}

interface SendOtpVariables {
  phone: string;
}

interface UseSendOtpReturn {
  sendOtp: (phone: string) => Promise<SendOtpResponse["sendOtp"] | null>;
  loading: boolean;
  error: Error | undefined;
}

export const useSendOtp = (): UseSendOtpReturn => {
  const [mutate, { loading, error }] = useMutation<SendOtpResponse, SendOtpVariables>(SEND_OTP);

  const sendOtp = async (phone: string): Promise<SendOtpResponse["sendOtp"] | null> => {
    try {
      const { data } = await mutate({
        variables: { phone },
      });
      return data?.sendOtp || null;
    } catch (err) {
      console.error("Error sending OTP:", err);
      return null;
    }
  };

  return { sendOtp, loading, error };
};

interface GenerateOtpResponse {
  generateOtp: {
    message: string;
  };
}

interface GenerateOtpVariables {
  phone: string;
  otp: string
}

interface UseGenerateOtpReturn {
  generateOtp: (phone: string, otp: string) => Promise<GenerateOtpResponse["generateOtp"] | null>;
  loading: boolean;
  error: Error | undefined;
}

export const useGenerateOtp = (): UseGenerateOtpReturn => {
  const [mutate, { loading, error }] = useMutation<GenerateOtpResponse, GenerateOtpVariables>(GENERATE_OTP);

  const generateOtp = async (phone: string, otp: string): Promise<GenerateOtpResponse["generateOtp"] | null> => {
    try {
      const { data } = await mutate({
        variables: { phone, otp },
      });
      return data?.generateOtp || null;
    } catch (err) {
      console.error("Error generating OTP:", err);
      return null;
    }
  };

  return { generateOtp, loading, error };
};

interface VerifyOtpResponse {
    verifyOtp: {
      message: string;
    };
  }
  
  interface VerifyOtpVariables {
    phone: string;
    otp: string;
  }
  
  interface UseVerifyOtpReturn {
    verifyOtp: (phone: string, otp: string) => Promise<VerifyOtpResponse["verifyOtp"] | null>;
    loading: boolean;
    error: Error | undefined;
  }
  
  export const useVerifyOtp = (): UseVerifyOtpReturn => {
    const [mutate, { loading, error }] = useMutation<VerifyOtpResponse, VerifyOtpVariables>(VERIFY_OTP);
  
    const verifyOtp = async (phone: string, otp: string): Promise<VerifyOtpResponse["verifyOtp"] | null> => {
      try {
        const { data } = await mutate({
          variables: { phone, otp },
        });
        return data?.verifyOtp || null;
      } catch (err) {
        console.error("Error verifying OTP:", err);
        return null;
      }
    };
  
    return { verifyOtp, loading, error };
  };

  interface SendRegisterOtpResponse {
    sendRegisterOtp: {
      message: string;
      transactionId: string;
      OTP: string;
    };
  }
  
  interface SendRegisterOtpVariables {
    phone: string;
  }
  
  interface UseSendRegisterOtpReturn {
    sendRegisterOtp: (phone: string) => Promise<SendRegisterOtpResponse["sendRegisterOtp"] | null>;
    loading: boolean;
    error: Error | undefined;
  }
  
  export const useSendRegisterOtp = (): UseSendRegisterOtpReturn => {
    const [mutate, { loading, error }] = useMutation<SendRegisterOtpResponse, SendRegisterOtpVariables>(SEND_REGISTER_OTP);
  
    const sendRegisterOtp = async (phone: string): Promise<SendRegisterOtpResponse["sendRegisterOtp"] | null> => {
      try {
        const { data } = await mutate({
          variables: { phone },
        });
        return data?.sendRegisterOtp || null;
      } catch (err) {
        console.error("Error sending registration OTP:", err);
        return null;
      }
    };
  
    return { sendRegisterOtp, loading, error };
  };

  interface VerifyRegisterOtpResponse {
    verifyRegisterOtp: {
      message: string;
    };
  }
  
  interface VerifyRegisterOtpVariables {
    phone: string;
    otp: string;
  }
  
  interface UseVerifyRegisterOtpReturn {
    verifyRegisterOtp: (phone: string, otp: string) => Promise<VerifyRegisterOtpResponse["verifyRegisterOtp"] | null>;
    loading: boolean;
    error: Error | undefined;
  }
  
  export const useVerifyRegisterOtp = (): UseVerifyRegisterOtpReturn => {
    const [mutate, { loading, error }] = useMutation<VerifyRegisterOtpResponse, VerifyRegisterOtpVariables>(VERIFY_REGISTER_OTP);
  
    const verifyRegisterOtp = async (phone: string, otp: string): Promise<VerifyRegisterOtpResponse["verifyRegisterOtp"] | null> => {
      try {
        const { data } = await mutate({
          variables: { phone, otp },
        });
        return data?.verifyRegisterOtp || null;
      } catch (err) {
        console.error("Error verifying registration OTP:", err);
        return null;
      }
    };
  
    return { verifyRegisterOtp, loading, error };
  };