"use client";

import { useGetNotificationsByShop } from "@/lib/hooks/getNotification";

interface NotificationProps {
  shop_id: string;
}

const Notification: React.FC<NotificationProps> = ({ shop_id }) => {
  console.log("notification shop id:", shop_id);
  const { notifications, loadingNotifications, error } =
    useGetNotificationsByShop(shop_id);
  if (loadingNotifications) return <p>Loading notifications...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="w-full flex flex-col">
      Notification
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.description} (Created at: {notification.created_at})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
