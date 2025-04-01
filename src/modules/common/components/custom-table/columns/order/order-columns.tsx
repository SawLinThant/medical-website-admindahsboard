import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/modules/common/components/ui/badge";
import { format } from "date-fns";

export type Order = {
  id: string;
  order_number: string;
  customer: string;
  status: "Pending" | "Completed" | "Delivering" | "Cancelled";
  total_amount: number;
  created_date: Date;
};

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "order_number",
    header: "Order Number",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <></>
        // <Badge
        //   variant={
        //     status === "Completed"
        //       ? "success"
        //       : status === "Pending"
        //       ? "warning"
        //       : status === "Delivering"
        //       ? "default"
        //       : "destructive"
        //   }
        // >
        //   {status}
        // </Badge>
      );
    },
  },
  {
    accessorKey: "total_amount",
    header: "Total Amount",
    cell: ({ row }) => {
      const amount = row.getValue("total_amount") as number;
      return `$${amount.toFixed(2)}`;
    },
  },
  {
    accessorKey: "created_date",
    header: "Created Date",
    cell: ({ row }) => {
      const date = row.getValue("created_date") as Date;
      return format(date, "MMM dd, yyyy");
    },
  },
]; 