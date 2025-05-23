"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGetDeliveryUserByUid } from "@/lib/hooks/useQuery/delivery-users/useGetDeliveryUsers";
import { useGetOrdersStreaming } from "@/lib/hooks/useQuery/order/useGetOrders";

const DeliveryOrderDetail: React.FC = () => {
  const { deliveryUser, loading: userLoading } = useGetDeliveryUserByUid();
  const { orders, loading: ordersLoading, error: ordersError } = useGetOrdersStreaming(
    deliveryUser?.id || ""
  );

  console.log("Orders: ", orders);

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "default";
      case "in progress":
        return "default";
      case "pending":
        return "secondary";
        case "picking up order":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  if (userLoading || ordersLoading) {
    return <div className="flex h-screen items-center justify-center text-base">Loading orders...</div>;
  }
  if (ordersError) return <div className="text-base text-red-500">Error: {ordersError.message}</div>;

  return (
    <section className="w-full flex flex-col gap-4 p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold">Your Orders</h1>
      {orders.length === 0 ? (
        <Card className="p-4 text-base">
          <p>No orders assigned to you.</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order,index) => (
            <Card
              key={index}
              className={cn(
                "transition-shadow hover:shadow-lg",
                order.status.toLowerCase() === "cancelled" && "opacity-75"
              )}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-base font-semibold">Order #{order.id}</h2>
                    <p className="text-base text-muted-foreground">
                      Created: {new Date(order.created_date).toLocaleDateString()}
                    </p>
                    <Badge
                      variant={getStatusVariant(order.status)}
                      className="w-fit text-base py-1 px-2"
                    >
                      {order.status === "Picking Up Order"?"Assigned":order.status}
                    </Badge>
                  </div>
                  <Button
                    asChild
                    className="h-10 text-base sm:w-auto w-full"
                  >
                    <Link href={`/delivery/order-detail/${order.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default DeliveryOrderDetail;