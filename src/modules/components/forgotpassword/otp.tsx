import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import OTPInput from "@/modules/common/components/otp-input";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface OTPFormProps {
 // setIsForgotPasword: (value: boolean) => void;
  setCurrentPage: (value: string) => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ setCurrentPage }) => {
  const [value, setValue] = useState<any>();
  const router = useRouter();
    const handleSubmit = () => {
       const otpValue = value.toString();
       if (otpValue.length === 6) {
         if (otpValue === "239827") {
           setCurrentPage("New Password")
         } else {
           toast({
             description: "Invalid OTP !",
           });
         }
       } else {
         toast({
           description: "please fill all fields",
         });
       }
    }
  return (
    <div className="flex flex-col w-full h-full gap-4 p-4 border rounded-md">
      <div>
        <div className="flex flex-row items-center gap-4">
          <span className="hover:cursor-pointer text-black font-semibold">
            OTP
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">
          Enter four digits from your phone to reset password
        </span>
      </div>
      <div
        className="flex flex-col gap-2 items-center mt-4"
      >
        <OTPInput setValue={setValue} />
        <Button onClick={handleSubmit} type="button" className="mt-5 h-9 w-full">
          Reset Password
        </Button>
        <div
          onClick={() => router.push("/login")}
          className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
        >
          <MoveLeft size={20} strokeWidth={2} />
          <span className="text-xs">Back to login</span>
        </div>
      </div>
    </div>
  );
};
export default OTPForm;
