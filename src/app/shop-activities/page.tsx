"use client";

import { Button } from "@/components/ui/button";
import { useGetShopActivities, useGetShops } from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import MultiShopSelectDropdown from "@/modules/common/components/multi-select-dropdown";
import { PaginationControll } from "@/modules/common/components/pagination";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import Alert from "@/modules/common/icons/alert";
import Export from "@/modules/common/icons/export";
import Layout from "@/modules/layout/mainLayout";
import { Archive, PackageSearch } from "lucide-react";
import { useEffect, useState } from "react";
import { ShopActivityColumns } from "@/modules/common/components/custom-table/column";

const DATE_RANGE_OPTIONS = [
  { name: "This Week", id: "thisWeek" },
  { name: "This Month", id: "thisMonth" },
  { name: "This Year", id: "thisYear" },
  { name: "Last Week", id: "lastWeek" },
  { name: "Last Month", id: "lastMonth" },
  { name: "Last Year", id: "lastYear" },
];

const ShopActivitiesList: React.FC = () => {
  const [selectedShopIds, setSelectedShopIds] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<string>("");
  const { shops: allShops } = useGetShops();
  const {
    shopActivities,
    loading,
    error,
    filters,
    setFilters,
    page,
    setPage,
    totalCount,
  } = useGetShopActivities();

  const shopOptions = allShops.map((shop: any) => ({
    id: shop.id,
    name: shop.name,
  }));

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  useEffect(() => {
    setFilters({
      shop_id: selectedShopIds.length > 0 ? selectedShopIds : undefined,
      dateRange: dateRange || undefined,
    });
  }, [selectedShopIds, dateRange]);
  

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const exportCsv = (tableData: any) => {
    if (!tableData || tableData.length === 0) {
      console.log("No table data");
      return;
    }

    const filteredData = tableData.map((data: any) => ({
      activity: data.activity,
      note: data.note,
      status: data.status,
      shop_id: data.shop_id,
      order_id: data.order_id,
      created_at: new Date(data.created_at).toLocaleString(),
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
    a.setAttribute("download", "shop_activities.csv");
    a.click();
  };

  return (
    <Layout>
      <section className="w-full h-full flex flex-col gap-4 p-4">
        <h2 className="font-bold text-xl">Shop Activities</h2>
        <div className="w-full min-h-30 grid grid-cols-3 gap-x-6">
          <div className="w-full shadow-md border rounded-lg flex flex-col gap-3 justify-center text-center py-8">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
                <PackageSearch size={25} />
              </div>
              <h2 className="font-medium">Total Activities</h2>
            </div>
            <span className="text-xl font-bold">
              {loading ? "Loading..." : totalCount}
            </span>
          </div>
          <div className="w-full border shadow-md rounded-lg flex flex-col gap-3 justify-center text-center py-8">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
                <Archive size={25} />
              </div>
              <h2 className="font-medium">Completed Activities</h2>
            </div>
            <span className="text-xl font-bold">
              {loading
                ? "Loading..."
                : shopActivities.filter((activity: any) => activity.status === "completed").length}
            </span>
          </div>
          <div className="w-full border shadow-md rounded-lg flex flex-col gap-3 justify-center text-center py-8">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
                <Alert />
              </div>
              <h2 className="font-medium">Pending Activities</h2>
            </div>
            <span className="text-xl font-bold">
              {loading
                ? "Loading..."
                : shopActivities.filter((activity: any) => activity.status === "pending").length}
            </span>
          </div>
        </div>
        <div className="w-full min-h-40 border rounded-lg p-4 flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold">Activity Log</h3>
            <div className="flex flex-row items-center gap-3">
              <MultiShopSelectDropdown
                shops={shopOptions}
                onShopChange={setSelectedShopIds}
                label="Shop"
              />
              <SelectDropdown
                setOption={setDateRange}
                options={DATE_RANGE_OPTIONS}
                label="Date Range"
              />
              <Button
                variant="outline"
                className="flex flex-row items-center gap-2 w-[150px]"
                onClick={() => exportCsv(shopActivities)}
              >
                <span>Export</span>
                <Export />
              </Button>
            </div>
          </div>
          <DataTable data={shopActivities} columns={ShopActivityColumns} />
          <PaginationControll
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ShopActivitiesList;