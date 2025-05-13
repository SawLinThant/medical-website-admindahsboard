"use client";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/modules/common/components/button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
//import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { ScheduleButton } from "@/modules/common/components/button/schedule-button";
import { useCreateCupon } from "@/lib/hooks/useMutation/cupon/useCreateCupon";
import { Label } from "@/components/ui/label";
import Combobox from "@/modules/common/components/dropdown";

const CUPONTYPE = [
  { id: "percentage", name: "Percentage" },
  { id: "fixed", name: "Fixed" },
];

const CreateCuponForm: React.FC = () => {
  //const router = useRouter();
  const { handleSubmit, register, reset } = useForm();
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { createCupon, errorCreateCupon } = useCreateCupon();
  const [cuponType, setCuponType] = useState<string>("");

  const onSubmit = async (data: any) => {
    if(!selectedDate) {
      toast({
        title: "Please select an expiration date",
        description: "Please select an expiration date",
      });
      return;
    }
    try {
      setCreateLoading(true);
      await createCupon({
        cupon_number: data.cupon_number,
        type: cuponType === "" ? "percentage" : cuponType,
        expired_date: new Date(selectedDate || Date.now()).toISOString(),
        value: data.value,
      });
      toast({
        title: "cupon created successfully",
        description: "cupon created successfully",
      });
      reset();
      // router.push("/categories/shop-categories");
    } catch (error) {
      console.error("Error creating cupon:", error);
      toast({
        title: "Failed to create cupon",
        description: "Failed to create cupon",
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
          <h1 className="text-headercolor font-bold text-xl">Add New Cupon</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Description
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full">
                  <CustomInput
                    name="cupon_number"
                    label="Cupon Number"
                    placeHolder="Enter Cupon Number"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Cupon Type</Label>
                  <Combobox
                    label="Select Cupon Type"
                    setCategory={setCuponType}
                    options={CUPONTYPE}
                  />
                </div>
                  <div className="w-full">
                  <CustomInput
                    name="value"
                    label="Cupon Value"
                    placeHolder="Enter Cupon Value"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <ScheduleButton
                  loading={createLoading}
                  setSelectedDate={setSelectedDate}
                  label="Expiration Date"
                />
              </div>
              <div className="w-full min-h-20 flex flex-row justify-between mt-4">
                <div className="flex flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={createLoading}
                    className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                  >
                    {createLoading ? (
                      <Loader className="animate-spin" size={25} />
                    ) : (
                      "Create"
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

export default CreateCuponForm;
