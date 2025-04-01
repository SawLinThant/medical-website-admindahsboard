import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/modules/common/components/ui/badge";

export type ProductColumnDef = {
  id: string;
  name: string;
  category: string;
  stock_status: "In Stock" | "Low Stock" | "Out of Stock";
  price: number;
  created_date: Date;
  order_items: {
    id: string;
    quantity: number;
    created_at: string;
    price: number
  }[]
};

export const ProductColumns: ColumnDef<ProductColumnDef>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "total sale",
    header: "Total Sale",
    cell: ({ row }) => {
      const totalSale = row.original.order_items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
      return <div>MMK {totalSale.toFixed(2)}</div>;
    },
  },

  {
    accessorKey: "price",
    header: "Unit Sold",
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return `MMK ${price.toFixed(2)}`;
    },
  },
  {
    accessorKey: "last month sale",
    header: "Last Month Sale",
    cell: ({ row }) => {
      const now = new Date();
      const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      const lastMonthSale = row.original.order_items
        .filter(
          (item) =>
            new Date(item.created_at) >= startOfLastMonth &&
            new Date(item.created_at) <= endOfLastMonth
        )
        .reduce((sum, item) => sum + item.quantity * item.price, 0);
      return <div>MMK{lastMonthSale.toFixed(2)}</div>;
    },
  },
  {
    accessorKey: "total order",
    header: "Total Order",
    cell:({row}) => {
      const totalQuantity = row.original.order_items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return <div>{totalQuantity}</div>
    }
  },
  {
    accessorKey: "growth",
    header: "Growth",
    cell: ({ row }) => {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

      const thisMonthSale = row.original.order_items
        .filter((item) => new Date(item.created_at) >= startOfMonth)
        .reduce((sum, item) => sum + item.quantity * item.price, 0);

      const lastMonthSale = row.original.order_items
        .filter(
          (item) =>
            new Date(item.created_at) >= startOfLastMonth &&
            new Date(item.created_at) <= endOfLastMonth
        )
        .reduce((sum, item) => sum + item.quantity * item.price, 0);

      if (lastMonthSale === 0) {
        return <div>{thisMonthSale > 0 ? "∞%" : "0%"}</div>;
      }

      const growth = ((thisMonthSale - lastMonthSale) / lastMonthSale) * 100;
      return <div>{growth.toFixed(1)}%</div>;
    },
  },
]; 