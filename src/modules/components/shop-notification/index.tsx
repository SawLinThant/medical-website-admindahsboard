"use client";

import { Input } from "@/components/ui/input";
import { useGetNotificationsByShop } from "@/lib/hooks/getNotification";
import { getDateRange } from "@/lib/utils";
import { DataTable } from "@/modules/common/components/custom-table";
import { notificationColumns } from "@/modules/common/components/custom-table/columns/notificationcolumn/notification-column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface NotificationProps {
  shop_id: string;
}

const DATE_RANGE_OPTIONS = [
  { name: "This Week", id: "thisWeek" },
  { name: "This Month", id: "thisMonth" },
  { name: "This Year", id: "thisYear" },
  { name: "Last Week", id: "lastWeek" },
  { name: "Last Month", id: "lastMonth" },
  { name: "Last Year", id: "lastYear" },
];

const NOTIFICAITON_TYPE = [
  { id: "announcement", name: "Broadcast" },
  { id: "ORDER", name: "Order Notification" },
  { id: "stock alert", name: "Stock Alert" },
];

const STATUS = [
  { id: "Read", name: "Read" },
  { id: "Unread", name: "Unread" },
];

const Notification: React.FC<NotificationProps> = ({ shop_id }) => {
  const {
    notifications,
    loadingNotifications,
    setTake,
    setPage,
    setFilters,
    error,
    totalCount,
    page,
    take,
  } = useGetNotificationsByShop(shop_id);

  const itemPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const [dateRange, setDateRange] = useState<string>("");
  const [notificationType, setNotificationType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  console.log("type",notificationType)

  useEffect(() => {
    setTake(itemPerPage);
    const newFilters: { type?: string; is_read?: boolean; description?: string; created_at?: any } = {};

    if (notificationType) {
      if(notificationType === "all"){
        newFilters.type = undefined;
      }else{
        newFilters.type = notificationType;
      }   
    }
    if(searchName){
      newFilters.description = searchName
    }
    if (status === "Read" || status === "Unread") {
      newFilters.is_read = status === "Unread" ? false : true;
    }

    const { startDate, endDate } = getDateRange(dateRange);
    if (startDate && endDate) {
      newFilters.created_at = {
        _gte: startDate,
        _lte: endDate,
      };
    }

    setFilters(newFilters);
  }, [status, notificationType,searchName, dateRange]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

 // if (loadingNotifications) return <p>Loading notifications...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Announcements</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div></div>
        <div className="flex flex-row items-center gap-4">
        <div className="relative">
            <Input
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search"
              className="pl-10 py-4 w-[150px] border border-gray-400"
            />
            <div className="absolute top-2 left-2">
              <Search className="" />
            </div>
          </div>
          <SelectDropdown
            setOption={setDateRange}
            options={DATE_RANGE_OPTIONS}
            label="Date Range"
          />
          <SelectDropdown
            setOption={setNotificationType}
            options={NOTIFICAITON_TYPE}
            label="Type"
          />
            <SelectDropdown
            setOption={setStatus}
            options={STATUS}
            label="Status"
          />
        </div>
      </div>
      <DataTable data={notifications} columns={notificationColumns} />
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Notification;
