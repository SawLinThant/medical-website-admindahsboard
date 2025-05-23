"use client";

import { toast } from "@/hooks/use-toast";
import { useUpdateDeliveryUser } from "@/lib/hooks/useMutation/delivery-users/useUpdateDeliveryUser";
import {
  DeliveryUser,
  useGetDeliveryUserById,
} from "@/lib/hooks/useQuery/delivery-users/useGetDeliveryUsers";
import BackButton from "@/modules/common/components/button/backButton";
import CustomUpdateInput from "@/modules/common/components/custom-update-input";
import CustomUpdateTextArea from "@/modules/common/components/custom-update-textarea";
import { Button } from "@/modules/common/components/ui/button";
import { set } from "date-fns";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

interface DeliveryUserDetailFormPops {
  id: string;
}

const DeliveryUserDetailForm: React.FC<DeliveryUserDetailFormPops> = ({
  id,
}) => {
  const { deliveryUser } = useGetDeliveryUserById(id);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const { updateDeliveryUser } = useUpdateDeliveryUser();
  const [deliveryUserInfo, setDeliveryUserInfo] = useState<DeliveryUser>({
    id: "",
    uid: "",
    name: "",
    age: 0,
    phone: "",
    contact_address: "",
    status: "",
  });

  useEffect(() => {
    if (deliveryUser) {
      setDeliveryUserInfo(deliveryUser);
    }
  }, [deliveryUser]);

  const handleUpdate = async () => {
    if (
      !deliveryUserInfo.name ||
      !deliveryUserInfo.uid ||
      !deliveryUserInfo.phone
    ) {
      toast({
        variant: "destructive",
        description: "Name, Unique ID, and Phone are required",
      });
      return;
    }

    try {
        setUpdateLoading(true);
      await updateDeliveryUser({
        id: deliveryUserInfo.id,
        name: deliveryUserInfo.name,
        uid: deliveryUserInfo.uid,
        age: parseInt(deliveryUserInfo.age.toString(), 10) || 0,
        phone: deliveryUserInfo.phone,
        contact_address: deliveryUserInfo.contact_address || "",
        status: deliveryUserInfo.status
      });
      toast({
        title: "Success",
        description: "Delivery user updated successfully",
      });
    } catch (error) {
        setUpdateLoading(false);
      toast({
        variant: "destructive",
        description: "Failed to update delivery user",
      });
    }finally{
        setUpdateLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            Back to Deliveryuser list
          </div>
          <h1 className="text-headercolor font-bold text-xl"></h1>
        </div>
      </div>
      <form>
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Description
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full">
                  <CustomUpdateInput
                    name="name"
                    label="DeliveryUser Name"
                    type="text"
                    placeHolder={deliveryUserInfo.name}
                    value={deliveryUserInfo.name}
                    onChange={(e) =>
                      setDeliveryUserInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="uid"
                    label="Unique ID"
                    type="text"
                    placeHolder={deliveryUserInfo.uid}
                    value={deliveryUserInfo.uid}
                    onChange={(e) =>
                      setDeliveryUserInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="age"
                    label="Age"
                    type="number"
                    placeHolder={deliveryUserInfo.age.toString()}
                    value={deliveryUserInfo.age}
                    onChange={(e) =>
                      setDeliveryUserInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="phone"
                    label="Phone"
                    type="text"
                    placeHolder={deliveryUserInfo.phone}
                    value={deliveryUserInfo.phone}
                    onChange={(e) =>
                      setDeliveryUserInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <CustomUpdateTextArea
                  placeHolder={deliveryUserInfo.contact_address}
                  value={deliveryUserInfo.contact_address}
                  onChange={(e) =>
                    setDeliveryUserInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  label="DeliveryUser Contact Address"
                  name="contact_address"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          type="button"
          disabled={updateLoading}
          onClick={handleUpdate}
          className="rounded-md flex items-center mt-4 justify-center text-white bg-inputlabel min-w-[7rem]"
        >
          {updateLoading ? (
            <Loader className="animate-spin" size={25} />
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </section>
  );
};
export default DeliveryUserDetailForm;
