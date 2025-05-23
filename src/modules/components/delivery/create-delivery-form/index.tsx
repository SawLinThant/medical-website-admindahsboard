"use client"
import { Button } from "@/components/ui/button";
import { BackButton } from "@/modules/common/components/button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateShopCategory } from "@/lib/hooks/useMutation/shop/useCreateShopCategory";
//import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { useCreateDeliveryUsers } from "@/lib/hooks/useMutation/delivery-users/useCreateDeliveryUsers";

const CreateDeliveryForm: React.FC = () => {
  //const router = useRouter();
  const { handleSubmit, register, reset } = useForm();
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const { createDeliveryUsers, loadingCreateDeliveryUsers } = useCreateDeliveryUsers();

  const onSubmit = async (data: any) => {
    try {
      setCreateLoading(true);
      await createDeliveryUsers({
        name: data.name,
        age: data.age,
        phone: data.phone,
        uid: data.unique_id,
        contact_address: data.contact_address,
      });
      toast({
        title: "Delivery user created successfully",
        description: "Delivery user created successfully",
      });
      reset();
     // router.push("/categories/shop-categories");
    } catch (error) {
      console.error("Error creating delivery user:", error);
      toast({
        title: "Failed to create delivery user",
        description: "Failed to create delivery user",
      });
    } finally {
      setCreateLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">Back</div>
          <h1 className="text-headercolor font-bold text-xl">
            Onboard
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full">
                  <CustomInput
                    name="name"
                    label="Full Name"
                    placeHolder="Enter Full Name"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name="age"
                    label="Age"
                    placeHolder="Enter Full Age"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name="phone"
                    label="Phone Number"
                    placeHolder="Enter Phone Number"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name="unique_id"
                    label="Unique ID"
                    placeHolder="Enter Unique ID"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <CustomTextArea
                  placeHolder="Enter contact address here"
                  label="Contact Address"
                  name="contact_address"
                  register={register}
                  required
                />
              </div>
              <div className="w-full mt-4 min-h-20 flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={createLoading}
                    className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                  >
                    {createLoading ? (
                      <Loader className="animate-spin" size={25} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateDeliveryForm;
