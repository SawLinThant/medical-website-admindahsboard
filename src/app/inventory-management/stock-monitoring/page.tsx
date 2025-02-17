"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { Nested_Options } from "@/lib/constant";
import { useAccount } from "@/lib/context/account-context";
import { useGetAllProducts, useGetProducts } from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import { ProductStockColumns } from "@/modules/common/components/custom-table/column";
import { NestedDropdown, NestedOption, SubOption } from "@/modules/common/components/nested-dropdown";
import { PaginationControll } from "@/modules/common/components/pagination";
import Alert from "@/modules/common/icons/alert";
import Export from "@/modules/common/icons/export";
import { useQuery } from "@apollo/client";
import { Archive, CircleAlert, PackageSearch, Search } from "lucide-react";
import { useEffect, useState } from "react";

const StockMonitorList: React.FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const { products, setTake, setFilters, filters, page, setPage, totalCount } =
    useGetProducts();
    const {products:LowStockProduct, setFilters:setLowStockFilter} = useGetProducts()
    const {productCount,totalProducts} = useGetAllProducts();
    const [totalInventory,setTotalInventory] = useState<number>(0);
    const [category,setCategory] = useState<null | SubOption>()
  const itemPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemPerPage);
  const { userId } = useAccount();
  const { data: userInfo } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  useEffect(() => {
    setLowStockFilter({
      stock_status: "Low Stock"
    })
  },[])
  const user = userInfo ? userInfo.users?.[0] : [];
  useEffect(() => {
    if(totalProducts && totalProducts.length > 0){
      const totalQuantity = totalProducts.reduce((sum:number, product:any) => sum + product.quantity, 0);
      setTotalInventory(totalQuantity);
    }
  })

  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      shop_id: user.shop_id || "",
      name: searchName,
      category: category && category.type === "product category"?category.id : undefined,
      stock_level: category && category.type === "stock level"?category.id : undefined,
      stock_status: category && category.type === "stock status"?category.id : undefined,
    });
  }, [searchName, setFilters, setTake, userInfo, category]);
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
      stock: data.quantity,
      default_stock_level: data.default_stock_level,
      last_updated_at: new Date(data.created_at).toLocaleString(),
      category: data.category?.name,
      last_updated: new Date(data.stock_hsitory?.[0].created_at).toLocaleDateString
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
    a.setAttribute("download", "stock.csv");
    a.click();
  };
  return (
    <section className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Stock Monitoring</h2>
      <div className="w-full min-h-30 grid grid-cols-3 gap-x-6">
        <div className="w-full shadow-md border rounded-lg flex flex-col gap-3 justify-center text-center py-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
              <PackageSearch size={25} />
            </div>
            <h2 className="font-medium">Total Products</h2>
          </div>
          <span className="text-xl font-bold">{productCount?productCount:"0"}</span>
        </div>
        <div className="w-full border shadow-md rounded-lg flex flex-col gap-3 justify-center text-center py-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
              <Archive size={25} />
            </div>
            <h2 className="font-medium">Total Inventory</h2>
          </div>
          <span className="text-xl font-bold">{totalInventory}</span>
        </div>
        <div className="w-full border shadow-md rounded-lg flex flex-col gap-3 justify-center text-center py-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
              <Alert />
            </div>
            <h2 className="font-medium">Total Products</h2>
          </div>
          <span className="text-xl font-bold">
            {LowStockProduct? LowStockProduct.length : "0"}
            </span>
        </div>
      </div>
      <div className="w-full min-h-40 border rounded-lg p-4 flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-lg font-semibold">Inventory Status</h3>
          <div className="flex flex-row items-center gap-3">
            <div className="relative">
              <Input
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search"
                className="pl-10 py-4 w-[150px] border border-gray-200"
              />
              <div className="absolute top-2 left-2">
                <Search className="" />
              </div>
            </div>
            <div>
              <NestedDropdown options={Nested_Options} label="Select Cateagory" setOption={setCategory}/>
            </div>
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
        <DataTable data={products} columns={ProductStockColumns} />
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
