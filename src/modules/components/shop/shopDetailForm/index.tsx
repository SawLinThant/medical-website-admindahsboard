import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { CREATE_SHOP_IMAGES } from "@/lib/apolloClient/mutation/shopMutation";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import {
  useGetImagesByShopId,
  useGetShopById,
  useGetShopCategories,
  useGetUsersByShopId,
} from "@/lib/hooks/useGetQuery";
import { useDeleteShopImageById } from "@/lib/hooks/useMutation/shop/useDeleteImageById";
import { useUpdateShopById } from "@/lib/hooks/useMutation/shop/useUpdateShop";
import { useUpdateUserByShopId } from "@/lib/hooks/useMutation/user/useUpdateUser";
import BackButton from "@/modules/common/components/button/backButton";
import CustomUpdateInput from "@/modules/common/components/custom-update-input";
import CustomUpdateTextArea from "@/modules/common/components/custom-update-textarea";
import Combobox from "@/modules/common/components/dropdown";
import FileuploadField from "@/modules/common/components/fileupload-field";
import { useMutation } from "@apollo/client";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface CreateUserVariables {
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  shop_id: string;
}

interface Shop {
  id: string;
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
  category_id: string;
  remark: string;
  shop_admin_name: string;
  shop_category: {
    id: string;
    name: string;
  };
}

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
}

interface ShopDetailFormPops {
  id: string;
}

