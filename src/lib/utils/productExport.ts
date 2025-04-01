import { ProductColumnDef } from "@/modules/common/components/custom-table/columns/product/product-columns";


const calculateTotalSales = (product: ProductColumnDef): number => {
  return product.order_items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
};

const calculateThisMonthSales = (product: ProductColumnDef): number => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  return product.order_items
    .filter((item) => new Date(item.created_at) >= startOfMonth)
    .reduce((sum, item) => sum + item.quantity * item.price, 0);
};

const calculateLastMonthSales = (product: ProductColumnDef): number => {
  const now = new Date();
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  return product.order_items
    .filter(
      (item) =>
        new Date(item.created_at) >= startOfLastMonth &&
        new Date(item.created_at) <= endOfLastMonth
    )
    .reduce((sum, item) => sum + item.quantity * item.price, 0);
};

const calculateTotalOrders = (product: ProductColumnDef): number => {
  return product.order_items.reduce((sum, item) => sum + item.quantity, 0);
};

const calculateGrowth = (product: ProductColumnDef): string => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  const thisMonthSale = product.order_items
    .filter((item) => new Date(item.created_at) >= startOfMonth)
    .reduce((sum, item) => sum + item.quantity * item.price, 0);

  const lastMonthSale = product.order_items
    .filter(
      (item) =>
        new Date(item.created_at) >= startOfLastMonth &&
        new Date(item.created_at) <= endOfLastMonth
    )
    .reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (lastMonthSale === 0) {
    return thisMonthSale > 0 ? "∞%" : "0%";
  }

  const growth = ((thisMonthSale - lastMonthSale) / lastMonthSale) * 100;
  return `${growth.toFixed(1)}%`;
};

// Updated exportCsv function
const exportCsv = (tableData: ProductColumnDef[]) => {
  if (!tableData || tableData.length === 0) {
    console.log("No table data");
    return;
  }

  const filteredData = tableData.map((product) => ({
    "Product Name": product.name,
    "Total Sale": `MMK${calculateTotalSales(product).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    "This Month Sale": `MMK${calculateThisMonthSales(product).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    "Last Month Sale": `MMK${calculateLastMonthSales(product).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    "Total Units Sold": calculateTotalOrders(product).toString(),
    "Growth": calculateGrowth(product),
    "Unit Price": `MMK${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
  //  "Category": product.category || "Unknown",
  }));

  const headers = Object.keys(filteredData[0]);
  const csvRows = [
    headers.join(","),
    ...filteredData.map((row: any) =>
      headers
        .map((header) => {
          const value = row[header] || "";
          // Escape commas and quotes in the value
          return `"${value.toString().replace(/"/g, '""')}"`;
        })
        .join(",")
    ),
  ];
  const csvString = csvRows.join("\n");

  const blob = new Blob([csvString], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "product_report.csv");
  a.click();
  window.URL.revokeObjectURL(url);
};

export default exportCsv;