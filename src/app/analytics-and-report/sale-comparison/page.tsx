"use client";

import { Button } from "@/components/ui/button";
import {
  useGetNestedShops,
  useGetShops,
} from "@/lib/hooks/useGetQuery";
import { Shop } from "@/lib/types";
import {
  calculateGrowth,
  calculateLastMonthSales,
  calculateTotalOrders,
  calculateTotalSales,
} from "@/lib/utils";
import ComparisonChart from "@/modules/common/components/comparison-chart";
import { ComparisonColumns } from "@/modules/common/components/custom-table/column";
import MultiShopSelectDropdown from "@/modules/common/components/multi-select-dropdown";
import ReportDataTable from "@/modules/common/components/report-table";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import Export from "@/modules/common/icons/export";
import SquareBlock from "@/modules/components/sale-management/sale-comparison-block";
import { useMemo, useState } from "react";

const DATE_RANGE_OPTIONS = [
  { name: "This Week", id: "thisWeek" },
  { name: "This Month", id: "thisMonth" },
  { name: "This Year", id: "thisYear" },
  { name: "Last Week", id: "lastWeek" },
  { name: "Last Month", id: "lastMonth" },
  { name: "Last Year", id: "lastYear" },
];


const SaleComparison: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("totalSalesDesc");
  const [selectedShopIds, setSelectedShopIds] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<string>("thisMonth");
  const { shops: allShops } = useGetShops();
  const { shops} =
    useGetNestedShops(dateRange, selectedShopIds);
  const shopOptions = allShops.map((shop: any) => ({
    id: shop.id,
    name: shop.name,
  }));
  const exportCsv = (tableData: Shop[], dateRange: string) => {
    if (!tableData || tableData.length === 0) {
      console.log("No table data");
      return;
    }

    const filteredData = tableData.map((shop) => ({
      "Shop Name": shop.name,
      "Total Sale": `$${calculateTotalSales(shop).toLocaleString()}`,
      "Monthly Sale": `$${calculateLastMonthSales(
        shop,
        dateRange
      ).toLocaleString()}`,
      "Total Orders": calculateTotalOrders(shop),
      Category: shop.shop_category?.name || "Unknown",
      Address: shop.address,
      Phone: shop.phone,
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
    a.setAttribute("download", "shop_report.csv");
    a.click();
    window.URL.revokeObjectURL(url);
  };
  const metrics = useMemo(() => {
    let totalProducts = 0;
    let totalSales = 0;
    let growthRates: string[] = [];

    shops.forEach((shop: Shop) => {
      totalProducts += shop.products.length;

      totalSales += calculateTotalSales(shop);

      const growth = calculateGrowth(shop, dateRange);
      if (growth !== "N/A") {
        growthRates.push(growth);
      }
    });

    const averageGrowthRate =
      growthRates.length > 0
        ? `${(
            growthRates.reduce((sum, rate) => sum + parseFloat(rate), 0) /
            growthRates.length
          ).toFixed(1)}%`
        : "N/A";

    return {
      totalProducts,
      totalSales: `${totalSales.toLocaleString()}`,
      growthRate: averageGrowthRate,
    };
  }, [shops, dateRange]);
  return (
    <section className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Sale Comparison</h2>
      <SquareBlock
        totalProducts={metrics.totalProducts}
        totalSales={metrics.totalSales}
        growthRate={metrics.growthRate}
      />
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <h2 className="font-bold text-xl">Bar Chart Comparison</h2>
        <div className="flex flex-row items-center gap-4">
          <MultiShopSelectDropdown
            shops={shopOptions}
            onShopChange={setSelectedShopIds}
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
      <div className="flex items-center justify-center">
        <div className="w-full">
          <ComparisonChart shops={shops} dateRange={dateRange} />
        </div>
      </div>
      <h2 className="font-bold text-xl mt-10">Data Comparison</h2>
      <ReportDataTable
        data={shops}
        columns={ComparisonColumns}
        sortBy={sortBy}
        tableOptions={{ meta: { dateRange } }}
      />
    </section>
  );
};
export default SaleComparison;
