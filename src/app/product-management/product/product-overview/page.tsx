"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { useAccount } from "@/lib/context/account-context";
import {
  useGetCategories,
  useGetProducts,
  useGetShops,
} from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import {  ProductOverviewColumns } from "@/modules/common/components/custom-table/column";
import MultiShopSelectDropdown from "@/modules/common/components/multi-select-dropdown";
import { PaginationControll } from "@/modules/common/components/pagination";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import Export from "@/modules/common/icons/export";
import { useQuery } from "@apollo/client";
import { Search, SquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const statusOptions = [
  { id: "Active", name: "Active" },
  { id: "Inactive", name: "Inactive" },
];

const stockLevelOptions = [
  { id: "Below Default", name: "Low Stock" },
  { id: "Above Default", name: "Sufficient Stock" },
];

const ProductList: React.FC = () => {
  const { products, setTake, setFilters, filters, page, setPage, totalCount } =
    useGetProducts();
    const { shops: allShops } = useGetShops();
  const itemPerPage = 10;
  const router = useRouter();
  const { categories } = useGetCategories();
  const [category, setCategory] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [stockLevel, setStockLevel] = useState<string>("");
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const { userId } = useAccount();
  const [selectedShopIds, setSelectedShopIds] = useState<string[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const { data: userInfo } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  const shopOptions = allShops.map((shop: any) => ({
    id: shop.id,
    name: shop.name,
  }));
  const categoryOptions = categories.map((category: any) => ({
    id: category.id,
    name: category.name,
  }));


  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      shop_id: selectedShopIds.length > 0 ? selectedShopIds : undefined,
      name: searchName,
      status: status === "all" ? undefined : status,
      category: selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
      stock_level: stockLevel === "all" ? undefined : stockLevel,
    });
  }, [searchName, setFilters, setTake, userInfo, status, stockLevel, selectedShopIds, selectedCategoryIds]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const exportCsv = (tableData:any) => {
    if (!tableData || tableData.length === 0) {
      console.log("No table data");
      return;
    }

    const filteredData = tableData.map((data:any) => ({
      name: data.name,
      category: data.category?.name,
      shop: data.shop?.name,
      stock: data.quantity,
      price: data.price,
      stock_status: data.status,
    }));
    const headers = Object.keys(filteredData[0]);
    const csvRows = [
      headers.join(","),
      ...filteredData.map((row:any) =>
        headers.map((header) => JSON.stringify(row[header] || "")).join(",")
      ),
    ];
    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "products.csv");
    a.click();
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Product Overview</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          {/* <Button
            onClick={() =>
              router.push("/product-management/product/create-product")
            }
            className="flex items-center min-h-10 bg-inputlabel rounded-md"
          >
            <SquarePlus color="white" />
            Add New Product
          </Button> */}
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
          <MultiShopSelectDropdown
            shops={shopOptions}
            onShopChange={setSelectedShopIds}
            label="Shop"
          />
          <MultiShopSelectDropdown
           shops={categoryOptions}
           onShopChange={setSelectedCategoryIds}
           label="Category"
          />
          <SelectDropdown
            setOption={setStatus}
            options={statusOptions}
            label="Status"
          />
          <SelectDropdown
            setOption={setStockLevel}
            options={stockLevelOptions}
            label="Stock Level"
          />
            <Button
              variant="outline"
              className="flex flex-row items-center gap-2 w-[150px]"
              onClick={() => exportCsv(products)}
            >
              <span>Export</span>
              <Export />
            </Button>
        </div>
      </div>
      <DataTable data={products} columns={ProductOverviewColumns} />
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
