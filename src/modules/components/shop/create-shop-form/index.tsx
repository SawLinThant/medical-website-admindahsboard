import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { CREATE_SHOP_IMAGES } from "@/lib/apolloClient/mutation/shopMutation";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import { useGetShopCategories } from "@/lib/hooks/useGetQuery";
import { useCreateShop } from "@/lib/hooks/useMutation/shop/useCreateShop";
import { useCreateUser } from "@/lib/hooks/useMutation/user/useCreateuser";
import BackButton from "@/modules/common/components/button/backButton";
import { ScheduleButton } from "@/modules/common/components/button/schedule-button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import Combobox from "@/modules/common/components/dropdown";
import FileuploadField from "@/modules/common/components/fileupload-field";
import { useMutation } from "@apollo/client";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface CreateUserVariables {
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  shop_id: string;
}

const ShopForm: React.FC = () => {
  const [formKey, setFormKey] = useState(0);
  const [file, setFile] = useState<File[]>([]);
  const [bannerImage, setBannerImage] = useState<File[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [shopCategory, setShopCategory] = useState<string>("");
  const { shopCategories } = useGetShopCategories();
  const { createShop } = useCreateShop();
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const { uploadToS3 } = useUploadToS3();
  const { createUser } = useCreateUser();
  const { handleSubmit, register, reset } = useForm();
  const { toast } = useToast();
  const [createImage] = useMutation(CREATE_SHOP_IMAGES);

  console.log(shopCategory);

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
    reset();
    setFile([]);
    setBannerImage([]);
    file.forEach((image) => URL.revokeObjectURL(URL.createObjectURL(image)));
    bannerImage.forEach((image) =>
      URL.revokeObjectURL(URL.createObjectURL(image))
    );
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
            shop_id: id,
            image_url: url,
          },
        });
      }
    }
    console.log("Uploaded image URLs:", uploadedUrls);
  };

  const handleCreateUser = async (variables: CreateUserVariables) => {
    await createUser({
      username: variables.username,
      email: variables.email,
      password: variables.password,
      role: variables.role,
      phone: variables.phone,
      shop_id: variables.shop_id,
    });
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!file.length)
      return toast({
        title: "Invalid Data",
        description: "Please choose at least one photo.",
      });
    if (!bannerImage.length)
      return toast({
        title: "Invalid Data",
        description: "Please upload banner image.",
      });
    if (!shopCategory)
      return toast({
        title: "Invalid Data",
        description: "Please choose category.",
      });
    if (!selectedDate)
      return toast({
        title: "Invalid Data",
        description: "Please choose a date.",
      });

    try {
      setCreateLoading(true);
      const logoUrl = await uploadToS3(bannerImage[0]);
      if (logoUrl) {
        const shopResponse = await createShop({
          name: data.shop_name,
          logo: logoUrl,
          description: data.description,
          address: data.address,
          phone: data.shop_address,
          created_at: new Date(selectedDate || Date.now()).toISOString(),
          category_id: shopCategory,
          remark: data.remark,
          shop_admin_name: data.shop_admin_name,
        });
        if (shopResponse) {
          const shop_id = shopResponse.id;
          await Promise.all([
            handleCreateUser({
              username: data.username,
              password: data.password,
              email: data.email,
              phone: data.phone,
              role: "shop admin",
              shop_id: shop_id,
            }),
            handleImageUpload(shop_id),
          ]);
        }
        toast({
          description: "Shop created",
        })
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
      setCreateLoading(false);
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
            Back to shop list
          </div>
          <h1 className="text-headercolor font-bold text-xl">
            Add New Shop
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
                    name="shop_name"
                    label="Shop Name"
                    placeHolder="Enter shop name"
                    type="text"
                    register={register}
                  />
                </div>
                <CustomTextArea
                  placeHolder="Enter shop Description Here"
                  label="Shop Description"
                  name="description"
                  register={register}
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">Category</h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Shop Category</Label>
                  <Combobox
                    label="Select Category"
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
                <CustomInput
                  name="address"
                  label="Shop Address *"
                  placeHolder="Enter shop name"
                  type="text"
                  register={register}
                />

                <CustomInput
                  name="shop_phone"
                  label="Shop Phone Number *"
                  placeHolder="Enter shop phone number"
                  type="text"
                  register={register}
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Shop Admin Detail
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomInput
                  name="shop_admin_name"
                  label="Full Name"
                  placeHolder="Enter full name"
                  type="text"
                  register={register}
                />
                <CustomInput
                  name="email"
                  label="Email *"
                  placeHolder="Enter email"
                  type="text"
                  register={register}
                />
                <CustomInput
                  name="phone"
                  label="Phone Number *"
                  placeHolder="Enter phone number"
                  type="text"
                  register={register}
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Authentication Detail
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomInput
                  name="username"
                  label="Username *"
                  placeHolder="Enter username"
                  type="text"
                  register={register}
                />

                <CustomInput
                  name="password"
                  label="Password*"
                  placeHolder="Enter password"
                  type="password"
                  register={register}
                />
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
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">Remark</h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <CustomTextArea
                  placeHolder="Enter remark here"
                  label="Remark"
                  name="remark"
                  register={register}
                />
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
export default ShopForm;
