"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/modules/common/components/custom-table";
import { announcementColumns } from "@/modules/common/components/custom-table/columns/announcement/announcement-columns";
import { PaginationControll } from "@/modules/common/components/pagination";
import { useGetAnnouncements } from "@/lib/hooks/useQuery/announcements/useGetAnnouncements";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";

export default function AnnouncementList() {
  const { announcements, setTake, page, setPage, totalCount } =
    useGetAnnouncements();
  const itemPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const router = useRouter();

  useEffect(() => {
    setTake(itemPerPage);
  }, []);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  console.log(announcements);

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Announcements</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          <Button
            onClick={() =>
              router.push("/announcement/create-announcement")
            }
            className="flex items-center min-h-10 bg-inputlabel rounded-md"
          >
            <SquarePlus color="white" />
            Add New Announcement
          </Button>
        </div>
      </div>
      <DataTable data={announcements} columns={announcementColumns} />
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
