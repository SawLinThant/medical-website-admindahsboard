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
  useGetAdvertisementById,
  useGetCategories,
  useGetProducts,
  useGetShop,
  useGetTags,
} from "@/lib/hooks/useGetQuery";
import { useDeleteAdvertisementById } from "@/lib/hooks/useMutation/advertisement/useDeleteAd";
import { useDeleteAdImageById } from "@/lib/hooks/useMutation/advertisement/useDeleteAdImage";
import { useUpdateAdvertisementById } from "@/lib/hooks/useMutation/advertisement/useUpdateAd";
import { Advertisements, InputTagOptionType } from "@/lib/types";
import { CustomAlertDialog } from "@/modules/common/components/alert-dialog";
import AmountInput from "@/modules/common/components/amount-input";
import { BackButton } from "@/modules/common/components/button";
import { DateButton } from "@/modules/common/components/button/date-button";
import { ScheduleButton } from "@/modules/common/components/button/schedule-button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import CustomUpdateInput from "@/modules/common/components/custom-update-input";
import CustomUpdateTextArea from "@/modules/common/components/custom-update-textarea";
import Combobox from "@/modules/common/components/dropdown";
import FileuploadField from "@/modules/common/components/fileupload-field";
import InputTag from "@/modules/common/components/tag-input";
import { useMutation } from "@apollo/client";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { start } from "repl";

interface AdFormProps {
  id: string;
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

const AdDetailForm: React.FC<AdFormProps> = ({ id }) => {
  const { handleSubmit, register, reset } = useForm();
  const [file, setFile] = useState<File[]>([]);
  const [formKey, setFormKey] = useState(0);
  const [adStatus, setAdStatus] = useState<string>("");
  const [shopId, setShopId] = useState<string>("");
  const { updateAdvertisement } = useUpdateAdvertisementById();
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
  const { advertisement, refetchAdvertisement } = useGetAdvertisementById(id);
  const { deleteAdImageById, loadingDeleteAdImage } = useDeleteAdImageById();
  const { deleteAdvertisementById, loadingDeleteAdvertisement } =
    useDeleteAdvertisementById();
  const router = useRouter();
  const [adInfo, setAdInfo] = useState<Advertisements>({
    id: "",
    name: "",
    status: "",
    budget: "",
    start_date: "",
    end_date: "",
    duration: "",
    shop_id: "",
    product_id: "",
    certification: "",
    approval_number: "",
    disclaimer: "",
    shop: {
      id: "",
      name: "",
    },
    product: {
      id: "",
      name: "",
    },
  });

  const handleDeleteImage = async (id: string) => {
    const deleteResponse = await deleteAdImageById(id);
    refetchAdvertisement();
    if (deleteResponse) {
      console.log("refetch ad");
      refetchAdvertisement();
    }
  };

  const handleDeleteAdvertisement = async () => {
    const deleteResponse = await deleteAdvertisementById(adInfo.id);
    if (deleteResponse) {
      router.push("/advertisement/ad-list");
    }
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
    if (advertisement) {
      setAdInfo(advertisement);
      setStartDate(new Date(advertisement.start_date) || "");
      setEndDate(new Date(advertisement.end_date) || "");
      setBudgetPackage(advertisement.budget);
      setAdStatus(advertisement.status);
      setCertificate(advertisement.certification);
      setShopId(advertisement.shop_id);
      setProductId(advertisement.product_id);
    }
  }, [advertisement]);
  useEffect(() => {
    if (startDate && endDate) {
      calculateDuration();
    }
  }, [startDate, endDate]);

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

  const handleUpdate = async () => {
    try {
      setCreateLoading(true);
      setCreateLoading(true);

      const response = await updateAdvertisement({
        id: id,
        name: adInfo.name,
        status: adStatus,
        budget: parseInt(budgetpackage),
        duration: duration,
        shop_id: shopId,
        product_id: productId,
        certification: certificate,
        start_date: new Date(startDate || "").toISOString(),
        end_date: new Date(endDate || "").toISOString(),
        approval_number: adInfo.approval_number,
        disclaimer: adInfo.disclaimer,
      });

      if (response) {
        if (file.length > 0) {
          await handleImageUpload(id);
        }
        toast({
          description: "Ad Updated",
        });
        window.location.reload();
      }
    } catch (error) {
      toast({
        description: "Failed to update advertisement",
        variant: "destructive",
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
      //   onSubmit={onSubmit}
      >
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Ad Basic Information
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full">
                  <CustomUpdateInput
                    name="name"
                    label="Product Name"
                    placeHolder={adInfo.name}
                    type="text"
                    value={adInfo.name}
                    onChange={(e) =>
                      setAdInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Ad Status</Label>
                  <Combobox
                    label={advertisement?.status || ""}
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
                    label={advertisement?.budget || ""}
                    setCategory={setBudgetPackage}
                    options={BudgetPackage}
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="duration"
                    label="Ad Duration"
                    placeHolder={adInfo.duration}
                    type="text"
                    value={duration}
                    disabled={true}
                    onChange={(e) =>
                      setAdInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="text-inputlabel">Start Date</Label>
                    <DateButton
                      defaultValue={
                        startDate ? new Date(startDate).toDateString() : ""
                      }
                      disableButton={false}
                      loading={createLoading}
                      setSelectedDate={setStartDate}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-inputlabel">End Date</Label>
                    <DateButton
                      defaultValue={
                        endDate ? new Date(endDate).toDateString() : ""
                      }
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
                  <CustomUpdateInput
                    name="approval_number"
                    label="Approval Number"
                    placeHolder={adInfo.approval_number}
                    type="text"
                    value={adInfo.approval_number}
                    onChange={(e) =>
                      setAdInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <CustomUpdateTextArea
                  placeHolder="Enter Disclaimer Here"
                  label="Ad Disclaimer"
                  name="disclaimer"
                  value={adInfo.disclaimer || ""}
                  onChange={(e) =>
                    setAdInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
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
                    label={adInfo.shop?.name || ""}
                    setCategory={setShopId}
                    options={shop || []}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Assign Product</Label>
                  <Combobox
                    label={adInfo.product?.name || ""}
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
                {adInfo.ad_images &&
                  adInfo.ad_images.map((image, index) => (
                    <div
                      key={index}
                      className="w-[10rem] h-[10rem] relative group"
                    >
                      <Image
                        src={image.url}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-md border"
                        alt={`Uploaded image ${index + 1}`}
                      />
                      <div
                        onClick={() => handleDeleteImage(image.id)}
                        className="absolute inset-0 flex items-center justify-center hover:cursor-pointer"
                      >
                        <div className="group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100">
                          {loadingDeleteAdImage ? (
                            <Loader className="animate-spin" />
                          ) : (
                            "Remove"
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-row justify-between">
              <div className="min-w-[7rem]">
                <CustomAlertDialog
                  label="Delete"
                  heading="Are you sure you want to delete this advertisement?"
                  caption="This action will permanently delete this advertisement"
                  actionDescription="Deleting the advertisement"
                  action={handleDeleteAdvertisement}
                  actionLoading={loadingDeleteAdvertisement}
                />
              </div>
              <div className="flex flex-row gap-3">
                {/* <ScheduleButton
                  loading={createLoading}
                  setSelectedDate={setSelectedDate}
                /> */}
                <Button
                  type="submit"
                  onClick={handleUpdate}
                  disabled={createLoading}
                  className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                >
                  {createLoading ? (
                    <Loader className="animate-spin" size={25} />
                  ) : (
                    "Update AD"
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
export default AdDetailForm;
