"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { options } from "@/lib/constant";
import useGetTags from "@/lib/hooks/useGetQuery";
import AmountInput from "@/modules/common/components/amount-input";
import { BackButton } from "@/modules/common/components/button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import Combobox from "@/modules/common/components/dropdown";
import FileuploadField from "@/modules/common/components/fileupload-field";
import InputTag from "@/modules/common/components/tag-input";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const ProductForm: React.FC = () => {
  const [file, setFile] = useState<File[]>([]);
  const {handleSubmit:handleCreateSubmit,register:createRegister} = useForm()

  // const {tags,loading} = useGetTags();
  // console.log(tags)

  const handleFileUpload = (files: FileList) => {
    const newFiles = Array.from(files);
    setFile((prev) => [...prev, ...newFiles]);
  };

  const handleCreate = handleCreateSubmit(async(data) => {
    try{
        console.log(data.name)
        console.log(data.description)
        console.log(data.price)
        console.log(data.bulk_price)
    }catch(error){
      console.log("Error creating product:",error)
      throw new Error("error creating product")
    }finally{

    }
  })
  
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
      <form onSubmit={handleCreate}>
      <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
        <div className="w-[30rem] h-full flex flex-col gap-8">
          <div className="w-full min-h-20 flex flex-col gap-2">
            <h2 className="font-bold text-lg text-headercolor">Description</h2>
            <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
              <div className="w-1/2">
                <CustomInput
                  name="name"
                  label="Product Name"
                  placeHolder="Enter product name"
                  type="text"
                  register={createRegister}
                />
              </div>
              <CustomTextArea
                placeHolder="Enter Porduct Description Here"
                label="Product Description"
                name="description"
                register={createRegister}
              />
            </div>
          </div>
          <div className="w-full min-h-20 flex flex-col gap-2">
            <h2 className="font-bold text-lg text-headercolor">
              Category & Tag
            </h2>
            <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
              <div className="w-full flex flex-col gap-2">
                <Label className="text-inputlabel">Product Category</Label>
                <Combobox options={options} />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label className="text-inputlabel">Tags</Label>
                <InputTag options={options} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30rem] h-full flex flex-col gap-8">
          <div className="w-full min-h-20 flex flex-col gap-2">
            <h2 className="font-bold text-lg text-headercolor">
              Product Images
            </h2>
            <div className="w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8">
              <FileuploadField
                className="w-[10rem]"
                onFileSelect={handleFileUpload}
                multiple={true}
              />
            </div>
          </div>
          <div className="w-full min-h-20 flex flex-col gap-2">
            <h2 className="font-bold text-lg text-headercolor">Pricing</h2>
            <div className="w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8">
              <div className="w-full grid grid-cols-2 gap-4">
                <AmountInput register={createRegister} label="Price" name="price" placeHolder="000.00"/>
                <AmountInput register={createRegister} label="Bulk Price" name="bulk_price" placeHolder="000.00"/>
              </div>
            </div>
          </div>
          <div className="w-full min-h-20 flex flex-row justify-between">
            <div><Button className="bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]">Discard</Button></div>
            <div className="flex flex-row gap-3">
              <Button className="bg-slate-200 text-inputlabel rounded-md min-w-[7rem] hover:text-white">Shcedule</Button>
              <Button type="submit" className="rounded-md text-white bg-inputlabel min-w-[7rem]">Add Product</Button>
            </div>
          </div>
        </div>
      </div>
      </form>
      
    </section>
  );
};
export default ProductForm;
