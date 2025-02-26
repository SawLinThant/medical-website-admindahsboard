"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetAdvertisements } from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import { AdColumns } from "@/modules/common/components/custom-table/column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { Search, SquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const router = useRouter()
  const {
    advertisements,
    setTake,
    setFilters,
    filters,
    page,
    setPage,
    totalCount,
  } = useGetAdvertisements();
  const itemPerPage = 10;
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
  console.log(advertisements)
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Advertisement Management</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          <Button
            onClick={() =>
              router.push("/advertisement/create-ad")
            }
            className="flex items-center min-h-10 bg-inputlabel rounded-md"
          >
            <SquarePlus color="white" />
            New Advertisement
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
      <DataTable data={advertisements} columns={AdColumns} />
       <PaginationControll
              totalPages={totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
    </div>
  );
};

export default ProductList;
