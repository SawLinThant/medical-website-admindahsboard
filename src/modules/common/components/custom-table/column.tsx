"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ProductImageype } from "@/lib/types";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ActionButton from "../column-button";

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
  quanitity: number;
  category: {
    id: string;
    name: string;
  };
  images: ProductImageype[];
};

interface Shop {
  id: string;
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
  category_id: string;
  remark: string;
  shop_admin_name: string;
  shop_category: {
    id: string
    name: string
  }
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
        const image_url = row.original.images[0]?row.original.images[0].image_url : null
        return <div className="flex flex-row gap-6">
            <div className="p-2 rounded-md bg-slate-400">
            <Image width={100} height={100} className="max-h-[70px] h-[70px] object-cover" src={image_url?image_url:"/images/image_placeholder.jpg"} alt="product"/>
            </div>
            
            <div className="h-[70px] flex flex-row items-center"><span>{row.original.images[0]?row.original.images[0].product.name:"deleted product"}</span></div>
        </div>;
      },
  },
  {
    accessorKey: "category",
    header: () => (
        <div className="text-left">Category</div> 
      ),
    cell: ({ row }) => {
      return <span className="px-3 py-2 rounded-md bg-white">{row.original.category.name}</span>;
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
    header: () => (
        <div className="text-center">Action</div>
      ),
    cell: ({ row }) => {
      return <ActionButton id={row.getValue("id")} />;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 border border-gray-300">
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
      )
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
        const image_url = row.original.logo?row.original.logo : null
        return <div className="flex flex-row gap-6">
            <div className="p-2 rounded-md bg-slate-400">
            <Image width={100} height={100} className="max-h-[70px] h-[70px] object-cover" src={image_url?image_url:"/images/image_placeholder.jpg"} alt="product"/>
            </div>
        </div>;
      },
  },
  {
    accessorKey: "name",
    header: "Shop Name",
  },
  {
    accessorKey: "category",
    header: () => (
        <div className="text-left">Category</div> 
      ),
    cell: ({ row }) => {
      return <span className="px-3 py-2 rounded-md bg-white">{row.original.shop_category.name}</span>;
    },
  },
  {
    accessorKey: "shop_admin_name",
    header: "Shop Admin",
  },
  {
    accessorKey: "id",
    header: () => (
        <div className="text-center">Action</div>
      ),
    cell: ({ row }) => {
      return <ActionButton id={row.getValue("id")} />;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 border border-gray-300">
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
      )
    },
  },
];
