"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { Nested_Options } from "@/lib/constant";
import { useAccount } from "@/lib/context/account-context";
import {
  useGetAllProducts,
  useGetCategories,
  useGetProducts,
  useGetShops,
} from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import { ProductStockColumns } from "@/modules/common/components/custom-table/column";
import { ProductInventoryColumns } from "@/modules/common/components/custom-table/columns/inventory/inventory-columns";
import {
  NestedDropdown,
  SubOption,
} from "@/modules/common/components/nested-dropdown";
import { PaginationControll } from "@/modules/common/components/pagination";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import Alert from "@/modules/common/icons/alert";
import Export from "@/modules/common/icons/export";
import { useQuery } from "@apollo/client";
import { stat } from "fs";
import { Archive, PackageSearch, Search } from "lucide-react";
import { useEffect, useState } from "react";

const STOCK_STATUS = [
  {
    id: "In Stock",
    name: "In Stock",
  },
  {
    id: "Low Stock",
    name: "Low Stock",
  },
  {
    id: "Out of Stock",
    name: "Out of Stock",
  },
];

const StockMonitorList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const { products, setTake, setFilters, page, setPage, totalCount } =
    useGetProducts();
  const [category, setCategory] = useState<string>("");
  const [shop, setShop] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const itemPerPage = 10;
  const { categories } = useGetCategories();
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const { userId } = useAccount();
  const { shops: allShops } = useGetShops();
  const shopOptions = allShops.map((shop: any) => ({
    id: shop.id,
    name: shop.name,
  }));
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
      stock_status: status === "all" ? undefined : status,
    });
  }, [searchName, setFilters, setTake, userInfo, category, status, shop]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const exportCsv = (tableData: any) => {
    if (!tableData || tableData.length === 0) {
      console.log("No table data");
      return;
    }

    const filteredData = tableData.map((data: any) => ({
      name: data.name,
      stock: data.quantity,
      default_stock_level: data.default_stock_level,
      last_updated_at: new Date(data.created_at).toLocaleString(),
      category: data.category?.name,
      last_updated: new Date(data.stock_hsitory?.[0].created_at)
        .toLocaleDateString,
    }));
    const headers = Object.keys(filteredData[0]);
    const csvRows = [
      headers.join(","),
      ...filteredData.map((row: any) =>
        headers.map((header) => JSON.stringify(row[header] || "")).join(",")
      ),
    ];
    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "stock.csv");
    a.click();
  };
  return (
    <section className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Inventory Management</h2>
      <div className="w-full min-h-40 flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <div></div>
          {/* <h3 className="text-lg font-semibold">Inventory Status</h3> */}
          <div className="flex flex-row items-center gap-3">
            <div className="relative">
              <Input
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search"
                className="pl-10 py-4 w-[150px] border border-gray-500"
              />
              <div className="absolute top-2 left-2">
                <Search className="" />
              </div>
            </div>
            <SelectDropdown
              setOption={setCategory}
              options={categories}
              label="Category"
            />
             {/* <SelectDropdown
              setOption={setShop}
              options={shopOptions}
              label="Brand"
            /> */}
            <SelectDropdown
              setOption={setStatus}
              options={STOCK_STATUS}
              label="Stock Status"
            />
            {/* <div>
              <NestedDropdown options={Nested_Options} label="Select Cateagory" setOption={setCategory}/>
            </div> */}
            <Button
              variant="outline"
              className="flex flex-row items-center gap-2 w-[150px] border border-gray-500"
              onClick={() => exportCsv(products)}
            >
              <span>Export</span>
              <Export />
            </Button>
          </div>
        </div>
        <DataTable data={products} columns={ProductInventoryColumns} />
        <PaginationControll
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default StockMonitorList;
