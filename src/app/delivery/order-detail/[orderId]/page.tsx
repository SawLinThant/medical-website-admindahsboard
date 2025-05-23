"use client";

import { useGetOrderById } from "@/lib/hooks/useGetQuery";
import { useMutation } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { UPDATE_ORDER_STATUS } from "@/lib/apolloClient/mutation/orderMutation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const OrderDetail: React.FC = () => {
  const { orderId } = useParams() as { orderId: string };
  const { order, loadingOrder, error } = useGetOrderById(orderId);
  const router = useRouter();

  const [updateOrderStatus, { loading: mutationLoading }] =
    useMutation(UPDATE_ORDER_STATUS);

  const shops = useMemo(() => {
    if (!order?.order_items) return [];
    const shopMap = new Map<
      string,
      { name: string; phone: string; items: typeof order.order_items }
    >();
    order.order_items.forEach((item) => {
      const shopName = item.shop.name;
      if (!shopMap.has(shopName)) {
        shopMap.set(shopName, {
          name: shopName,
          phone: item.shop.phone,
          items: [],
        });
      }
      shopMap.get(shopName)!.items.push(item);
    });
    return Array.from(shopMap.values());
  }, [order]);

  const handleMarkDelivering = async () => {
    if (!order) return;
    try {
      await updateOrderStatus({
        variables: { id: order.id, status: "Delivering" },
      });
      toast({
        title: "Success",
        description: "Order marked as Delivering",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update order status",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
  };

  const handleMarkComplete = async () => {
    if (!order) return;
    try {
      await updateOrderStatus({
        variables: { id: order.id, status: "Complete" },
      });
      toast({
        title: "Success",
        description: "Order marked as Complete",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update order status",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "success";
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

  if (loadingOrder) {
    return (
      <div className="flex h-screen items-center justify-center text-base">
        Loading order...
      </div>
    );
  }
  //   if (errorOrder) return <div className="text-base text-red-500">Error: {errorOrder.message}</div>;
  if (!order)
    return <div className="text-base text-red-500">Order not found</div>;

  return (
    <section className="w-full flex flex-col gap-4 p-4 sm:p-6">
      <div className="flex items-center">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          size="icon"
          className="h-10 w-10 mr-2 border rounded-lg bg-secondary_color text-white"
          asChild
        >
          <span>
            <ArrowLeft className="h-5 w-5" />
          </span>
        </Button>
      </div>
      <h1 className="text-xl sm:text-2xl font-bold">Order #{order.id}</h1>
      <div className="flex flex-col gap-4">
        {/* Customer Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">
              Customer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base">
            <p>
              <span className="font-semibold">Name:</span> {order.user.username}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {order.user.phone}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {order.user.delivery_addresses[0]?.address}
            </p>
            <Badge
              variant={getStatusVariant(order.status)}
              className="mt-2 text-base py-1 px-2"
            >
              {order.status === "Picking Up Order"?"Assigned":order.status}
            </Badge>
          </CardContent>
        </Card>

        {/* Shops and Order Items */}
        {shops.map((shop) => (
          <Card key={shop.name}>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                {shop.name}
              </CardTitle>
              <p className="text-base text-muted-foreground">
                Phone: {shop.phone}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {shop.items.map((item, index) => (
                  <div
                    key={`${shop.name}-${item.product.name}-${index}`}
                    className="flex flex-col sm:flex-row gap-4 items-start"
                  >
                    {item.product.images[0]?.image_url && (
                      <Image
                        src={item.product.images[0].image_url}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-1 text-base">
                      <p>
                        <span className="font-semibold">Product:</span>{" "}
                        {item.product.name}
                      </p>
                      <p>
                        <span className="font-semibold">Quantity:</span>{" "}
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Status Button */}
        {order.status !== "Complete" &&
          order.status !== "Cancelled" &&
          order.status == "Picking Up Order" && (
            <Button
              onClick={handleMarkDelivering}
              disabled={mutationLoading}
              className="h-10 text-base sm:w-auto w-full"
            >
              {mutationLoading ? "Updating..." : "Mark as Delivering"}
            </Button>
          )}
        {order.status !== "Complete" &&
          order.status !== "Cancelled" &&
          order.status == "Delivering" && (
            <Button
              onClick={handleMarkComplete}
              disabled={mutationLoading}
              className="h-10 text-base sm:w-auto w-full"
            >
              {mutationLoading ? "Updating..." : "Mark as Complete"}
            </Button>
          )}
      </div>
    </section>
  );
};

export default OrderDetail;
