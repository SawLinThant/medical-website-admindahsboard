"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Advertisements, OrderItem, ProductImageype, Shop, ShopOrders } from "@/lib/types";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ActionButton from "../column-button";
import clsx from "clsx";
import DetaiRouteButton from "../column-detail-button";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  default_stock_level: number;
  created_at: string;
  stock_histories: StockHistories[];
  category: {
    id: string;
    name: string;
  };
  images: ProductImageype[];
  shop: {
    id: string;
    name: string;
  };
};

export type ShopActivity = {
  id: string;
  activity: string;
  note: string;
  status: string;
  order_id: string;
  shop: {
    name: string;
  };
};

export type Announcement = {
  subject: string;
  shops: string[];
  created_date: Date;
  attachment: string;
  urgent: boolean;
};
// interface Shop {
//   id: string;
//   name: string;
//   logo: string;
//   description: string;
//   address: string;
//   phone: string;
//   category_id: string;
//   remark: string;
//   shop_admin_name: string;
//   shop_category: {
//     id: string;
//     name: string;
//   };
// }

interface StockHistories {
  id: string;
  created_at: string
}

export const productcolumns: ColumnDef<ProductCategory>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "images",
    header: "Product Detail",
    cell: ({ row }) => {
      const image_url = row.original.images[0]
        ? row.original.images[0].image_url
        : null;
      return (
        <div className="flex flex-row gap-6">
          <div className="p-2 rounded-md bg-slate-400">
            <Image
              width={100}
              height={100}
              className="max-h-[70px] h-[70px] object-cover"
              src={image_url ? image_url : "/images/image_placeholder.jpg"}
              alt="product"
            />
          </div>

          <div className="h-[70px] flex flex-row items-center">
            <span>
              {row.original.images[0]
                ? row.original.images[0].product.name
                : "deleted product"}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
    cell: ({ row }) => {
      return (
        <span className="px-3 py-2 rounded-md bg-white">
          {row.original.category.name}
        </span>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Stock",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MMK",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <ActionButton
          route="/product-management/product/product-detail/"
          id={row.getValue("id")}
        />
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 border border-gray-300"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const ProductOverviewColumns: ColumnDef<ProductCategory>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Product Name</div>,
    cell: ({ row }) => {
      return (
        <span className="">
          {row.original.name}
        </span>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
    cell: ({ row }) => {
      return (
        <span className="px-3 py-2 rounded-md bg-white">
          {row.original.category.name}
        </span>
      );
    },
  },
  {
    accessorKey: "shopId",
    header: () => <div className="text-left">Shop</div>,
    cell: ({ row }) => {
      return (
        <span className="">
          {row.original.shop.name}
        </span>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-left">Stock Level</div>,
    cell: ({ row }) => {
      return (
        <span className="p">
          {row.original.quantity}
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MMK",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },  
  {
    accessorKey: "created_at",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {new Date(row.original.created_at).toLocaleString()<= new Date().toLocaleString() ? "Active" : "Inactive"}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <ActionButton
          route="/product-management/product/product-detail/"
          id={row.getValue("id")}
        />
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 border border-gray-300"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const ProductStockColumns: ColumnDef<ProductCategory>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Product Name</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.name}
        </span>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-left">Stock</div>,
    cell: ({ row }) => {
      return (
        <span className={clsx("", {
          "text-yellow-600": (row.original.quantity < row.original.default_stock_level),
          "text-secondary_color": !(row.original.quantity < row.original.default_stock_level)
        })}>
          {row.original.quantity ? row.original.quantity : 0}
        </span>
      );
    },
  },
  {
    accessorKey: "default_stock_level",
    header: "Default Level",
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.default_stock_level}
        </span>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.category.name}
        </span>
      );
    },
  },
  {
    accessorKey: "stock_histories",
    header: () => <div className="text-left">Last Updated</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {new Date(row.original.stock_histories?.[0]?.created_at || "").toLocaleString()}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <DetaiRouteButton
          route="/inventory-management/stock-level-management"
          id={row.getValue("id")}
        />
      );
    },
  },
];

export const ShopActivityColumns: ColumnDef<ShopActivity>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Shop</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.shop.name}
        </span>
      );
    },
  },
  {
    accessorKey: "activity",
    header: () => <div className="text-left">Activity</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.activity}
        </span>
      );
    },
  },
  {
    accessorKey: "note",
    header: () => <div className="text-left">Note</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.note}
        </span>
      );
    },
  },
  {
    accessorKey: "order_id",
    header: () => <div className="text-left">Order ID</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.order_id}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      return (
        <span className="text-secondary_color">
          {row.original.status}
        </span>
      );
    },
  },
];

