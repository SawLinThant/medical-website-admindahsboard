"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import {
  CREATE_IMAGE,
  CREATE_PRODUCT_TAG,
} from "@/lib/apolloClient/mutation/productMutation";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import {
  useGetCategories,
  useGetImagesByProductId,
  useGetProductById,
  useGetTags,
  useGetTagsByProductId,
} from "@/lib/hooks/useGetQuery";
import { useDeleteImageById } from "@/lib/hooks/useMutation/product/useDeleteImageById";
import { useDeleteProductById } from "@/lib/hooks/useMutation/product/useDeleteProduct";
import { useDeleteProductTag } from "@/lib/hooks/useMutation/product/useDeleteProductTag";
import { useUpdateProduct } from "@/lib/hooks/useMutation/product/useUpdateProduct";
import { InputTagOptionType } from "@/lib/types";
import { CustomAlertDialog } from "@/modules/common/components/alert-dialog";
import AmountUpdateInput from "@/modules/common/components/amount-update-input";
import { BackButton } from "@/modules/common/components/button";
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

type ProductDetailFormProps = {
  id: string;
};

interface ProductInfo {
  id: string;
  name: string;
  price: number;
  bulk_price?: number;
  quantity: number;
  description?: string;
  dosage?: string;
  usage?: string;
  storage?: string;
  category_id: string;
  category: {
    id: string;
    name: string;
  };
}

