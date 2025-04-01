import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/modules/common/components/ui/badge";
import DetaiRouteButton from "../../../column-detail-button";
import clsx from "clsx";
import { ProductImageype } from "@/lib/types";
import DetailButton from "../../../column-detail-button2";

export type Inventory = {
  id: string;
  product_name: string;
  current_stock: number;
  default_stock: number;
  stock_level: "Above Default" | "At Default" | "Below Default";
  last_updated: Date;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock_status: string;
  default_stock_level: number;
  bulk_price: number;
  created_at: string;
  stock_level: string;
  stock_histories: StockHistories[];
  category: {
    id: string;
    name: string;
  };
  order_items: {
    id: string;
    quantity: number;
    price: number;
    created_at: string;
    status: string
  }[]
  images: ProductImageype[];
  shop: {
    id: string;
    name: string;
  };
};

interface StockHistories {
  id: string;
  created_at: string;
}

export const inventoryColumns: ColumnDef<Inventory>[] = [
  {
    accessorKey: "product_name",
    header: "Product Name",
  },
  {
    accessorKey: "current_stock",
    header: "Current Stock",
  },
  {
    accessorKey: "default_stock",
    header: "Default Stock",
  },
  {
    accessorKey: "stock_level",
    header: "Stock Level",
    cell: ({ row }) => {
      const level = row.getValue("stock_level") as string;
      return (
        <></>
        // <Badge
        //   variant={
        //     level === "Above Default"
        //       ? "success"
        //       : level === "At Default"
        //       ? "default"
        //       : "destructive"
        //   }
        // >
        //   {level}
        // </Badge>
      );
    },
  },
  {
    accessorKey: "last_updated",
    header: "Last Updated",
    cell: ({ row }) => {
      const date = row.getValue("last_updated") as Date;
      return date.toLocaleDateString();
    },
  },
];

export const ProductInventoryColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Product Name</div>,
    cell: ({ row }) => {
      return <span className="text-secondary_color">{row.original.name}</span>;
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-secondary_color border w-auto px-4 py-2 rounded bg-white">
            {row.original.category.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "brand",
    header: () => <div className="text-left">Brand</div>,
    cell: ({ row }) => {
      return <span className="text-secondary_color">{row.original.shop.name}</span>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-left">Stock</div>,
    cell: ({ row }) => {
      return (
        <span
          className={clsx("", {
            "text-yellow-600":
              row.original.quantity < row.original.default_stock_level,
            "text-secondary_color": !(
              row.original.quantity < row.original.default_stock_level
            ),
          })}
        >
          {row.original.quantity ? row.original.quantity : 0}
        </span>
      );
    },
  },
  {
    accessorKey: "stock_level",
    header: "Stock Level",
    cell: ({ row }) => {
      return (
        <span className={clsx("",{
          "text-red-500": row.original.stock_level === "Below Default",
          "text-green-500": row.original.stock_level === "Above Default",
          "text-secondary_color": row.original.stock_level !== "Below Default" && row.original.stock_level !=="Above Default",
        })}>
          {row.original.stock_level}
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => {
      return <span className="text-secondary_color">{row.original.price}</span>;
    },
  },
  {
    accessorKey: "bulk price",
    header: () => <div className="text-left">Bulk Price</div>,
    cell: ({ row }) => {
      return <span className="text-secondary_color">{row.original.bulk_price}(10+)</span>;
    },
  },
  {
    accessorKey: "turnover rate",
    header: () => <div className="text-left">Turnover Rate</div>,
    cell: ({ row }) => {
      const itemsSold = row.original.order_items
        .filter((item) => item.status?.toLowerCase() === "completed")
        .reduce((sum, item) => sum + item.quantity, 0);

      const TURNOVER_THRESHOLD = 100;
      const turnoverLabel = itemsSold >= TURNOVER_THRESHOLD ? "High" : "Low";

      return (
        <div className="text-secondary_color flex flex-col items-center">
         <span className="text-black font-semibold text-sm">{turnoverLabel}</span>  <span>({itemsSold} Units Sold)</span>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <DetaiRouteButton
          route="/inventory-management/stock-level-management"
          id={row.getValue("id")}
          label="Restock Now"
        />
           <DetailButton
          route="/product-management/product/product-detail"
          id={row.getValue("id")}
        />
        </div>
        
      );
    },
  },
];
