"use client";

import {
  useGetNotificationById,
  useUpdateNotificationById,
} from "@/lib/hooks/getNotification";
import { NoificationType } from "@/lib/types";
import BackButton from "@/modules/common/components/button/backButton";
import CustomUpdateInput from "@/modules/common/components/custom-update-input";
import CustomUpdateTextArea from "@/modules/common/components/custom-update-textarea";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Label } from "recharts";

const NotificationDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { notification } = useGetNotificationById(id);
  const { updateNotification, loading: updateNotificationLoading } =
    useUpdateNotificationById();

  const [notiInfo, setNotiInfo] = useState<NoificationType>({
    id: "",
    type: "",
    shop_id: "",
    description: "",
    created_at: "",
    is_read: false,
    order_id: "",
    sender: "",
    title: "",
    annoucement_id: "",
  });

  useEffect(() => {
    if (notification) {
      setNotiInfo(notification);
    }
  }, [notification]);

  useEffect(() => {
    if (notiInfo && !notiInfo.is_read) {
      const markAsRead = async () => {
        try {
          await updateNotification({
            id,
            is_read: true,
          });
          setNotiInfo((prev) => ({
            ...prev,
            is_read: true,
          }));
        } catch (error) {
          console.error("Failed to mark notification as read:", error);
        }
      };
      markAsRead();
    }
  }, [notiInfo]);

  if (updateNotificationLoading)
    return (
      <div className="w-[70vw] h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            Back to Notification list
          </div>
          <h1 className="text-headercolor font-bold text-xl">
            N{notiInfo.id.slice(0, 7)}...
          </h1>
        </div>
      </div>
      {notiInfo && notiInfo.type.toLowerCase() === "announcement" && (
        <form>
          <div className="w-full grid lg:grid-cols-1 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
            <div className="w-full h-full flex flex-col gap-8">
              <div className="w-full min-h-20 flex flex-col gap-2">
                <h2 className="font-bold text-lg text-headercolor">
                  Notification Detail
                </h2>
                <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Type"
                      placeHolder={notiInfo.type}
                      type="text"
                      value={notiInfo.type}
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Subject"
                      placeHolder={notiInfo.title}
                      type="text"
                      value={notiInfo.title}
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Sender"
                      placeHolder={notiInfo.sender}
                      type="text"
                      value={notiInfo.sender}
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Date Received"
                      placeHolder={new Date(
                        notiInfo.created_at
                      ).toLocaleDateString()}
                      type="text"
                      value={notiInfo.created_at}
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <CustomUpdateTextArea
                    placeHolder="Enter Disclaimer Here"
                    label="Notification Message"
                    name="disclaimer"
                    value={notiInfo.description || ""}
                    onChange={(e) =>
                      setNotiInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      {notiInfo && notiInfo.type === "ORDER" && (
        <form>
          <div className="w-full grid lg:grid-cols-1 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
            <div className="w-full h-full flex flex-col gap-8">
              <div className="w-full min-h-20 flex flex-col gap-2">
                <h2 className="font-bold text-lg text-headercolor">
                  Notification Detail
                </h2>
                <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Type"
                      placeHolder="Order Notification"
                      type="text"
                      value="Order Notification"
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Subject"
                      placeHolder="Order Notification"
                      type="text"
                      value="Order Notification"
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Sender"
                      placeHolder="System"
                      type="text"
                      value="System"
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Date Received"
                      placeHolder={new Date(
                        notiInfo.created_at
                      ).toLocaleDateString()}
                      type="text"
                      value={new Date(notiInfo.created_at).toLocaleDateString()}
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomUpdateInput
                      name="name"
                      label="Order Id"
                      placeHolder={notiInfo.order_id}
                      type="text"
                      value={notiInfo.order_id}
                      onChange={(e) =>
                        setNotiInfo((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-secondary_color">Status</span>
                    <div className="rounded-md px-4 py-2 border text-[#FF313B] max-w-24">
                      Pending
                    </div>
                  </div>
                  {/* <CustomUpdateTextArea
                  placeHolder="Enter Disclaimer Here"
                  label="Notification Message"
                  name="disclaimer"
                  value={notiInfo.description || ""}
                  onChange={(e) =>
                    setNotiInfo((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                /> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};
export default NotificationDetail;
