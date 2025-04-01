import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import ActionButton from "../../../column-button";

interface NotificationColumnProps {
  id: string;
  shop_id: string;
  description: string;
  created_at: string;
  type: string;
  sender: string;
  title: string;
  annoucement_id: string;
  order_id: string;
  is_read: boolean;
}

export const notificationColumns: ColumnDef<NotificationColumnProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      return <div className="text-left">N{id.slice(0, 6)}...</div>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "sender",
    header: "Sender",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("created_at") as Date;
      return format(date, "MMM dd, yyyy");
    },
  },
  {
    accessorKey: "is_read",
    header: "Status",
    cell: ({ row }) => {
      const is_read = row.getValue("is_read") as boolean;
      return <div className="text-left">{is_read ? "Read" : "Unread"}</div>;
    },
  },
  {
    accessorKey: "detail",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <ActionButton
        label="Read"
          route="/shop-notification/"
          id={row.getValue("id")}
        />
      );
    },
  },
];
