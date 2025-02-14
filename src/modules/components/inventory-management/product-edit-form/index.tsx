"use client";

import { useEffect, useState } from "react";
import { ProductInfo } from "../../product-management/productDetailForm";
import {
  useGetDropdownProducts,
  useGetProductById,
} from "@/lib/hooks/useGetQuery";
import BackButton from "@/modules/common/components/button/backButton";
import CustomUpdateInput from "@/modules/common/components/custom-update-input";
import CustomUpdateTextArea from "@/modules/common/components/custom-update-textarea";
import { useQuery } from "@apollo/client";
import { useAccount } from "@/lib/context/account-context";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { Label } from "@/components/ui/label";
import Combobox from "@/modules/common/components/dropdown";
import CustomRadioGroup from "@/modules/common/components/radio-button";
import { StockAdjustmentOptoins } from "@/lib/constant";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useUpdateProductQuantity } from "@/lib/hooks/useMutation/product/useUpdateProduct";
import { useCreateStockHistory } from "@/lib/hooks/useMutation/stockHistory";
import { useGetStockHistories } from "@/lib/hooks/useQuery/stockHistory";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

type ProducEditFormProps = {
  id?: string;
};

const ProductEditForm: React.FC<ProducEditFormProps> = () => {
  const [productId, setProductId] = useState<string>("");
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const { userId } = useAccount();
  const searchParams = useSearchParams();
const productID = searchParams.get('productID');
  const { handleUpdateProduct } = useUpdateProductQuantity();
  const [adjustmentOption, setAdjustmentOption] = useState<string>("add");
  const [adjustedQuantity, setAdjustedQuantity] = useState<number | null>(0);
  const { handleCreateStockHistory } = useCreateStockHistory();
  const { data: userInfo } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  const product = useGetProductById(productId);
  const user = userInfo ? userInfo.users?.[0] : [];
  const { products, setFilters } = useGetDropdownProducts();
  const [reason, setReason] = useState<string>("");
  const {stockHistories, refetchStock} = useGetStockHistories(user?.shop_id,productId)
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    id: "",
    name: "",
    price: 0,
    bulk_price: 0,
    quantity: 0,
    description: "",
    dosage: "",
    usage: "",
    storage: "",
    category_id: "",
    default_stock_level: 0,
    category: {
      id: "",
      name: "",
    },
  });

  useEffect(() => {
    if(productID){
      setProductId(productID)
    }
  },[productID])

  // useEffect(() => {
  //   if (product && product.product) {
  //     console.log("Setting productInfo:");
  //     setProductInfo(product.product);
  //   }
  // },[productId,product]);
  console.log(productID)
  useEffect(() => {
    if (product?.product && product.product.id !== productInfo.id) {
      console.log("Setting productInfo:", product.product);
      setProductInfo(product.product);
    }
  }, [product]); 

  useEffect(() => {
    setFilters({
      shop_id: user.shop_id || "",
    });
  }, [setFilters, userInfo]);
  const handleUpdateStock = async () => {
    if (adjustedQuantity === 0) {
      toast({
        description: "Invalid Stock Quantity",
      });
      return;
    }
    if (productId === "") {
      toast({
        description: "Please select a product",
      });
      return;
    }
    if (reason === "") {
      toast({
        description: "Please add a reason",
      });
      return;
    }
    try {
      setUpdateLoading(true);
      const updatedQuantity = adjustmentOption === "add"? (productInfo.quantity + (adjustedQuantity || 0)) : (productInfo.quantity - (adjustedQuantity || 0))
      const defaultStock = productInfo.default_stock_level;
      const repsone = await handleUpdateProduct(productId, defaultStock ,updatedQuantity);
      if (repsone) {
        const newHistory = await handleCreateStockHistory({
          reason: reason,
          type: adjustmentOption,
          product_id: productId,
          shop_id: user.shop_id || "",
          stock_available: productInfo.quantity || 0,
          adjusted_quantity: adjustedQuantity || 0
        });
        if (newHistory) {
          toast({
            description: "Stock Updated",
          });
          refetchStock()
        }
      }
    } catch (err) {
      setUpdateLoading(false);
      toast({
        description: "Failed to update stock",
        variant: "destructive",
      });
      console.log("error updating stock", err);
    } finally {
      setUpdateLoading(false);
    }
  };
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          {/* <div className="text-sm text-muted-foreground">
            Back to product list
          </div> */}
          <h1 className="text-headercolor font-bold text-xl">
            Stock Level Management
          </h1>
        </div>
      </div>
      <form
      //  onSubmit={handleUpdateStock}
      >
        <div className="w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32">
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Add/Reduce Stock Level
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-full flex flex-col gap-2">
                  <Label className="text-inputlabel">Product</Label>
                  <Combobox
                    label="Select Product"
                    setCategory={setProductId}
                    options={products}
                  />
                </div>
                <div className="w-full">
                  <CustomUpdateInput
                    name="name"
                    label="SKU"
                    placeHolder={productInfo.name}
                    type="text"
                    value={productInfo.name}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-1/2">
                  <CustomUpdateInput
                    name="quantity"
                    label="Stock Available"
                    placeHolder={productInfo.quantity.toLocaleString() || "0"}
                    type="number"
                    value={productInfo.quantity || ""}
                    onChange={(e) =>
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <CustomRadioGroup
                  setOption={setAdjustmentOption}
                  options={StockAdjustmentOptoins}
                />
                <div className="w-1/2">
                  <CustomUpdateInput
                    name="stock"
                    label="Adjustment Quantity"
                    placeHolder={
                      adjustedQuantity?.toLocaleString() ||
                      "Enter adjustment quantity"
                    }
                    type="text"
                    value={adjustedQuantity || 0}
                    onChange={(e) =>
                      setAdjustedQuantity(parseInt(e.target.value))
                    }
                  />
                </div>
                <CustomUpdateTextArea
                  placeHolder="Enter reason/note"
                  label="Reason/Note"
                  name="reason/note"
                  value={reason || ""}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">
                Default Stock Level{" "}
                <span className="text-sm font-medium">(For stock alert)</span>
              </h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
                <div className="w-1/2">
                  <CustomUpdateInput
                    name="default_stock_level"
                    label="Default Stock Level"
                    placeHolder={
                      productInfo.default_stock_level?.toLocaleString() ||
                      "Enter adjustment quantity"
                    }
                    type="number"
                    value={productInfo.default_stock_level ?? ""}
                    onChange={(e) => {
                      setProductInfo((prev) => ({
                        ...prev,
                        [e.target.name]: Number(e.target.value),
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-h-20 flex flex-row justify-between">
              <div>
                <Button
                  disabled={updateLoading}
                  type="button"
                  className="bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]"
                >
                  Discard
                </Button>
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  // type="submit"
                  type="button"
                  onClick={handleUpdateStock}
                  disabled={updateLoading}
                  className="rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]"
                >
                  {updateLoading ? (
                    <Loader className="animate-spin" size={25} />
                  ) : (
                    "Update Stock"
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-full flex flex-col gap-8">
            <div className="w-full min-h-20 flex flex-col gap-2">
              <h2 className="font-bold text-lg text-headercolor">History</h2>
              <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 px-8 max-h-[72vh] overflow-y-auto scrollbar-thin">
                {stockHistories && stockHistories.map((history:any,index:number) => (
                  <div key={index} className="w-full py-8 flex flex-col gap-4 border-b">
                  <h2 className={clsx("font-semibold",{
                    "text-muted-foreground":history.type === "add",
                    "text-red-500":history.type === "reduce",
                  })}>{history.type === "add"?"Add Stock":"Reduce Stock"}</h2>
                  <div className="w-full flex flex-col text-sm gap-2">
                    <div className="grid grid-cols-2">
                      <div className="w-full text-muted-foreground">
                        <span>Date</span>
                      </div>
                      <div className="w-full font-semibold">
                        <span>{new Date(history.created_at).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="w-full text-muted-foreground">
                        <span>Reason/Note</span>
                      </div>
                      <div className="w-full font-semibold">
                        <span>{history.reason}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="w-full text-muted-foreground">
                        <span>Stock Available</span>
                      </div>
                      <div className="w-full font-semibold">
                        <span>{history.stock_available}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="w-full text-muted-foreground">
                        <span>Adjustment Quantity</span>
                      </div>
                      <div className="w-full font-semibold">
                        <span>{history.adjusted_quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
                {!stockHistories || stockHistories.length < 1?(
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">Select product first to the stock add/reduce history here</div>
                ):null}
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default ProductEditForm;