const ProductDetailForm: React.FC<ProductDetailFormProps> = ({
  id,
}: ProductDetailFormProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [category, setCategory] = useState<string>("");
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const { uploadToS3 } = useUploadToS3();
  const { tags } = useGetTags();
  const { categories } = useGetCategories();
  const { toast } = useToast();
  const { updateProduct } = useUpdateProduct();
  const [createProductTag] = useMutation(CREATE_PRODUCT_TAG);
  const { deleteProductTag } = useDeleteProductTag();
  const [createImage] = useMutation(CREATE_IMAGE);
  const { deleteProductById, loadingDeleteProduct } = useDeleteProductById();
  const router = useRouter();

  const { product, refetchProduct } = useGetProductById(id);
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    id: "",
    name: "",
    price: 0,
    bulk_price: 0,
    quantity: 0,
    description: "",
    dosage: "",
    usage: "",
    storage: "",
    category_id: "",
    category: {
      id: "",
      name: "",
    },
  });

  const { images, refetchImage } = useGetImagesByProductId(id);
  const { deleteImageById, loadingDeleteImage } = useDeleteImageById();

  const { tagsById, loadingTags } = useGetTagsByProductId(id);
  const [selectedTags, setSelectedTags] = useState<InputTagOptionType[]>([]);
  const handleTagChange = (newTags: InputTagOptionType[]) => {
    setSelectedTags(newTags);
  };

  useEffect(() => {
    if (tagsById) {
      setSelectedTags(tagsById);
    }
  }, [loadingTags]);

  useEffect(() => {
    if (product) setProductInfo(product);
  }, [product]);

  const handleDeleteProduct = async () => {
    const deleteResponse = await deleteProductById(productInfo.id);
    if (deleteResponse) {
      router.push("/product-management/product/product-list");
    }
  };

  const handleFileUpload = (files: FileList) => {
    setFile((prev) => [...prev, ...Array.from(files)]);
  };

  const handleRemoveTag = (id: number) => {
    setSelectedTags((prev) => prev.filter((tag, index) => index !== id));
  };

  const handleRemoveImage = (id: number) => {
    setFile((prev) => prev.filter((image, index) => index !== id));
  };

  const handleDeleteImage = async (id: string) => {
    const deleteResponse = await deleteImageById(id);
    if (deleteResponse) refetchImage();
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
  };

  const handleResetImage = () => {
    setFile([]);
    file.forEach((image) => URL.revokeObjectURL(URL.createObjectURL(image)));
  };

  const handleProductTagUpdate = async (product_id: string) => {
    if (!tagsById || !selectedTags) return;
    const tagsToAdd = selectedTags.filter(
      (selectedTags) =>
        !tagsById.some((tagById) => tagById.id === selectedTags.id)
    );
    const tagsToDelete = tagsById.filter(
      (tagById) =>
        !selectedTags.some((selectedTag) => selectedTag.id === tagById.id)
    );

    for (const tag of tagsToAdd) {
      await createProductTag({
        variables: {
          product_id,
          tag_id: tag.id,
        },
      });
    }

    for (const tag of tagsToDelete) {
      await deleteProductTag(id, tag.id);
    }
  };

  const handleUpdate = async () => {
    try {
      setUpdateLoading(true);
      const updateResponse = await updateProduct({
        id: id,
        name: productInfo.name,
        price: productInfo.price,
        bulk_price: productInfo.bulk_price,
        quantity: 1,
        description: productInfo.description,
        dosage: productInfo.dosage,
        usage: productInfo.usage,
        storage: productInfo.storage,
        updated_at: new Date(Date.now()).toISOString(),
        category_id: category === "" ? productInfo.category_id : category,
      });
      if (updateResponse) {
        handleProductTagUpdate(id);
        await Promise.all([handleImageUpload(id)]);
        handleResetImage();
        refetchProduct();
        refetchImage();
        toast({
          description: "Product updated",
        });
      }
    } catch (error) {
      console.log("Error creating product:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem while creating product.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
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
            Back to product list
          </div>
          <h1 className="text-headercolor font-bold text-xl">Product Detail</h1>
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
                <div className="w-1/2">
                  <CustomUpdateInput
                    name="name"
                    label="Product Name"
                    placeHolder={productInfo.name}
                    type="text"
                    value={productInfo.name}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <CustomUpdateTextArea
                  placeHolder="Enter Porduct Description Here"
                  label="Product Description"
                  name="description"
                  value={productInfo.description || ""}
                  onChange={(e) =>
                    setProductInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
                <div className="w-full">
                  <CustomUpdateInput
                    name="dosage"
                    label="Dosage"
                    placeHolder={productInfo.dosage || ""}
                    type="text"
                    value={productInfo.dosage || ""}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="usage"
                    label="Usage"
                    placeHolder={productInfo.usage || ""}
                    type="text"
                    value={productInfo.usage || ""}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="storage"
                    label="Storage"
                    placeHolder={productInfo.storage || ""}
                    type="text"
                    value={productInfo.storage || ""}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
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
                    label={productInfo.category?.name}
                    setCategory={setCategory}
                    options={categories}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Tags</Label>
                  <InputTag
                    removeTag={handleRemoveTag}
                    setTag={handleTagChange}
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
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[10rem] h-[10rem] relative group"
                  >
                    <Image
                      src={image.image_url}
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
                        {loadingDeleteImage ? (
                          <Loader className="animate-spin" />
                        ) : (
                          "Remove"
                        )}
                      </div>
                    </div>
                  </div>
                ))}
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
                  <AmountUpdateInput
                    label="Price"
                    name="price"
                    placeHolder="000.00"
                    value={productInfo.price}
                    //  onChange={onInputValueChage}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                  <AmountUpdateInput
                    label="Bulk Price"
                    name="bulk_price"
                    placeHolder="000.00"
                    value={productInfo.bulk_price}
                    // onChange={onInputValueChage}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-row justify-between">
              <div></div>
              <div className="flex flex-row gap-3">
                <div className="min-w-[7rem]">
                  <CustomAlertDialog
                    label="Delete"
                    heading="Are you sure you want to delete this product?"
                    caption="This action will permanently delete this product from the shop"
                    actionDescription="Deleting the product"
                    action={handleDeleteProduct}
                    actionLoading={loadingDeleteProduct}
                  />
                </div>

                <Button
                  type="button"
                  onClick={handleUpdate}
                  disabled={updateLoading}
                  className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                >
                  {updateLoading ? (
                    <Loader className="animate-spin" size={25} />
                  ) : (
                    "Save"
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

export default ProductDetailForm;
