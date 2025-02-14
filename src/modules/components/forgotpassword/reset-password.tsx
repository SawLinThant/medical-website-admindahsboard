import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { resetPassword } from "@/lib/apolloClient/services/resetPassword";
import { useApolloClient } from "@apollo/client";
import { Loader, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NewFormProps {
    setIsCurrentPage: (value: string) => void;
    resetPhone: string
  }
  
  const NewPasswordForm: React.FC<NewFormProps> = ({
    setIsCurrentPage,
    resetPhone
  }) => {
    const apolloClient = useApolloClient();
    const router = useRouter();
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [resetPasswordLoading, setResetPasswordLoading] = useState<boolean>(false);
    
    const handleSubmit = async () => {
      if (newPassword !== confirmPassword) {
        toast({
          variant: "destructive",
          description: "Passwords do not match",
        });
        return;
      }
  
      try {
        setResetPasswordLoading(true);
  
        const result = await resetPassword(apolloClient, {
          password: newPassword,
          phone: resetPhone,
        });
  
        if (result.success) {
            toast({
                description: result.message,
              });
           router.push("/login")
         // setIsCurrentPage("Enter Phone");
        } else {
          toast({
            variant: "destructive",
            description: result.message,
          });
        }
      } catch (error) {
        console.error("Error resetting password:", error);
        toast({
          variant: "destructive",
          description: "Reset Failed",
        });
      } finally {
        setResetPasswordLoading(false);
      }
    };
  
    return (
      <div className="flex flex-col w-full h-full gap-4 p-4 border rounded-md">
        <div>
          <div className="flex flex-row items-center gap-4">
            <span className="hover:cursor-pointer text-black text-lg font-semibold">
              New Password
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">
            Enter new password to update existing password
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="new_password"
              className="text-xs font-semibold text-black"
            >
              New Password
            </label>
            <Input
              type="password"
              id="new_password"
              name="new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirm_password"
              className="text-xs font-semibold text-black"
            >
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
            />
          </div>
          <Button 
          onClick={handleSubmit} 
          disabled={resetPasswordLoading}
          type="button" className="mt-5 h-9">
            {resetPasswordLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "Update Password"
            )}
          </Button>
          <div
            onClick={() => {
              setIsCurrentPage("Enter Phone");
            }}
            className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
          >
            <MoveLeft size={20} strokeWidth={2} />
            <span className="text-xs">Back to login</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewPasswordForm;