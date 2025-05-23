"use client";

import { useSubscribeOrders, useSubscribeShopOrders } from "@/lib/hooks/useQuery/order/useGetOrders";
import { DataTable } from "@/modules/common/components/custom-table";
import { DeliveryOrderColumns, OrderColumns } from "@/modules/common/components/custom-table/column";

const OrderList: React.FC = () => {
  const { orders, loading, error } = useSubscribeOrders();
  console.log("Orders: ", orders);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Pending Orders</h2>
      <DataTable data={orders} columns={DeliveryOrderColumns} />
    </section>
  );
};

export default OrderList;