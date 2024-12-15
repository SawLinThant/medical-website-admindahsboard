"use client";
import { toast } from "@/hooks/use-toast";
import { SIGN_IN_MUTATION } from "@/lib/apolloClient/mutation/signinMutation";
import CustomInput from "@/modules/common/components/custom-input";
import { useMutation } from "@apollo/client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [userLogin, { loading: loginLoading }] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      console.log("login success");
      const token = data.userLogin.token;
      localStorage.setItem("token", token);
      router.push("/product-management/product/create-product");
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
      await userLogin({
        variables: {
          username: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      console.log(error);
      toast({
        description: "Unable to login",
      });
    }
  });
  return (
    <div className="lg:w-[1000px] lg:max-w-[900px] md:w-[83vw] lg:min-h-[60vh] md:min-h-[60vh] w-full grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 border border-gray-500">
      <div className="col-span-7 border-r">
        <Image
          alt="login"
          height={1200}
          width={900}
          src="/images/login.jpg"
          className="w-full h-full object-cover bg-cover"
        />
      </div>
      <div className="col-span-5 px-6 py-10">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full min-h-[100px] bg-inputlabel/75 border flex items-center justify-center rounded-md">
            <h2 className="font-bold text-white">Kyanmar Thuka</h2>
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
              <span className="w-full text-right text-sm text-inputlabel">
                Forgot password
              </span>
            </div>
            <button
              type="submit"
              disabled={loginLoading}
              className="border min-h-[2.25rem] rounded-md bg-inputlabel text-white flex items-center justify-center"
            >
              {loginLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Login"
              )}
            </button>
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
