"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetCategories, useGetProducts } from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import { productcolumns } from "@/modules/common/components/custom-table/column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import { Search, SquarePlus } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProductList: React.FC = () => {
  const { products, setTake, setFilters, page, setPage, totalCount } =
    useGetProducts();
    const itemPerPage = 10
  const { categories } = useGetCategories();
  const [category, setCategory] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const totalPages = Math.ceil(totalCount / itemPerPage);
  console.log("list total",totalPages)
  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      name: searchName,
      category: category === "all" ? undefined : category,
    });
  }, [searchName, category, setFilters, setTake]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  console.log(category);
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Products</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          <Button className="flex items-center min-h-10 bg-inputlabel rounded-md">
            <SquarePlus color="white" />
            Add New Product
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
          <SelectDropdown
            setOption={setCategory}
            options={categories}
            label="Sort By"
          />
          <SelectDropdown
            setOption={setCategory}
            options={categories}
            label="Price Range"
          />
        </div>
      </div>
      <DataTable data={products} columns={productcolumns} />
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
