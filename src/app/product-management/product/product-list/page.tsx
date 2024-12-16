"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetCategories, useGetProducts } from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import { productcolumns } from "@/modules/common/components/custom-table/column";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import { Search, SquarePlus } from "lucide-react";
import React from "react";

const CreateProduct: React.FC = () => {
  const { products } = useGetProducts();
  const { categories } = useGetCategories();
  console.log(products);
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
          <div className="relative w-[150px]">
            <Input placeholder="Search" className="pl-10 py-4 border border-gray-400" />
            <div className="absolute top-2 left-2">
              <Search className=""/>
            </div>
          </div>
          <SelectDropdown options={categories} label="Sort By" />
          <SelectDropdown options={categories} label="Price Range" />
        </div>
      </div>
      <DataTable data={products} columns={productcolumns} />
    </div>
  );
};

export default CreateProduct;
