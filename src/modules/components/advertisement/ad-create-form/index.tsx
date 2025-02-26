"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { toast, useToast } from "@/hooks/use-toast";
import {
    CREATE_AD_IMAGE,
  CREATE_IMAGE,
  CREATE_PRODUCT,
  CREATE_PRODUCT_TAG,
} from "@/lib/apolloClient/mutation/productMutation";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import {
  useGetCategories,
  useGetProducts,
  useGetShop,
  useGetTags,
} from "@/lib/hooks/useGetQuery";
import { useCreateAdvertisement } from "@/lib/hooks/useMutation/advertisement/useCreateAd";
import { InputTagOptionType } from "@/lib/types";
import AmountInput from "@/modules/common/components/amount-input";
import { BackButton } from "@/modules/common/components/button";
import { DateButton } from "@/modules/common/components/button/date-button";
import { ScheduleButton } from "@/modules/common/components/button/schedule-button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import Combobox from "@/modules/common/components/dropdown";
import FileuploadField from "@/modules/common/components/fileupload-field";
import InputTag from "@/modules/common/components/tag-input";
import { useMutation } from "@apollo/client";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { start } from "repl";

interface AdFormProps {
  shop_id: string;
}

const AdStatus = [
  {
    id: "Active",
    name: "Active",
  },
  {
    id: "Inactive",
    name: "InActive",
  },
  {
    id: "Scheduled",
    name: "Scheduled",
  },
];

const BudgetPackage = [
  {
    id: "120000",
    name: "Package 1",
  },
  {
    id: "140000",
    name: "Package 1 2",
  },
];

const CertificateType = [
  {
    id: "1",
    name: "Certificate One",
  },
  {
    id: "2",
    name: "Certificate Two",
  },
];

