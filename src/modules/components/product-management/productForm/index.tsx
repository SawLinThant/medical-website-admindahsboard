"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import {
  CREATE_IMAGE,
  CREATE_PRODUCT,
  CREATE_PRODUCT_TAG,
} from "@/lib/apolloClient/mutation/productMutation";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import { useGetCategories, useGetTags } from "@/lib/hooks/useGetQuery";
import { InputTagOptionType } from "@/lib/types";
import AmountInput from "@/modules/common/components/amount-input";
import { BackButton } from "@/modules/common/components/button";
import { ScheduleButton } from "@/modules/common/components/button/schedule-button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import Combobox from "@/modules/common/components/dropdown";
import FileuploadField from "@/modules/common/components/fileupload-field";
import InputTag from "@/modules/common/components/tag-input";
import { useMutation } from "@apollo/client";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ProductFormProps {
  shop_id: string
}

const ProductForm: React.FC<ProductFormProps> = ({shop_id}) => {
  const [formKey, setFormKey] = useState(0);
  const [file, setFile] = useState<File[]>([]);
  const [selectedTags, setSelectedTags] = useState<InputTagOptionType[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [category, setCategory] = useState<string>("");
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const { uploadToS3 } = useUploadToS3();
  const { tags } = useGetTags();
  const { categories } = useGetCategories();
  const { handleSubmit, register, reset } = useForm();
  const { toast } = useToast();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [createProductTag] = useMutation(CREATE_PRODUCT_TAG);
  const [createImage] = useMutation(CREATE_IMAGE);

  console.log("shop_id:",shop_id)

  const handleFileUpload = (files: FileList) => {
    setFile((prev) => [...prev, ...Array.from(files)]);
  };

  const handleRemoveTag = (id: number) => {
    setSelectedTags((prev) => prev.filter((tag, index) => index !== id));
  };

  const handleRemoveImage = (id: number) => {
    setFile((prev) => prev.filter((image, index) => index !== id));
  };

  const handleResetForm = () => {
    reset();
    setFile([]);
    file.forEach((image) => URL.revokeObjectURL(URL.createObjectURL(image)));
    setFormKey((prevKey) => prevKey + 1);
  };

  const handleImageUpload = async (id: string) => {
    const uploadedUrls: string[] = [];
    for (const image of file) {
      const url = await uploadToS3(image);
      if (url) {
        uploadedUrls.push(url);
        await createImage({
          variables: {
            product_id: id,
            image_url: url,
          },
        });
      }
    }
    console.log("Uploaded image URLs:", uploadedUrls);
  };

  const handleProductTagCreation = async (product_id: string) => {
    for (const tag of selectedTags) {
      await createProductTag({
        variables: {
          product_id: product_id,
          tag_id: tag.id,
        },
      });
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!file.length)
      return toast({
        title: "Invalid Data",
        description: "Please choose at least one photo.",
      });
    if (!category)
      return toast({
        title: "Invalid Data",
        description: "Please choose category.",
      });
    if (!selectedDate)
      return toast({
        title: "Invalid Data",
        description: "Please choose a date.",
      });
    if (selectedTags.length < 1)
      return toast({
        title: "Invalid Data",
        description: "Please choose at least one tag.",
      });

    try {
      setCreateLoading(true);
      const productResponse = await createProduct({
        variables: {
          name: data.name,
          price: data.price,
          bulk_price: data.bulk_price,
          quantity: 1,
          description: data.description,
          dosage:  data.dosage,
          usage:  data.usage,
           storage:  data.storage,
          created_at: new Date(selectedDate || Date.now()).toISOString(),
          shop_id: shop_id,
          category_id: category,
        },
      });

      const product_id = productResponse.data?.insert_products_one?.id;

      if (product_id) {
        await Promise.all([
          handleImageUpload(product_id),
          handleProductTagCreation(product_id),
        ]);
      }
      toast({
        description: "Product created",
      });
    } catch (error) {
      console.log("Error creating product:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem while creating product.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
     // handleResetForm();
      setCreateLoading(false);
    }
  });

  console.log(selectedTags);

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            Back to product list
          </div>
          <h1 className="text-headercolor font-bold text-xl">
            Add New Product
          </h1>
        </div>
      </div>
      <form key={formKey} onSubmit={onSubmit}>
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Description
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-1/2">
                  <CustomInput
                    name="name"
                    label="Product Name"
                    placeHolder="Enter product name"
                    type="text"
                    register={register}
                  />
                </div>
                <CustomTextArea
                  placeHolder="Enter Porduct Description Here"
                  label="Product Description"
                  name="description"
                  register={register}
                />
                <div className="w-full">
                  <CustomInput
                    name="dosage"
                    label="Dosage"
                    placeHolder="Enter Dosage"
                    type="text"
                    register={register}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name="usage"
                    label="Usage"
                    placeHolder="Enter Usage"
                    type="text"
                    register={register}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name="storage"
                    label="Storage"
                    placeHolder="Enter Storage"
                    type="text"
                    register={register}
                  />
                </div>
              </div>
             
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Category & Tag
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Product Category</Label>
                  <Combobox
                    label="Select Category"
                    setCategory={setCategory}
                    options={categories}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Tags</Label>
                  <InputTag
                    removeTag={handleRemoveTag}
                    setTag={setSelectedTags}
                    options={tags}
                    selectedTag={selectedTags}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Product Images
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
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">Pricing</h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8">
                <div className="w-full grid grid-cols-2 gap-4">
                  <AmountInput
                    register={register}
                    label="Price"
                    name="price"
                    placeHolder="000.00"
                  />
                  <AmountInput
                    register={register}
                    label="Bulk Price"
                    name="bulk_price"
                    placeHolder="000.00"
                  />
                </div>
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
                <ScheduleButton
                  loading={createLoading}
                  setSelectedDate={setSelectedDate}
                />
                <Button
                  type="submit"
                  disabled={createLoading}
                  className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                >
                  {createLoading ? (
                    <Loader className="animate-spin" size={25} />
                  ) : (
                    "Add Product"
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
export default ProductForm;
