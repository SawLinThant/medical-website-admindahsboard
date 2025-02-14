"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";

interface OTPInputProps {
 setValue: any
}

const OTPInput: React.FC<OTPInputProps> = ({ setValue }) => {
  
  return (
    <InputOTP onChange={setValue} className="gap-7" maxLength={6}>
       <InputOTPGroup>
          <InputOTPSlot
            index={0}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            index={1}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            index={2}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            index={3}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            index={4}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            index={5}
          />
        </InputOTPGroup>
    </InputOTP>
  );
};
export default OTPInput;
