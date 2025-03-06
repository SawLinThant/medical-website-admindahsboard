"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Shop, Product, OrderItem } from "@/lib/types"; // Adjust import as needed
import { useMemo } from "react";
import { getLinearMax, getLinearTicks } from "@/lib/utils";

// Utility function to calculate total sales for a shop within a date range
const calculateTotalSalesInRange = (
  shop: Shop,
  startDate: Date,
  endDate: Date
): number => {
  let total = 0;
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      if (item.status === "Completed") {
        try {
          const itemDate = new Date(item.created_at || "");
          if (isNaN(itemDate.getTime())) {
            console.warn(
              `Invalid date for order_item ${item.id}: ${item.created_at}`
            );
            return;
          }
          console.log(
            `Checking item ${item.id} for shop ${
              shop.name
            } - Date: ${itemDate.toISOString()}, Range: ${startDate.toISOString()} to ${endDate.toISOString()}`
          );
          if (itemDate >= startDate && itemDate <= endDate) {
            total += item.subtotal ?? item.quantity * item.price;
          }
        } catch (error) {
          console.error(
            `Error parsing date for order_item ${item.id}: ${item.created_at}`,
            error
          );
        }
      }
    });
  });
  return total;
};

// Utility functions to get time unit labels in UTC
const getDayName = (date: Date): string => {
  return date.toLocaleString("en-US", { weekday: "long", timeZone: "UTC" });
};

const getWeekNumber = (date: Date, monthStart: Date): string => {
  const firstDayOfMonth = new Date(monthStart);
  firstDayOfMonth.setUTCHours(0, 0, 0, 0); // Ensure UTC for consistency
  const dayOfWeek = firstDayOfMonth.getUTCDay();
  const daysSinceFirstMonday = (date.getUTCDate() + dayOfWeek - 1) % 7;
  const week = Math.floor((date.getUTCDate() + dayOfWeek - 1) / 7) + 1;
  return `Week ${week}`;
};

const getMonthName = (date: Date): string => {
  return date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
};

const getLastDayOfMonth = (year: number, month: number): Date => {
  return new Date(Date.UTC(year, month + 1, 0, 23, 59, 59));
};
const formatYAxis = (value: number) => `${value.toLocaleString()}`;


interface ComparisonChartProps {
  shops: Shop[];
  dateRange: string; 
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({
  shops,
  dateRange,
}) => {
  // Calculate date range based on dateRange, using UTC for consistency
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0); // Normalize to UTC start of day
  let startDate: Date, endDate: Date;