const AdForm: React.FC<AdFormProps> = ({ shop_id }) => {
  const { handleSubmit, register, reset } = useForm();
  const [file, setFile] = useState<File[]>([]);
  const [formKey, setFormKey] = useState(0);
  const [adStatus, setAdStatus] = useState<string>("");
  const [shopId, setShopId] = useState<string>("");
  const [productId, setProductId] = useState<string>("");
  const [certificate, setCertificate] = useState<string>("");
  const [budgetpackage, setBudgetPackage] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [duration, setDuration] = useState<string>("");
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const { shop } = useGetShop();
  const { uploadToS3 } = useUploadToS3();
  const [createImage] = useMutation(CREATE_AD_IMAGE);
  console.log(shop);

  const { createAdvertisement } = useCreateAdvertisement();

  const { products, setTake, setFilters, filters, page, setPage, totalCount } =
    useGetProducts();
  const take = 10000;

  useEffect(() => {
    setTake(take);
    setFilters({
      shop_id: shopId || "",
    });
  }, [setFilters, setTake, shopId]);

  const handleResetForm = () => {
    reset();
    setFile([]);
    file.forEach((image) => URL.revokeObjectURL(URL.createObjectURL(image)));
     setFormKey((prevKey) => prevKey + 1);
  };

  const calculateDuration = () => {
    if (!startDate || !endDate) return;

    const diffMs = endDate.getTime() - startDate.getTime();
    if (diffMs < 0) {
      setDuration("Invalid date range");
      return;
    }

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    setDuration(`${days}d ${hours}h ${minutes}m`);
  };

  useEffect(() => {
    if (startDate && endDate) {
      calculateDuration();
    }
  }, [startDate, endDate]);

  const handleRemoveImage = (id: number) => {
    setFile((prev) => prev.filter((image, index) => index !== id));
  };

  const handleFileUpload = (files: FileList) => {
    setFile((prev) => [...prev, ...Array.from(files)]);
  };

  const handleImageUpload = async (id: string) => {
    const uploadedUrls: string[] = [];
    for (const image of file) {
      const url = await uploadToS3(image);
      console.log("public url:",url)
      if (url) {
        uploadedUrls.push(url);
        await createImage({
          variables: {
            ad_id: id,
            url: url,
          },
        });
      }
    }
    console.log("Uploaded image URLs:", uploadedUrls);
  };

  const onSubmit = handleSubmit(async (data) => {
    if (file.length < 1) {
      toast({
        description: "Please upload at least on photo",
      });
      return;
    }
    if (!shopId) {
      toast({
        description: "Please select a shop",
      });
      return;
    }
    if (!productId) {
      toast({
        description: "Please select a product",
      });
      return;
    }
    if (!startDate) {
        toast({
          description: "Please select a start date",
        });
        return;
      }
      if (!endDate) {
        toast({
          description: "Please select an end date",
        });
        return;
      }
    if (!productId) {
      toast({
        description: "Please select a product",
      });
      return;
    }
    try {
      setCreateLoading(true);
      const response = await createAdvertisement({
        name: data.name,
        status: adStatus,
        budget: parseInt(budgetpackage),
        duration: duration,
        shop_id: shopId,
        product_id: productId,
        certification: certificate,
        start_date: new Date(startDate|| "").toISOString(),
        end_date: new Date(endDate|| "").toISOString(),
        approval_number: data.approval_number,
        disclaimer: data.disclaimer,
      });
      if (response) {
        const ad_id = response.id;
        if (ad_id) {
          await Promise.all([handleImageUpload(ad_id)]);
        }
        toast({
            description:"Advertisement Created"
        })
      }
    } catch (error) {
        toast({
            description:"Failed to create advertisement",
            variant:"destructive"
        })
    } finally {
      setCreateLoading(false);
      handleResetForm()
    }
  });

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            Back to Advertisement list
          </div>
          <h1 className="text-headercolor font-bold text-xl">
            Create New Advertisement
          </h1>
        </div>
      </div>
      <form
        // key={formKey}
        onSubmit={onSubmit}
      >
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Ad Basic Information
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full">
                  <CustomInput
                    name="name"
                    label="Product Name"
                    placeHolder="Enter product name"
                    type="text"
                    register={register}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Ad Status</Label>
                  <Combobox
                    label="Select Ad Status"
                    setCategory={setAdStatus}
                    options={AdStatus}
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Budget and Duration
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Budget Allocation</Label>
                  <Combobox
                    label="Select Budget package"
                    setCategory={setBudgetPackage}
                    options={BudgetPackage}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    disabled={true}
                    name="duration"
                    label="Ad Duration"
                    placeHolder={duration ? duration : "-"}
                    type="text"
                  //  register={register}
                  />
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="text-inputlabel">Start Date</Label>
                    <DateButton
                      disableButton={false}
                      loading={createLoading}
                      setSelectedDate={setStartDate}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-inputlabel">End Date</Label>
                    <DateButton
                      disableButton={!startDate}
                      loading={createLoading}
                      setSelectedDate={setEndDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Compliance and Legal Information
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Certification Type</Label>
                  <Combobox
                    label="Select Certification Type"
                    setCategory={setCertificate}
                    options={CertificateType}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name="approval_number"
                    label="Approval Number"
                    placeHolder="Enter R.A Number"
                    type="text"
                    register={register}
                  />
                </div>
                <CustomTextArea
                  placeHolder="Enter Disclaimer Here"
                  label="Ad Disclaimer"
                  name="disclaimer"
                  register={register}
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Shop and Product Assignment
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Assign Shop</Label>
                  <Combobox
                    label="Select Shop"
                    setCategory={setShopId}
                    options={shop || []}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Assign Product</Label>
                  <Combobox
                    label="Select Product"
                    setCategory={setProductId}
                    options={products}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Advertisement Media
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8">
                <FileuploadField
                  className="w-[10rem]"
                  onFileSelect={handleFileUpload}
                  multiple={true}
                />
                {file.map((image, index) => (
                  <div key={index} className="w-[10rem] h-[10rem] relative">
                    <Image
                      src={URL.createObjectURL(image)}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-md border"
                      alt={`Uploaded image ${index + 1}`}
                    />
                    <div
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-2 hover:cursor-pointer"
                    >
                      <X size={30} color="black" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-row justify-between">
              <div>
                <Button
                  type="button"
                  onClick={handleResetForm}
                  className="bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]"
                >
                  Discard
                </Button>
              </div>
              <div className="flex flex-row gap-3">
                {/* <ScheduleButton
                  loading={createLoading}
                  setSelectedDate={setSelectedDate}
                /> */}
                <Button
                  type="submit"
                  disabled={createLoading}
                  className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                >
                  {createLoading ? (
                    <Loader className="animate-spin" size={25} />
                  ) : (
                    "Create AD"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default AdForm;
