"use client";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/modules/common/components/button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import { Loader, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateProductCategory } from "@/lib/hooks/useMutation/product/useCreateProductCategory";
//import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import FileuploadField from "@/modules/common/components/fileupload-field";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";

const CreateProductCategoryForm: React.FC = () => {
  // const router = useRouter();
  const [bannerImage, setBannerImage] = useState<File[]>([]);
  const { handleSubmit, register, reset } = useForm();
  const { uploadToS3 } = useUploadToS3();
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const { createProductCategory, errorCreateProductCategory } =
    useCreateProductCategory();
  const handleSingleFileUpload = (files: FileList) => {
    setBannerImage((prev) => [...prev, ...Array.from(files)]);
  };
  const handleRemoveSingleImage = (id: number) => {
    setBannerImage((prev) => prev.filter((image, index) => index !== id));
  };
  console.log("bannerImage", bannerImage);

  const onSubmit = async (data: any) => {
    if(bannerImage.length === 0) {
      toast({
        title: "Please upload an image",
        description: "Please upload an image",
      });
      return;
    }
    try {
      setCreateLoading(true);
      const url = await uploadToS3(bannerImage[0]);
      
      if (url) {
        console.log("url", url);  
        await createProductCategory({
          name: data.name,
          description: data.description,
          image_url: url,
        });
      }
      toast({
        title: "Product category created successfully",
        description: "Product category created successfully",
      });
      reset();
      // router.push("/categories/product-categories");
    } catch (error) {
      console.error("Error creating product category:", error);
      toast({
        title: "Failed to create product category",
        description: "Failed to create product category",
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
            Add New Category
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8">
          <div className="w-[30rem] flex flex-col gap-8">
            <div className="w-full flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Description
              </h2>
              <div className="w-full border h-full border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full">
                  <CustomInput
                    name="name"
                    label="Product Category Name"
                    placeHolder="Enter Product Category Name"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <CustomTextArea
                  placeHolder="Enter Product Category Description Here"
                  label="Product Category Description"
                  name="description"
                  register={register}
                  required
                />
              </div>

                       
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
                <h2 className="font-bold text-lg text-headercolor">
                  Product Category Image
                </h2>
                <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8">
                  {bannerImage.length < 1 ? (
                    <FileuploadField
                      className="w-[10rem]"
                      onFileSelect={handleSingleFileUpload}
                      multiple={true}
                    />
                  ) : null}
                  {bannerImage.map((image, index) => (
                    <div key={index} className="w-[10rem] h-[10rem] relative">
                      <Image
                        src={URL.createObjectURL(image)}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-md border"
                        alt={`Uploaded image ${index + 1}`}
                      />
                      <div
                        onClick={() => handleRemoveSingleImage(index)}
                        className="absolute top-1 right-2 hover:cursor-pointer"
                      >
                        <X size={30} color="black" />
                      </div>
                    </div>
                  ))}
                </div>
              </div> 
            <div className="w-full min-h-20 flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={createLoading}
                    className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                  >
                    {createLoading ? (
                      <Loader className="animate-spin" size={25} />
                    ) : (
                      "Add Category"
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

export default CreateProductCategoryForm;
