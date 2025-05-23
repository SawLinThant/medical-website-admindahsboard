"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast, useToast } from "@/hooks/use-toast";
import { UPDATE_ORDER_STATUS } from "@/lib/apolloClient/mutation/orderMutation";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { STATUS } from "@/lib/constant";
import { useAccount } from "@/lib/context/account-context";
import {
  useGetOrderById,
  useGetOrderItemByOrderId,
  useGetShopOrders,
  useGetTax,
} from "@/lib/hooks/useGetQuery";
import {
  useUpdateOrderDeliveryUser,
  useUpdateOrderItemsStatus,
} from "@/lib/hooks/useMutation/order/useUpdateOrderStatus";
import { useCreateShopActivity } from "@/lib/hooks/useMutation/shop-activities/useCreateShopActivities";
import {
  DeliveryUser,
  useGetDeliveryUsers,
  useSubscribeDeliveryUsers,
} from "@/lib/hooks/useQuery/delivery-users/useGetDeliveryUsers";
import { BackButton } from "@/modules/common/components/button";
import OrderPopUp from "@/modules/common/components/custom-popup";
import { DataTable } from "@/modules/common/components/custom-table";
import { OrderItemColumns } from "@/modules/common/components/custom-table/column";
import UpdateSelect from "@/modules/common/components/update-select";
import { useMutation, useQuery } from "@apollo/client";
import { set } from "date-fns";
import { Loader, Mail, Phone, Truck } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const DeliveryOrderDetail: React.FC = () => {
  const { userId } = useAccount();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { orderId } = useParams() as { orderId: string };
  const { shopOrders, setFilters } = useGetShopOrders();
  const [orderStatus, setOrderStatus] = useState<string>("");
  const { order, refetchOrder } = useGetOrderById(orderId);
  const {
    deliveryUsers,
    loading: usersLoading,
    error: usersError,
  } = useSubscribeDeliveryUsers();
  const {
    updateOrderDeliveryUser,
    loading: updateLoading,
    error: updateError,
  } = useUpdateOrderDeliveryUser();
  const { toast } = useToast();
  const { orderItems } = useGetOrderItemByOrderId(orderId);
  const { updateOrderItemsStatus } = useUpdateOrderItemsStatus();
  const { createShopActivity } = useCreateShopActivity();
  const [deliveryUserId, setDeliveryUserId] = useState<string>("");
  const { tax } = useGetTax();
  const deliveryFees = 0;
  const [updateOrderStatus, { loading: mutationLoading }] =
      useMutation(UPDATE_ORDER_STATUS);
  const calculatedTax = tax ? tax.value / 100 : 0;
  const subTotal =
    shopOrders && shopOrders.length > 0 ? shopOrders?.[0].shop_total_price : 0;
  //const totalPrice = deliveryFees + subTotal + (subTotal*calculatedTax)
  const totalPrice = subTotal + subTotal * calculatedTax;
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
      setOrderStatus(shopOrders[0]?.order_status || "");
    }
  }, [orderStatus, refetchOrder]);

  const handleUpdateOrder = async (value: string) => {
    setOrderStatus(value);
    try {
      const response = await updateOrderItemsStatus({
        order_id: orderId,
        shop_id: user.shop_id || "",
        status: value,
        updated_at: new Date(Date.now()).toISOString(),
      });
      if (response) {
        const shopActivity = await createShopActivity({
          shop_id: user.shop_id || "",
          activity: "Order Status Updated",
          order_id: orderId,
          status: value,
          note: "Order Status Updated",
        });
        if (shopActivity) {
          refetchOrder();
          setIsDialogOpen(true);
        }
      }
    } catch {
      setOrderStatus(shopOrders[0].order_status || "");
      toast({
        variant: "destructive",
        description: "Unable to update order status",
      });
    }
  };

  const deliveryUserOptions = useMemo(() => {
    return deliveryUsers.map((user) => ({
      id: user.id,
      value: user.id,
      name: user.name,
    }));
  }, [deliveryUsers]);

  const handleCancelOrder = async () => {
    setOrderStatus("Cancelled");
    try {
      const response = await updateOrderItemsStatus({
        order_id: orderId,
        shop_id: user.shop_id || "",
        status: "Cancelled",
        updated_at: null,
      });
      if (response) {
        refetchOrder();
        // toast({
        //   description: "Order Updated",
        // });
        setIsDialogOpen(true);
      }
    } catch {
      setOrderStatus(shopOrders[0].order_status || "");
      toast({
        variant: "destructive",
        description: "Unable to update order status",
      });
    }
  };

  const handleAssignDeliveryUser = async () => {
    if (!deliveryUserId) {
      toast({
        variant: "destructive",
        description: "Please select a delivery user",
      });
      return;
    }
    try {
       const orderStatusResult = await updateOrderStatus({
        variables: { id: orderId, status: "Picking Up Order" },
      });
      const result = await updateOrderDeliveryUser({
        id: orderId,
        delivery_user_id: deliveryUserId,
      });
      refetchOrder();
      setIsDialogOpen(true);
    } catch (err) {
      toast({
        variant: "destructive",
        description:
          err instanceof Error ? err.message : "Failed to assign delivery user",
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
              <span className="text-sm">
                MMK {deliveryFees.toLocaleString()}
              </span>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2 items-center">
                <span className="text-sm font-semibold">Tax</span>
                <span className="text-sm text-muted-foreground">
                  PDV {tax?.value || 0}% (included)
                </span>
              </div>
              <span className="text-sm">
                MMK {(calculatedTax * subTotal).toLocaleString()}
              </span>
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
          {/* <div className="flex flex-row items-center gap-6">
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
          </div> */}
          <div className="flex flex-row items-center gap-6">
            <div className="w-[15rem]">
              <UpdateSelect
                options={deliveryUserOptions}
                setCategory={setDeliveryUserId}
                //   label={
                //     deliveryUsers.find((user:any) => user.id === deliveryUserId)?.name ||
                //     "Select Delivery User"
                //   }
                //   options={STATUS}
                label="Select Delivery User"
              />
            </div>
            <Button
            className="min-w-[8rem]"
            onClick={handleAssignDeliveryUser} disabled={updateLoading}>
              <Truck className="mr-2 h-4 w-4" />
              {updateLoading ? <Loader className="animate-spin"/> : "Assign Delivery User"}
            </Button>
          </div>
          {/* i want to add assigning the deliveru man UI here */}
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
              {order?.user?.delivery_addresses?.[0]?.email || "N/A"}
            </div>
            <div className="flex flex-row items-center gap-4 text-sm">
              <Phone size={17} />
              {order?.user?.phone}
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold">Shipping address</h3>
            <span className="text-sm">{shopOrders[0]?.delivery_address}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold">Billing address</h3>
            <span className="text-sm">{shopOrders[0]?.billing_address}</span>
          </div>
          <OrderPopUp
            setIsDialogOpen={setIsDialogOpen}
            isDialogOpen={isDialogOpen}
          />
        </div>
      </div>
    </section>
  );
};
export default DeliveryOrderDetail;
