import { DeliveryUsers } from "@/lib/hooks/useMutation/delivery-users/useCreateDeliveryUsers";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Span } from "next/dist/trace";
import DetaiRouteButton from "../../../column-detail-button";
import DetailButton from "../../../column-detail-button2";
import ActionButton from "../../../column-button";

export const deliveryUsersColumn: ColumnDef<DeliveryUsers>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "uid",
    header: "Unique ID",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
   {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: () => <div className="">Status</div>,
    cell: ({ row }) => {
      return (
        <div>
          <span className={cn("text-secondary_color border w-auto px-4 py-2 rounded bg-white",{
            "text-green-600": row.original.status === "available",
            "text-red-600": row.original.status === "unavailable",
            "text-yellow-600": row.original.status === "on deliver",
          })}>
            {row.original.status}
          </span>
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
          route="/delivery-onboard/delivery-user-detail/"
          id={row.getValue("id")}
        />
      );
    },
  },
];