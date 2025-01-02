"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast, useToast } from "@/hooks/use-toast";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { STATUS } from "@/lib/constant";
import { useAccount } from "@/lib/context/account-context";
import {
  useGetOrderById,
  useGetOrderItemByOrderId,
  useGetShopOrders,
  useGetTax,
} from "@/lib/hooks/useGetQuery";
import { useUpdateOrderItemsStatus } from "@/lib/hooks/useMutation/order/useUpdateOrderStatus";
import { BackButton } from "@/modules/common/components/button";
import { DataTable } from "@/modules/common/components/custom-table";
import { OrderItemColumns } from "@/modules/common/components/custom-table/column";
import UpdateSelect from "@/modules/common/components/update-select";
import { useQuery } from "@apollo/client";
import { set } from "date-fns";
import { Mail, Phone } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const OrderDetail: React.FC = () => {
  const { userId } = useAccount();
  const { orderId } = useParams() as { orderId: string };
  const { shopOrders, setFilters } = useGetShopOrders();
  const [orderStatus, setOrderStatus] = useState<string>("");
  const { order, refetchOrder } = useGetOrderById(orderId);
  const { toast } = useToast();
  const { orderItems } = useGetOrderItemByOrderId(orderId);
  const { updateOrderItemsStatus } = useUpdateOrderItemsStatus();
  const { tax } = useGetTax();
  const deliveryFees = 0;
  const calculatedTax = tax? tax.value/100 : 0;
  const subTotal = shopOrders && shopOrders.length > 0? shopOrders?.[0].shop_total_price:0;
  const totalPrice = deliveryFees + subTotal + (subTotal*calculatedTax)
  const { data: userInfo } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  const user = userInfo ? userInfo.users?.[0] : [];
  useEffect(() => {
    setFilters({
      shop_id: user.shop_id || "",
      order_id: orderId,
    });
  }, [setFilters, userInfo]);

  useEffect(() => {
    if (order) {
      setOrderStatus(shopOrders[0].order_status);
    }
  }, [setOrderStatus, refetchOrder]);

  const handleUpdateOrder = async (value: string) => {
    setOrderStatus(value);
    try {
      const response = await updateOrderItemsStatus({
        order_id: orderId,
        shop_id: user.shop_id || "",
        status: value,
      });
      if (response) {
        refetchOrder();
        toast({
          description: "Order Updated",
        });
      }
    } catch {
      setOrderStatus(shopOrders[0].order_status || "");
      toast({
        variant: "destructive",
        description: "Unable to update order status",
      });
    }
  };

  const handleCancelOrder = async () => {
    setOrderStatus("Cancelled");
    try {
      const response = await updateOrderItemsStatus({
        order_id: orderId,
        shop_id: user.shop_id || "",
        status: "Cancelled",
      });
      if (response) {
        refetchOrder();
        toast({
          description: "Order Updated",
        });
      }
    } catch {
      setOrderStatus(shopOrders[0].order_status || "");
      toast({
        variant: "destructive",
        description: "Unable to update order status",
      });
    }
  };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            Back to order list
          </div>
          <h1 className="text-headercolor font-bold text-xl">Order Detail</h1>
        </div>
        <div className="min-w-16 p-2 rounded-md text-sm border ml-10">
          {shopOrders[0]?.order_status}
        </div>
      </div>
      <div className="w-full grid grid-cols-8 gap-x-6">
        <div className="col-span-6 w-full flex flex-col gap-4">
          <div className="min-h-20 w-full">
            <DataTable data={orderItems || []} columns={OrderItemColumns} />
          </div>
          <div className="w-full flex flex-col gap-1 p-6 rounded-md border">
            <h3 className="text-lg">Payment Summary</h3>
            <div className="w-full flex flex-row items-center justify-between mt-5">
              <div className="flex flex-row gap-2 items-center">
                <span className="text-sm font-semibold">Subtotal</span>
                <span className="text-sm text-muted-foreground">
                  ({shopOrders[0]?.total_items} items)
                </span>
              </div>
              <span className="text-sm">
                MMK {shopOrders[0]?.shop_total_price.toLocaleString()}
              </span>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2 items-center">
                <span className="text-sm font-semibold">Delivery</span>
              </div>
              <span className="text-sm">MMK {deliveryFees.toLocaleString()}</span>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2 items-center">
                <span className="text-sm font-semibold">Tax</span>
                <span className="text-sm text-muted-foreground">
                  PDV {tax?.value || 0}% (included)
                </span>
              </div>
              <span className="text-sm">MMK {(calculatedTax*subTotal).toLocaleString()}</span>
            </div>
            <Separator className="my-5" />
            <div className="w-full flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">
                <span className="text-sm font-semibold">
                  Total Paid By Customer
                </span>
              </div>
              <span className="text-sm">MMK {totalPrice.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6">
            <Button
              onClick={handleCancelOrder}
              variant="outline"
              className="text-yellow-600"
            >
              Cancel Order
            </Button>
            <div className="w-[15rem]">
              <UpdateSelect
                options={STATUS}
                setCategory={handleUpdateOrder}
                label={shopOrders[0]?.order_status || ""}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md border w-full flex flex-col gap-4">
          <h2 className="font-semibold text-xl">Customer</h2>
          <span className="text-muted-foreground text-sm">
            {shopOrders[0]?.username}
          </span>
          <Separator className="my-2" />
          <span className="text-sm">{shopOrders[0]?.total_items} Order(s)</span>
          <Separator className="my-2" />
          <div className="flex flex-col gap-2 items-start">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="flex flex-row gap-4 text-sm mt-3 break-words">
              <Mail size={17} />
              {order?.user.email}
            </div>
            <div className="flex flex-row items-center gap-4 text-sm">
              <Phone size={17} />
              {order?.user.phone}
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold">Shipping address</h3>
            <span className="text-sm">{shopOrders[0]?.shipping_address}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold">Billing address</h3>
            <span className="text-sm">{shopOrders[0]?.billing_address}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderDetail;
