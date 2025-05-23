"use client";

import { Input } from "@/components/ui/input";
import { useGetDeliveryUsers } from "@/lib/hooks/useQuery/delivery-users/useGetDeliveryUsers";
import { DataTable } from "@/modules/common/components/custom-table";
import { deliveryUsersColumn } from "@/modules/common/components/custom-table/columns/delivery-users/delivery-users-column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { Button } from "@/modules/common/components/ui/button";
import { Search, SquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DeliveryUserList: React.FC = () => {
  const { deliveryUsers, setTake, setFilters, filters, page, setPage, totalCount } =
    useGetDeliveryUsers();
  const itemPerPage = 10;
  const router = useRouter();
  const [searchName, setSearchName] = useState<string>("");
  const totalPages = Math.ceil(totalCount / itemPerPage);


  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      name: searchName,

    });
  }, [searchName, setFilters, setTake]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Delivery Users</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          <Button
            onClick={() =>
              router.push("/delivery-onboard/create")
            }
            className="flex items-center min-h-10 bg-inputlabel rounded-md"
          >
            <SquarePlus color="white" />
            Add New Users
          </Button>
        </div>
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
        </div>
      </div>
      <DataTable data={deliveryUsers} columns={deliveryUsersColumn} />
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DeliveryUserList;