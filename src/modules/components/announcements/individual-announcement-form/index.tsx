"use client";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/modules/common/components/button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import PdfUploadField from "@/modules/common/components/pdf-upload-field";
import PdfPreview from "@/modules/common/components/pdf-preview";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import { useCreateAnnouncement } from "@/lib/hooks/useMutation/announcements/useCreateAnnouncements";
import { useGetShops } from "@/lib/hooks/useGetQuery";
import { Label } from "@/components/ui/label";
import Combobox from "@/modules/common/components/dropdown";

const CreateIndividualAnnouncementForm: React.FC = () => {
  const [attachments, setAttachments] = useState<File[]>([]);
  const { handleSubmit, register, reset } = useForm();
  const { uploadToS3 } = useUploadToS3();
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const { shops: allShops } = useGetShops();
  const { createAnnouncement, errorCreateAnnouncement } =
    useCreateAnnouncement();

  const shopOptions = allShops.map((shop: any) => ({
    id: shop.id,
    name: shop.name,
  }));

  

  const [shopId, setShopId] = useState<string>("");

  const handleFileUpload = (files: FileList) => {
    setAttachments((prev) => [...prev, ...Array.from(files)]);
  };

  const handleRemoveFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: any) => {
    if (attachments.length === 0) {
      toast({
        title: "Please upload a PDF file",
        description: "At least one PDF file is required",
      });
      return;
    }
    try {
      setCreateLoading(true);
      const url = await uploadToS3(attachments[0]);

      if (url) {
        console.log("url", url);
        await createAnnouncement({
          subject: data.name,
          description: data.description,
          attachment: url,
          shop_id: shopId,
          type: "individual",
        });
      }
      toast({
        title: "Announcement created successfully",
        description: "Announcement has been created successfully",
      });
      reset();
      setAttachments([]);
    } catch (error) {
      console.error("Error creating announcement:", error);
      toast({
        title: "Failed to create announcement",
        description: "Failed to create announcement",
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
            Add New Announcement
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
                    label="Announcement Subject"
                    placeHolder="Enter Announcement Subject"
                    type="text"
                    register={register}
                    required
                  />
                </div>
                <CustomTextArea
                  placeHolder="Enter Announcement Description Here"
                  label="Announcement Description"
                  name="description"
                  register={register}
                  required
                />
                 <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Product Category</Label>
                  <Combobox
                    label="Select Shop"
                    setCategory={setShopId}
                    options={shopOptions}
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Announcement Attachment
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8">
                {attachments.length < 1 ? (
                  <PdfUploadField
                    className="w-[10rem]"
                    onFileSelect={handleFileUpload}
                    multiple={false}
                  />
                ) : null}
                {attachments.map((file, index) => (
                  <PdfPreview
                    key={index}
                    fileName={file.name}
                    onRemove={() => handleRemoveFile(index)}
                  />
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
                    "Add Announcement"
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

export default CreateIndividualAnnouncementForm;
