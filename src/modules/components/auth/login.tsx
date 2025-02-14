"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { SIGN_IN_MUTATION } from "@/lib/apolloClient/mutation/signinMutation";
import { useAccount } from "@/lib/context/account-context";
import { getRoleFromToken } from "@/lib/utils";
import CustomInput from "@/modules/common/components/custom-input";
import { useMutation } from "@apollo/client";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const {setRole, setIsLogin, setUserId} = useAccount()
  const router = useRouter();
  const[loading,setLoading] = useState<boolean>(false)
  const [userLogin, { loading: loginLoading }] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      console.log("login success");
      const token = data.userLogin.token;
      localStorage.setItem("token", token);
      const user = getRoleFromToken(token);
      if(user){
        setRole(user.role)
        setUserId(user.id)
        setIsLogin(true)
      }
      toast({
        description: "Login Success",
      })
      if (user &&  user.role === "admin") {
        router.push("/shop/shop-list");
      } else {
        router.push("/product-management/product/product-list");
      }
    },
    onError: () => {
      toast({
        variant: "destructive",
        description: "Invalid Credentials",
      });
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      await userLogin({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast({
        description: "Unable to login",
      });
    }finally{
      setLoading(false)
    }
  });
  return (
    <div className="lg:w-[900px] lg:max-w-[1400px] md:w-[83vw] lg:min-h-[60vh] md:min-h-[60vh] w-full grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 border border-gray-500">
      <div className="col-span-7 border-r w-full h-full relative">
        <Image
          alt="login"
          layout="fill"
          src="/images/login-bg.jpg"
          className="object-cover"
        />
      </div>
      <div className="col-span-5 px-6 py-10">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full relative min-h-[100px] flex items-center justify-center rounded-md">
            <Image className="object-contain" width={50} height={25} src="/images/logo.png" alt="logo"/>
            {/* <h2 className="font-bold text-white">Natsay</h2> */}
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">Login</h1>
            <div className="text-xs text-inputlabel mt-3 font-light">
              The central hub for managing shops and ensuring smooth operations{" "}
            </div>
          </div>
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 mt-6">
            <CustomInput
              label="Email"
              name="email"
              type="email"
              register={register}
              placeHolder="Enter your email"
            />
            <div className="flex flex-col gap-2">
              <CustomInput
                label="Password"
                name="password"
                type="password"
                register={register}
                placeHolder="Enter your password"
              />
              <span onClick={() => router.push("/forgotpassword")} className="w-full text-right text-sm text-inputlabel hover:cursor-pointer">
                Forgot password
              </span>
            </div>
            <Button
              type="submit"
              disabled={loginLoading || loading}
              className="border min-h-[2.25rem] rounded-md bg-inputlabel text-white flex items-center justify-center"
            >
              {loginLoading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <span className="text-inputlabel text-sm w-full text-center pb-4">
            Account Setting
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