const ShopDetailForm: React.FC<ShopDetailFormPops> = ({
  id,
}: ShopDetailFormPops) => {
  const [file, setFile] = useState<File[]>([]);
  const [bannerImage, setBannerImage] = useState<File[]>([]);
  const [shopCategory, setShopCategory] = useState<string>("");
  const { shopCategories } = useGetShopCategories();
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const { uploadToS3 } = useUploadToS3();
  const { toast } = useToast();
  const [createImage] = useMutation(CREATE_SHOP_IMAGES);
  const { user } = useGetUsersByShopId(id);
  const { shop, refetchShop } = useGetShopById(id);
  const { updateShopById, loadingUpdateShop } = useUpdateShopById();
  const { updateUserByShopId } = useUpdateUserByShopId();
  const { images, refetchImage } = useGetImagesByShopId(id);
  const { deleteImageById, loadingDeleteImage } = useDeleteShopImageById();

  const [shopInfo, setShopInfo] = useState<Shop>({
    id: "",
    name: "",
    logo: "",
    description: "",
    address: "",
    phone: "",
    category_id: "",
    remark: "",
    shop_admin_name: "",
    shop_category: {
      id: "",
      name: "",
    },
  });
  useEffect(() => {
    if (shop) {
      setShopInfo(shop);
    }
  }, [shop]);

  const [userInfo, setUserInfo] = useState<User>({
    id: "",
    username: "",
    email: "",
    phone: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  const handeInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShopInfo((prev) => ({
      ...prev,
      [value]: name,
    }));
  };

  const handleDeleteImage = async (id: string) => {
    const deleteResponse = await deleteImageById(id);
    console.log(deleteResponse)
    if (deleteResponse) refetchImage();
  };

  const handleFileUpload = (files: FileList) => {
    setFile((prev) => [...prev, ...Array.from(files)]);
  };

  const handleSingleFileUpload = (files: FileList) => {
    setBannerImage((prev) => [...prev, ...Array.from(files)]);
  };

  const handleRemoveImage = (id: number) => {
    setFile((prev) => prev.filter((image, index) => index !== id));
  };

  const handleRemoveSingleImage = (id: number) => {
    setBannerImage((prev) => prev.filter((image, index) => index !== id));
  };

  const handleResetForm = () => {
    setFile([]);
    setBannerImage([]);
    file.forEach((image) => URL.revokeObjectURL(URL.createObjectURL(image)));
    bannerImage.forEach((image) =>
      URL.revokeObjectURL(URL.createObjectURL(image))
    );
  };

  const handleImageUpload = async (id: string) => {
    const uploadedUrls: string[] = [];
    for (const image of file) {
      const url = await uploadToS3(image);
      if (url) {
        uploadedUrls.push(url);
        await createImage({
          variables: {
            shop_id: id,
            image_url: url,
          },
        });
      }
    }
    console.log("Uploaded image URLs:", uploadedUrls);
  };

  const handleDeleteBanner = async() => {
    const response = await updateShopById({
        id: id,
        name: shopInfo.name,
        logo: "",
        description: shopInfo.description,
        address: shopInfo.address,
        phone: shopInfo.phone,
        category_id:shopCategory === ""? shopInfo.category_id: shopCategory,
        remark: shopInfo.remark,
        shop_admin_name: shopInfo.shop_admin_name,
      });
      if(response){
        refetchShop()
      }
  }

  const handleUpdate = async () => {
    try {
      setUpdateLoading(true);
      let bannerUrl = "";
      if(bannerImage.length>0){
        const uploadedBannerUrl = await uploadToS3(bannerImage[0])
        if(uploadedBannerUrl)bannerUrl = uploadedBannerUrl
      }
      const response = await updateShopById({
        id: id,
        name: shopInfo.name,
        logo: bannerUrl ===""? shopInfo.logo: bannerUrl,
        description: shopInfo.description,
        address: shopInfo.address,
        phone: shopInfo.phone,
        category_id:shopCategory === ""? shopInfo.category_id: shopCategory,
        remark: shopInfo.remark,
        shop_admin_name: shopInfo.shop_admin_name,
      });
      if (response) {
        const updateUserResponse = await updateUserByShopId({
          shop_id: id,
          username: userInfo.username,
          email: userInfo.email,
          phone: userInfo.phone,
          role: userInfo.role,
          updated_at: new Date(Date.now()).toISOString(),
        });
        if (updateUserResponse) {
          await Promise.all([handleImageUpload(id)]);
          refetchImage();
          refetchShop();
          toast({
            description: "Shop updated",
          });
        }
      }
    } catch (error) {
      console.log("Error creating product:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem while creating shop.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      handleResetForm();
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
          <div className="text-sm text-muted-foreground">Back to shop list</div>
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
                <div className="w-1/2">
                  <CustomUpdateInput
                    name="name"
                    label="Shop Name"
                    type="text"
                    placeHolder={shopInfo.name}
                    value={shopInfo.name}
                    onChange={(e) =>
                      setShopInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <CustomUpdateTextArea
                  placeHolder={shopInfo.description}
                  value={shopInfo.description}
                  onChange={(e) =>
                    setShopInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  label="Shop Description"
                  name="description"
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">Category</h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Shop Category</Label>
                  <Combobox
                    label={shopInfo.shop_category?.name}
                    setCategory={setShopCategory}
                    options={shopCategories}
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Shop Address & Contact
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomUpdateInput
                  name="address"
                  label="Shop Address *"
                  type="text"
                  placeHolder={shopInfo.address}
                  value={shopInfo.address}
                  onChange={(e) =>
                    setShopInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />

                <CustomUpdateInput
                  name="shop_phone"
                  label="Shop Phone Number *"
                  type="text"
                  placeHolder={shopInfo.phone}
                  value={shopInfo.phone}
                  onChange={(e) =>
                    setShopInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Shop Admin Detail
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomUpdateInput
                  name="shop_admin_name"
                  label="Full Name"
                  type="text"
                  placeHolder={shopInfo.shop_admin_name}
                  value={shopInfo.shop_admin_name || ""}
                  onChange={(e) =>
                    setShopInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
                <CustomUpdateInput
                  name="email"
                  label="Email *"
                  type="text"
                  placeHolder={userInfo.email}
                  value={userInfo.email || ""}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
                <CustomUpdateInput
                  name="phone"
                  label="Phone Number *"
                  type="text"
                  placeHolder={userInfo.phone}
                  value={userInfo.phone || ""}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Authentication Detail
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomUpdateInput
                  name="username"
                  label="Username *"
                  placeHolder={userInfo.username}
                  value={userInfo.username || ""}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  type="text"
                />

                {/* <CustomUpdateInput
                  name="password"
                  label="Password*"
                  placeHolder="Enter password"
                  type="password"
                /> */}
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Shop Images
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
              <h2 className="font-bold text-lg text-headercolor">
                Shop Banner Image
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8">
                {(bannerImage.length < 1 && shopInfo.logo === "")  ? (
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
                {
                    shopInfo.logo !==""?(
                        <div
                        className="w-[10rem] h-[10rem] relative group"
                      >
                        <Image
                          src={shopInfo.logo}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover rounded-md border"
                          alt="banner logo"
                        />
                        <div
                          onClick={handleDeleteBanner}
                          className="absolute inset-0 flex items-center justify-center hover:cursor-pointer"
                        >
                          <div className="group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100">
                            {loadingUpdateShop ? (
                              <Loader className="animate-spin" />
                            ) : (
                              "Remove"
                            )}
                          </div>
                        </div>
                      </div>
                    ):null
                }
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">Remark</h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomUpdateTextArea
                  label="Remark"
                  name="remark"
                  placeHolder={shopInfo.remark}
                  value={shopInfo.remark || ""}
                  onChange={(e) =>
                    setShopInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-row justify-between">
              <div></div>
              <div className="flex flex-row gap-3">
                <Button
                  type="button"
                  //  onClick={handleResetForm}
                  className="bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]"
                >
                  Delete
                </Button>
                <Button
                  type="button"
                  disabled={updateLoading}
                  onClick={handleUpdate}
                  className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                >
                  {updateLoading ? (
                    <Loader className="animate-spin" size={25} />
                  ) : (
                    "Update"
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
export default ShopDetailForm;
