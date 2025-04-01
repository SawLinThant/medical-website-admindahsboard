import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "@/modules/common/components/ui/badge";

export type Announcement = {
  subject: string;
  shops: string[];
  created_at: Date;
  attachment: string;
  urgent: boolean;
};

export const announcementColumns: ColumnDef<Announcement>[] = [
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "created_at",
    header: "Created Date",
    cell: ({ row }) => {
      const date = row.getValue("created_at") as Date;
      return format(date, "MMM dd, yyyy");
    },
  },
  {
    accessorKey: "attachment",
    header: "Attachment",
  },
]; 