export const shopcolumns: ColumnDef<Shop>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "logo",
    header: "Product Detail",
    cell: ({ row }) => {
      const image_url = row.original.logo ? row.original.logo : null;
      return (
        <div className="flex flex-row gap-6">
          <div className="p-2 rounded-md bg-slate-400">
            <Image
              width={100}
              height={100}
              className="max-h-[70px] h-[70px] object-cover"
              src={image_url ? image_url : "/images/image_placeholder.jpg"}
              alt="product"
            />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Shop Name",
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
    cell: ({ row }) => {
      return (
        <span className="px-3 py-2 rounded-md bg-white">
          {row.original.shop_category.name}
        </span>
      );
    },
  },
  {
    accessorKey: "shop_admin_name",
    header: "Shop Admin",
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <ActionButton route="/shop/shop-detail/" id={row.getValue("id")} />
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 border border-gray-300"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const OrderColumns: ColumnDef<ShopOrders>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "order_id",
    header: "Order ID",
    cell: ({ row }) => {
      const value: string = row.getValue("order_id");
      return value.length > 10 ? `${value.slice(0, 15)}...` : value;
    },
  },
  {
    accessorKey: "username",
    header: "Customer",
  },
  {
    accessorKey: "shop_total_price",
    header: () => <div className="text-left">Total Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("shop_total_price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MMK",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "created_date",
    header: () => <div className="text-left">Created Date</div>,
    cell: ({ row }) => {
      const data: string = row.getValue("created_date");
      const date = new Date(data);
      return (
        <div className="text-left font-medium">{date.toLocaleString()}</div>
      );
    },
  },
  {
    accessorKey: "order_status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      return (
        <span className="px-3 py-2 rounded-md bg-white">
          {row.getValue("order_status")}
        </span>
      );
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <ActionButton route="/order/detail/" id={row.getValue("order_id")} />
      );
    },
  },
];

export const OrderItemColumns: ColumnDef<OrderItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "images",
    header: "Product Detail",
    cell: ({ row }) => {
      const image_url = row.original.product.images[0]
        ? row.original.product.images[0].image_url
        : null;
      return (
        <div className="flex flex-row gap-6">
          <div className="p-2 rounded-md bg-slate-400">
            <Image
              width={100}
              height={100}
              className="max-h-[70px] h-[70px] object-cover"
              src={image_url ? image_url : "/images/image_placeholder.jpg"}
              alt="product"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className=" flex flex-row items-center">
              <span>{row.original.product.name}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-sm text-muted-foreground">Brand:</span>
              <span className="text-sm">No Brand</span>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Stock",
  },
  {
    accessorKey: "subtotal",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("subtotal"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MMK",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
];

export const AdColumns: ColumnDef<Advertisements>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => {
      return (
        <span className="font-semibold">
          {row.original.name}
        </span>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      return (
        <div className={clsx("px-3 py-2 rounded-md w-[100px] text-center", {
          "bg-[#39AF9D1A] text-secondary_color": row.original.status === "Active",
          "bg-[#FF313B1A] text-muted-foreground": row.original.status === "Scheduled",
          "bg-[#F3F3F3] text-red-400": row.original.status === "Inactive",
        })}>
          {row.original.status}
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <ActionButton
          route="/advertisement/ad-detail/"
          id={row.getValue("id")}
        />
      );
    },
  },
]

const calculateTotalSales = (shop: Shop): number => {
  let total = 0;
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      if (item.status === "Completed") {
        total += item.subtotal ?? item.quantity * item.price;
      }
    });
  });
  return total;
};

const calculateLastMonthSales = (shop: Shop, dateRange: string): number => {
  const now = new Date();
  let startDate: Date;
  let endDate: Date = now;
  // console.log("date range:",dateRange)
  // switch (dateRange) {
  //   case "thisWeek":
  //     startDate = new Date(now.setDate(now.getDate() - now.getDay()));
  //     break;
  //   case "thisMonth":
  //     startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  //     break;
  //   case "thisYear":
  //     startDate = new Date(now.getFullYear(), 0, 1);
  //     break;
  //   case "lastWeek":
  //     startDate = new Date(now.setDate(now.getDate() - 7 - now.getDay()));
  //     endDate = new Date(now.setDate(now.getDate() - now.getDay() - 1));
  //     break;
  //   case "lastMonth":
  //     startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  //     endDate = new Date(now.getFullYear(), now.getMonth(), 0);
  //     break;
  //   case "lastYear":
  //     startDate = new Date(now.getFullYear() - 1, 0, 1);
  //     endDate = new Date(now.getFullYear() - 1, 11, 31);
  //     break;
  //   default:
  //     startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  // }

  const getLastDayOfMonth = (year: number, month: number): Date => {
    return new Date(Date.UTC(year, month + 1, 0, 23, 59, 59));
  };


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

  let total = 0;
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      if (item.status === "Completed") {
        const itemDate = new Date(item.created_at || "");
        console.log("Calculate last month function itemDate:", itemDate)
        console.log("Calculate last month function endDate:", endDate)
        if (itemDate >= startDate && itemDate <= endDate) {
          total += item.subtotal ?? item.quantity * item.price;
        }
      }
    });
  });

  return total;
};

const calculateTotalOrders = (shop: Shop): number => {
  const orderIds = new Set<string>();
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      orderIds.add(item.order_id);
    });
  });
  return orderIds.size;
};

