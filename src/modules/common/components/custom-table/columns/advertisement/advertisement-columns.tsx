import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/modules/common/components/ui/badge";
import { format } from "date-fns";

export type Advertisement = {
  id: string;
  title: string;
  start_date: Date;
  end_date: Date;
  status: "Active" | "Scheduled" | "Ended" | "Draft";
  target_shops: string[];
};

export const advertisementColumns: ColumnDef<Advertisement>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ row }) => {
      const date = row.getValue("start_date") as Date;
      return format(date, "MMM dd, yyyy");
    },
  },
  {
    accessorKey: "end_date",
    header: "End Date",
    cell: ({ row }) => {
      const date = row.getValue("end_date") as Date;
      return format(date, "MMM dd, yyyy");
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "Active"
              ? "default"
              : status === "Scheduled"
              ? "secondary"
              : status === "Draft"
              ? "outline"
              : "destructive"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "target_shops",
    header: "Target Shops",
    cell: ({ row }) => {
      const shops = row.getValue("target_shops") as string[];
      return shops.join(", ");
    },
  },
]; 