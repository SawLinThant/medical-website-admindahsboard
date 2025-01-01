"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { useAccount } from "@/lib/context/account-context";
import { useGetShopOrders } from "@/lib/hooks/useGetQuery";
import { ShopOrders } from "@/lib/types";
import { cn } from "@/lib/utils";
import { DataTable } from "@/modules/common/components/custom-table";
import { OrderColumns } from "@/modules/common/components/custom-table/column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { useQuery } from "@apollo/client";
import { FileSpreadsheet, Search } from "lucide-react";
import { useEffect, useState } from "react";

const ORDER_TYPE = [
    {
        id: "1",
        value: "All",
        label: "All"
    },
    {
        id: "2",
        value: "Completed",
        label: "Completed"
    },
    {
        id: "3",
        value: "Delivering",
        label: "Delivering"
    },
    {
        id: "4",
        value: "Pending",
        label: "Pending"
    },
]

const OrderList: React.FC = () => {
    const { userId } = useAccount();
    const itemPerPage = 10;
    const { shopOrders, setFilters, page, setPage, totalCount, setTake } = useGetShopOrders();
    const totalPages = Math.ceil(totalCount / itemPerPage);
    const { data: userInfo } = useQuery(GET_USER_BY_ID, {
        variables: {
            id: userId,
        },
    });
    const user = userInfo ? userInfo.users?.[0] : [];
    const [orderType,setOrderType] = useState<string>("All")
    const [searchName, setSearchName] = useState<string>("");

    useEffect(() => {
        setTake(itemPerPage);
        setFilters({
            shop_id: user.shop_id || "",
            order_status: orderType === "All" ? undefined : orderType,
            username: searchName
        })
    }, [setFilters, setTake, userInfo, setOrderType, orderType, setSearchName, searchName])

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const exportCsv = (tableData:ShopOrders[]) => {
        if (!tableData) {
            toast({
                description: "No data to export",
              });
        }
    
        const filteredData = tableData.map((order) => {
            const date = new Date(order.created_date);
            return {
                id: order.order_id,
                customer: order.username,
                total_price: order.shop_total_price,
                created_date: date.toLocaleString(),
                biling_address: order.billing_address,
                billin_phone_no: order.billing_phone_no,
                total_item: order.total_items,
                payment: order.payment
            }
        })
        const headers = Object.keys(filteredData[0]);
        const csvRows = [
          headers.join(","),
          ...filteredData.map((row:any) =>
            headers.map((header) => JSON.stringify(row[header] || "")).join(",")
          ),
        ];
        const csvString = csvRows.join("\n");
    
        const blob = new Blob([csvString], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("download", "Orders.csv");
        a.click();
      };

    return (
        <section className="w-full h-full flex flex-col gap-4 p-4">
            <h2 className="font-bold text-xl">Orders</h2>
            <div className="min-h-24 w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                   {ORDER_TYPE.map((order) => (
                    <span 
                    onClick={() => setOrderType(order.value)} 
                    key={order.id} 
                    className={cn("hover:text-secondary_color hover:cursor-pointer",{
                        "text-secondary_color": orderType === order.value,
                        "text-secondary_color/55": orderType !== order.value
                    })}>{order.label}</span>
                   ))}                  
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="relative">
                        <Input
                             value={searchName}
                             onChange={(e) => setSearchName(e.target.value)}
                            placeholder="Search customers"
                            className="pl-10 py-4 w-[230px] border border-gray-400 focus-visible:ring-offset-0 focus-visible:ring-0"
                        />
                        <div className="absolute top-2 left-2">
                            <Search className="" />
                        </div>
                    </div>
                    {/* <SelectDropdown
            setOption={setCategory}
            options={categories}
            label="Filter By"
          /> */}
                    {/* <PriceSelectDropdown
            setOption={setPriceRange}
            options={priceRanges}
            label="Price Range"
          /> */}
                    <Button
                        onClick={() =>
                            exportCsv(shopOrders)
                        }
                        className="flex items-center min-h-10 bg-inputlabel rounded-md"
                    >
                        Export
                        <FileSpreadsheet />
                    </Button>
                </div>
            </div>
            <DataTable data={shopOrders} columns={OrderColumns} />
            <PaginationControll
                totalPages={totalPages}
                currentPage={page}
                onPageChange={handlePageChange}
            />
        </section>
    );
};
export default OrderList;