export const calculateBestSellingProduct = (shop: Shop): string | null => {
  const productSales = new Map<string, number>();
  shop.products.forEach((product) => {
    let sales = 0;
    product.order_items.forEach((item) => {
      sales += item.subtotal ?? item.quantity * item.price;
    });
    productSales.set(product.id, sales);
  });
  const bestProduct = [...productSales.entries()].reduce((max, current) =>
    current[1] > max[1] ? current : max, ["", -Infinity] // Changed [null, -Infinity] to ["", -Infinity]
  );
  return bestProduct[0] ? shop.products.find((p) => p.id === bestProduct[0])?.name || null : null;
};

const calculateGrowth = (shop: Shop, dateRange: string): string => {
  const totalSales = calculateTotalSales(shop);
  const lastMonthSales = calculateLastMonthSales(shop, dateRange);
  if (lastMonthSales === 0) return "N/A";
  const growth = ((totalSales - lastMonthSales) / lastMonthSales) * 100;
  return `${growth.toFixed(1)}%`;
};

export const ReportColumns: ColumnDef<Shop>[] = [
  {
    accessorKey: "name",
    enableSorting: false,
    header: () => <div className="text-left">Shop Name</div>,
    cell: ({ row }) => (
      <span className="font-semibold">{row.original.name}</span>
    ),
  },

  {
    accessorKey: "totalSales",
    header: () => <div className="">Total Sales</div>,
    cell: ({ row }) => (
      <span>{calculateTotalSales(row.original).toLocaleString()}</span>
    ),
    enableSorting: false,
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = calculateTotalSales(rowA.original);
      const valueB = calculateTotalSales(rowB.original);
      return valueA - valueB;
    },
  },

  {
    accessorKey: "lastMonthSales",
    header: ({ table }) => (
      <div className="">
        {(table.options.meta as { dateRange?: string })?.dateRange || "Sales"}
      </div>
    ),
    cell: ({ row, table }) => {
      const dateRange = (table.options.meta as { dateRange?: string })?.dateRange || "thisMonth";
      return <span>{calculateLastMonthSales(row.original, dateRange).toLocaleString()}</span>;
    },
    enableSorting: false,
  },

  {
    accessorKey: "totalOrders",
    header: () => <div className="">Total Orders</div>,
    cell: ({ row }) => (
      <span>{calculateTotalOrders(row.original)}</span>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "bestSellingProduct",
    enableSorting: false,
    header: () => <div className="">Best Selling Product</div>,
    cell: ({ row }) => (
      <span>{calculateBestSellingProduct(row.original) || "N/A"}</span>
    ),
  },

  {
    accessorKey: "growth",
    header: () => <div className="">Growth</div>,
    cell: ({ row, table }) => {
      const dateRange = (table.options.meta as { dateRange?: string })?.dateRange || "thisMonth";
      return (
        <span
          className={clsx(
            "font-medium",
            calculateGrowth(row.original, dateRange).includes("-") ? "text-red-500" : "text-green-500"
          )}
        >
          {calculateGrowth(row.original, dateRange)}
        </span>
      );
    },
    enableSorting: false,
  },
]

export const ComparisonColumns: ColumnDef<Shop>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Shop Name</div>,
    cell: ({ row }) => (
      <span className="font-semibold">{row.original.name}</span>
    ),
  },

  {
    accessorKey: "totalSales",
    header: () => <div className="">Total Sales</div>,
    cell: ({ row }) => (
      <span>{calculateTotalSales(row.original).toLocaleString()}</span>
    ),
    enableSorting: true,
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = calculateTotalSales(rowA.original);
      const valueB = calculateTotalSales(rowB.original);
      return valueA - valueB;
    },
  },

  {
    accessorKey: "lastMonthSales",
    header: ({ table }) => <div className="">{(table.options.meta as { dateRange?: string })?.dateRange || "thisMonth"}</div>,
    cell: ({ row, table }) => {
      const dateRange = (table.options.meta as { dateRange?: string })?.dateRange || "thisMonth";
      return <span>${calculateLastMonthSales(row.original, dateRange).toLocaleString()}</span>;
    },
    enableSorting: false,
  },

  {
    accessorKey: "totalOrders",
    header: () => <div className="">Total Orders</div>,
    cell: ({ row }) => (
      <span>{calculateTotalOrders(row.original)}</span>
    ),
  },

  {
    accessorKey: "bestSellingProduct",
    header: () => <div className="">Best Selling Product</div>,
    cell: ({ row }) => (
      <span>{calculateBestSellingProduct(row.original) || "N/A"}</span>
    ),
  },

  {
    accessorKey: "growth",
    header: () => <div className="">Growth</div>,
    cell: ({ row, table }) => {
      const dateRange = (table.options.meta as { dateRange?: string })?.dateRange || "thisMonth";
      return (
        <span
          className={clsx(
            "font-medium",
            calculateGrowth(row.original, dateRange).includes("-") ? "text-red-500" : "text-green-500"
          )}
        >
          {calculateGrowth(row.original, dateRange)}
        </span>
      );
    },
    enableSorting: false,
  },
]