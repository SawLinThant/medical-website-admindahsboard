"use client";

import { useState } from "react";
import OTPForm from "./otp";
import ResetPasswordForm from "./reques-with-phone";
import NewPasswordForm from "./reset-password";

const ForgotPasswordForm: React.FC = () => {
  const [currentResetPasswordPage, setCurrentResetPasswordpage] =
    useState<string>("Enter Phone");
    const [resetPhone, setResetPhone] = useState<string>("");
  return (
    <div className="lg:w-[50vw] md:w-[70vw] w-full max-w-[800px] min-h-40 flex items-center justify-center">
      <div className="w-[400px]">
        {currentResetPasswordPage === "Enter Phone" && (
          <ResetPasswordForm setResetPhone={setResetPhone} setCurrentPage={setCurrentResetPasswordpage} />
        )}
        {currentResetPasswordPage === "OTP" && (
          <OTPForm setCurrentPage={setCurrentResetPasswordpage} />
        )}
        {currentResetPasswordPage === "New Password" && (
          <NewPasswordForm resetPhone={resetPhone} setIsCurrentPage={setCurrentResetPasswordpage} />
        )}
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