  switch (dateRange) {
    case "thisWeek":
      startDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - now.getUTCDay()
        )
      );
      endDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() + (6 - now.getUTCDay())
        )
      );
      break;
    case "thisMonth":
      startDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)
      );
      endDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)
      );
      break;
    case "thisYear":
      startDate = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
      endDate = new Date(Date.UTC(now.getUTCFullYear(), 11, 31));
      break;
    case "lastWeek":
      const lastWeekEnd = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - now.getUTCDay() - 1
        )
      );
      startDate = new Date(
        Date.UTC(
          lastWeekEnd.getUTCFullYear(),
          lastWeekEnd.getUTCMonth(),
          lastWeekEnd.getUTCDate() - 6
        )
      );
      endDate = lastWeekEnd;
      break;
    case "lastMonth":
      startDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)
      );
      endDate = getLastDayOfMonth(now.getUTCFullYear(), now.getUTCMonth() - 1);
      console.log(
        `Last Month Range: ${startDate.toISOString()} to ${endDate.toISOString()}`
      );
      break;
    case "lastYear":
      startDate = new Date(Date.UTC(now.getUTCFullYear() - 1, 0, 1)); // January 1, 2024
      endDate = new Date(
        Date.UTC(now.getUTCFullYear() - 1, 11, 31, 23, 59, 59)
      ); // December 31, 2024, 23:59:59 UTC
      console.log(
        `Last Year Range: ${startDate.toISOString()} to ${endDate.toISOString()}`
      );
      break;
    default:
      startDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)
      );
      endDate = new Date();
  }

  const chartData = useMemo(() => {
    let timeUnits: Date[];
    switch (dateRange) {
      case "thisWeek":
      case "lastWeek":
        timeUnits = Array.from({ length: 7 }, (_, i) => {
          const date = new Date(startDate);
          date.setUTCDate(startDate.getUTCDate() + i);
          return date;
        });
        break;
      case "thisMonth":
        // Generate weeks for this month (March 1–31, 2025)
        timeUnits = Array.from({ length: 5 }, (_, i) => {
          // Allow up to 5 weeks for March
          const date = new Date(startDate);
          date.setUTCDate(startDate.getUTCDate() + i * 7);
          if (date <= endDate) {
            // Only include weeks within the month
            return date;
          }
          return null; // Filter out nulls later
        })
          .filter((date): date is Date => date !== null)
          .sort((a, b) => a.getTime() - b.getTime());
        break;
      case "lastMonth":
        // Generate weeks for last month (February 1–28, 2025)
        timeUnits = Array.from({ length: 4 }, (_, i) => {
          // Up to 4 weeks in February
          const date = new Date(startDate);
          date.setUTCDate(startDate.getUTCDate() + i * 7);
          if (date <= endDate) {
            // Only include weeks within the month
            return date;
          }
          return null; // Filter out nulls later
        })
          .filter((date): date is Date => date !== null)
          .sort((a, b) => a.getTime() - b.getTime());
        break;
      case "thisYear":
        // Generate months for this year (January 1–December 31, 2025)
        timeUnits = Array.from({ length: 12 }, (_, i) => {
          return new Date(Date.UTC(startDate.getUTCFullYear(), i, 1));
        });
        break;
      case "lastYear":
        // Generate months for last year (January 1–December 31, 2024)
        timeUnits = Array.from({ length: 12 }, (_, i) => {
          return new Date(Date.UTC(startDate.getUTCFullYear(), i, 1));
        });
        break;
      default:
        timeUnits = [startDate];
    }

    const formatTimeUnit = (date: Date, range: string): string => {
      switch (range) {
        case "thisWeek":
        case "lastWeek":
          return getDayName(date);
        case "thisMonth":
        case "lastMonth":
          return getWeekNumber(date, startDate);
        case "thisYear":
        case "lastYear":
          return getMonthName(date);
        default:
          return getMonthName(date);
      }
    };
    // Initialize data structure for each time unit
    const data: any = timeUnits.map((unit) => ({
      date: formatTimeUnit(unit, dateRange),
    }));

    // Calculate total sales for each shop per time unit using calculateTotalSalesInRange
    shops.forEach((shop) => {
      const shopName = shop.name;
      timeUnits.forEach((unit, index) => {
        let totalSales = 0;
        let unitStart: Date, unitEnd: Date;

        switch (dateRange) {
          case "thisWeek":
          case "lastWeek":
            unitStart = new Date(unit);
            unitEnd = new Date(unit);
            unitEnd.setUTCDate(unitStart.getUTCDate() + 1);
            break;
          case "thisMonth":
          case "lastMonth":
            unitStart = new Date(unit);
            unitEnd = new Date(unit);
            unitEnd.setUTCDate(unitStart.getUTCDate() + 6); // End of the week
            if (unitEnd > endDate) {
              unitEnd = endDate; // Cap at the end of the month
            }
            unitEnd.setUTCHours(23, 59, 59, 999); // Ensure full day (23:59:59.999 UTC)
            break;
          case "thisYear":
          case "lastYear":
            unitStart = new Date(
              Date.UTC(unit.getUTCFullYear(), unit.getUTCMonth(), 1)
            );
            unitEnd = new Date(
              Date.UTC(
                unit.getUTCFullYear(),
                unit.getUTCMonth() + 1,
                0,
                23,
                59,
                59,
                999
              )
            ); // Full day of the last day of the month
            break;
          default:
            unitStart = startDate;
            unitEnd = endDate;
        }

        console.log("startdate prop", unitStart.toISOString());
        console.log("enddate prop", unitEnd.toISOString());
        totalSales = calculateTotalSalesInRange(shop, unitStart, unitEnd);
        console.log(
          `Shop ${shopName} - Time Unit ${formatTimeUnit(
            unit,
            dateRange
          )}: ${totalSales}`
        );
        data[index][shopName] = totalSales;
      });
    });

    // Filter out any entries where all shop values are undefined (no sales)
    const filteredData = data.filter((entry: any) =>
      shops.some(
        (shop) => entry[shop.name] !== undefined && entry[shop.name]! > 0
      )
    );
    console.log(`Chart Data for ${dateRange}:`, filteredData);
    return filteredData;
  }, [shops, dateRange]);


  const SHOP_COLORS = [
    "#6EEEB7", 
    "#047B57", 
    "#094E3B",
    "#00352B", 
    "#00261C", 
    "#001610", 
  ];

  const chartConfig: ChartConfig = {
    activities: {
      label: "Activities",
    },
    ...shops.reduce((config, shop, index) => {
      const colorIndex = index % SHOP_COLORS.length; 
      config[shop.name] = {
        label: shop.name,
        color: SHOP_COLORS[colorIndex], 
      };
      return config;
    }, {} as ChartConfig),
  };

  const maxSales = useMemo(() => {
    let max = 0;
    chartData.forEach((entry: any) => {
      shops.forEach((shop) => {
        const sale = entry[shop.name] || 0;
        max = Math.max(max, sale);
      });
    });
    return getLinearMax(max);
  }, [chartData, shops]);

  const Y_AXIS_TICKS = getLinearTicks(maxSales);
  
  const barSize = 30; 

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Sale Comparison by Shop</CardTitle>
          <CardDescription>
            Total sales per shop across{" "}
            {dateRange === "thisWeek" || dateRange === "lastWeek"
              ? "days"
              : dateRange === "thisMonth" || dateRange === "lastMonth"
              ? "weeks"
              : "months"}
            .
          </CardDescription>
        </div>

        <div className="flex flex-col items-start gap-2">
        {shops.map((shop, index) => {
            const colorIndex = index % SHOP_COLORS.length; 
            return (
              <div key={shop.id} className="flex flex-row items-center gap-1">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: SHOP_COLORS[colorIndex] }}
                />
                <span className="text-sm font-medium">{shop.name}</span>
              </div>
            );
          })}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis
              type="number"
              tickFormatter={formatYAxis} 
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              domain={[0, maxSales]} 
              ticks={Y_AXIS_TICKS} 
              allowDecimals={false} 
              style={{ fontSize: "12px", color: "#666" }} 
            />
        {shops.map((shop, index) => {
              const colorIndex = index % SHOP_COLORS.length; 
              return (
                <Bar
                  key={shop.id}
                  dataKey={shop.name}
                  fill={SHOP_COLORS[colorIndex]} 
                  stackId="a" 
                  barSize={barSize} 
                  radius={
                    index === shops.length - 1
                      ? [4, 4, 0, 0] 
                      : [4, 4, 0, 0]
                  }
                />
              );
            })}
            <ChartTooltip
              content={
                <ChartTooltipContent labelKey="activities" indicator="line" />
              }
              cursor={false}
              defaultIndex={0}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ComparisonChart;
