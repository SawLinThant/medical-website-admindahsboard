"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { useAccount } from "@/lib/context/account-context";
import {
  useGetCategories,
  useGetProducts,
  useGetRanges,
} from "@/lib/hooks/useGetQuery";
import { PriceRangeType } from "@/lib/types";
import { DataTable } from "@/modules/common/components/custom-table";
import { productcolumns } from "@/modules/common/components/custom-table/column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { PriceSelectDropdown } from "@/modules/common/components/price-range-dropdown";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import { useQuery } from "@apollo/client";
import { Search, SquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductList: React.FC = () => {
  const { products, setTake, setFilters, filters, page, setPage, totalCount } =
    useGetProducts();
  const itemPerPage = 10;
  const router = useRouter();
  const { categories } = useGetCategories();
  const { priceRanges } = useGetRanges();
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<PriceRangeType | string>("all");
  const [searchName, setSearchName] = useState<string>("");
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const { userId } = useAccount();
  const { data: userInfo } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  const user = userInfo ? userInfo.users?.[0] : [];

  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      shop_id: user.shop_id || "",
      name: searchName,
      category: category === "all" ? undefined : category,
      priceRange:
        priceRange === "all"
          ? undefined
          : {
              start_price: (priceRange as PriceRangeType).start_price,
              end_price: (priceRange as PriceRangeType).end_price,
            },
    });
  }, [searchName, category, setFilters, setTake, priceRange, userInfo]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Products</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          <Button
            onClick={() =>
              router.push("/product-management/product/create-product")
            }
            className="flex items-center min-h-10 bg-inputlabel rounded-md"
          >
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
          <PriceSelectDropdown
            setOption={setPriceRange}
            options={priceRanges}
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
