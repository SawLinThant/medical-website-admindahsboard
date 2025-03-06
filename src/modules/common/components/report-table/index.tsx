import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Shop } from "@/lib/types";

interface ReportDataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  sortBy?: string;
  tableOptions?: { meta?: { dateRange?: string } } 
}

export function ReportDataTable<TData>({ columns, data, sortBy, tableOptions }: ReportDataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<{ id: string; desc: boolean }[]>([]);


  React.useEffect(() => {
    switch (sortBy) {
      case "totalSalesDesc":
        setSorting([{ id: "totalSales", desc: true }]);
        break;
      case "totalSalesAsc":
        setSorting([{ id: "totalSales", desc: false }]);
        break;
      case "totalOrdersDesc":
        setSorting([{ id: "totalOrders", desc: true }]);
        break;
      case "totalOrdersAsc":
        setSorting([{ id: "totalOrders", desc: false }]);
        break;
      default:
        setSorting([]); // No sorting by default
    }
  }, [sortBy]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enable client-side sorting
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    meta: tableOptions?.meta || {},
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className={header.column.getCanSort() ? "cursor-pointer select-none" : ""} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanSort() && (
                    <span>
                      {header.column.getIsSorted() ? (header.column.getIsSorted() === "desc" ? " ↓" : " ↑") : " ↕"}
                    </span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border-none">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="mt-2 border-y-8 border-white bg-gray-100/50 rounded-md"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cn("px-4 py-3", {
                      "rounded-l-lg": index === 0,
                      "rounded-r-lg": index === row.getVisibleCells().length - 1,
                    })}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReportDataTable as React.FC<ReportDataTableProps<Shop>>;