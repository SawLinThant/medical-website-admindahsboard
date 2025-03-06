"use client";

import { Button } from "@/components/ui/button";
import {
  useGetNestedShops,
  useGetShops,
} from "@/lib/hooks/useGetQuery";
import { Shop } from "@/lib/types";
import { calculateLastMonthSales, calculateTotalOrders, calculateTotalSales } from "@/lib/utils";
import { ReportColumns } from "@/modules/common/components/custom-table/column";
import MultiShopSelectDropdown from "@/modules/common/components/multi-select-dropdown";
import { PaginationControll } from "@/modules/common/components/pagination";
import ReportDataTable from "@/modules/common/components/report-table";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import Export from "@/modules/common/icons/export";
import React, { useEffect, useState } from "react";

const DATE_RANGE_OPTIONS = [
  { name: "This Week", id: "thisWeek" },
  { name: "This Month", id: "thisMonth" },
  { name: "This Year", id: "thisYear" },
  { name: "Last Week", id: "lastWeek" },
  { name: "Last Month", id: "lastMonth" },
  { name: "Last Year", id: "lastYear" },
];

const SORT_OPTIONS = [
  { id: "totalSalesDesc", name: "Total Sales (Most to Least)" },
  { id: "totalSalesAsc", name: "Total Sales (Least to Most)" },
  { id: "totalOrdersDesc", name: "Total Orders (Most to Least)" },
  { id: "totalOrdersAsc", name: "Total Orders (Least to Most)" },
];

const ReportList: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("totalSalesDesc");
  const [selectedShopIds, setSelectedShopIds] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<string>("");
  const { shops, setTake, setFilters, page, setPage, totalCount } =
  useGetNestedShops(dateRange,selectedShopIds);
  const {shops:allShops} = useGetShops()
  const itemPerPage = 10;
  const shopOptions = allShops.map((shop:any) => ({ id: shop.id, name: shop.name }));
  const [searchName, setSearchName] = useState<string>("");
  const totalPages = Math.ceil(totalCount / itemPerPage);


  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      name: searchName,
    });
  }, [searchName,  setFilters, setTake, dateRange]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const exportCsv = (tableData: Shop[], dateRange: string) => {
    if (!tableData || tableData.length === 0) {
      console.log("No table data");
      return;
    }
  
    const filteredData = tableData.map((shop) => ({
      "Shop Name": shop.name,
      "Total Sale": `$${calculateTotalSales(shop).toLocaleString()}`,
      "Monthly Sale": `$${calculateLastMonthSales(shop, dateRange).toLocaleString()}`,
      "Total Orders": calculateTotalOrders(shop),
      "Category": shop.shop_category?.name || "Unknown",
      "Address": shop.address,
      "Phone": shop.phone,
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
    a.setAttribute("download", "shop_report.csv");
    a.click();
    window.URL.revokeObjectURL(url);
  };
 console.log("dropdown date range:",dateRange)
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Report for All Shops</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div></div>
        <div className="flex flex-row items-center gap-4">
        <MultiShopSelectDropdown
            shops={shopOptions}
            onShopChange={setSelectedShopIds}
          />
          <SelectDropdown
            setOption={setSortBy}
            options={SORT_OPTIONS}
            label="Sort By"
          />
            <SelectDropdown
            setOption={setDateRange}
            options={DATE_RANGE_OPTIONS}
            label="Date Range"
          />
            <Button
              variant="outline"
              className="flex flex-row items-center gap-2 w-[150px]"
              onClick={() => exportCsv(shops,dateRange)}
            >
              <span>Export</span>
              <Export />
            </Button>
        </div>
      </div>
      <ReportDataTable data={shops} columns={ReportColumns} sortBy={sortBy} tableOptions={{ meta: { dateRange } }}/>
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ReportList;
