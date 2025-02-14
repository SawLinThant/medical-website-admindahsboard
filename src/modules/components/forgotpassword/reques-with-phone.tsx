"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { FindAccount } from "@/lib/apolloClient/services/user";
import { useApolloClient } from "@apollo/client";
import { Loader, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ResetFormProps {
    setIsForgotPasword?: (value: boolean) => void;
    setCurrentPage: (value: string) => void;
    setResetPhone: (value:string) => void
  }

const ResetPasswordForm: React.FC<ResetFormProps> = ({
    setIsForgotPasword,
    setCurrentPage,
    setResetPhone
  }) => {
    const apolloClient = useApolloClient();
     const [loading, setLoading] = useState<boolean>(false);
     const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const phone = formData.get("phone") as string;
      try {
        setLoading(true);
        const result = await FindAccount(apolloClient, {
          phone: phone,
        });
        console.log(result);
        if (result.success && !result.isExist) {
          toast({
            variant: "destructive",
            description: "Invalid Phone Number",
          });
        } else {
          setResetPhone(phone)
          setCurrentPage("OTP")
        }
      } catch (error) {
        console.log("Error registering:", error);
        setLoading(false);
        toast({
          variant: "destructive",
          description: "Failed to valid the phone number",
        });
      } finally {
        setLoading(false);
      }
    };
    return (
      <div className="flex flex-col w-full h-full gap-4 p-4 border rounded-md">
        <div>
          <div className="flex flex-row items-center gap-4">
            <span className="hover:cursor-pointer text-black font-semibold">
              Forgot Password
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">
            Enter your registered phone number
          </span>
          <span className="text-xs text-muted-foreground">
            We will send an OTP to it
          </span>
        </div>
        <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-2 mt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-xs font-semibold text-black">
              Phone Number
            </label>
            <Input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Your Phone Number"
              required
              className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
            />
          </div>
          <Button disabled={loading} type="submit" className="mt-5 h-9 flex items-center justify-center">
          {loading ? (
              <Loader className="animate-spin" />
            ) : "Send OTP"}
          </Button>
          <div
            onClick={() => router.push("/login")}
            className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
          >
           
             <MoveLeft size={20} strokeWidth={2} />
             <span className="text-xs">Back to login</span>
          </div>
        </form>
      </div>
    );
  };
  export default ResetPasswordForm;