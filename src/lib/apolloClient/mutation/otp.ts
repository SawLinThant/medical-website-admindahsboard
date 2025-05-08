import { gql } from "@apollo/client";

export const SEND_OTP = gql`
  mutation sendOtp($phone: String!) {
    sendOtp(phone: $phone) {
      message
      transactionId
    }
  }
`;

export const GENERATE_OTP = gql`
  mutation generateOtp($phone: String!, $otp: String!) {
    generateOtp(phone: $phone, otp: $otp) {
      message
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation verifyOtp($phone: String!, $otp: String!) {
    verifyOtp(phone: $phone, otp: $otp) {
      message
    }
  }
`;

export const SEND_REGISTER_OTP = gql`
  mutation sendRegisterOtp($phone: String!) {
    sendRegisterOtp(phone: $phone) {
      message
      transactionId
    }
  }
`;

export const VERIFY_REGISTER_OTP = gql`
  mutation verifyRegisterOtp($phone: String!, $otp: String!) {
    verifyRegisterOtp(phone: $phone, otp: $otp) {
      message
    }
  }
`;