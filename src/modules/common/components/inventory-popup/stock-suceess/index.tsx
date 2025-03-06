import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Inventory from "@/modules/common/icons/inventory";
import { SquareCheck, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PopupProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (value:boolean) => void;
    adjustmentOption: string
    quantity: number;
    product: string
}

const StockSuccessPopUp:React.FC<PopupProps> =({isDialogOpen,setIsDialogOpen, adjustmentOption, quantity, product}) => {
  useEffect(() => {});
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
         // setCurrentSuccessPage("");
        }
      }}
    >
      <DialogTrigger asChild>
        <div
          onClick={() => setIsDialogOpen(true)}
          className="border-none bg-transparent hover:cursor-pointer"
        >
         
        </div>
      </DialogTrigger>
      <DialogContent className=" px-4 lg:py-12 md:py-12 py-10">
          <DialogTitle></DialogTitle>
          <div
            onClick={() => {
              setIsDialogOpen(false);
              //setCurrentSuccessPage("");
            }}
            className="absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full"
          >
            <X size={20} />
          </div>
          <div className="w-full min-h-[15rem] p-4">
            <div className="w-full h-full flex flex-col items-center">
                {/* <div className="w-[150px] h-[60px] relative">
                    <Image
                        alt="logo"
                        src="/images/logo.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div> */}
                <Inventory width="60" height="60"/>
                <div className="flex lg:flex-row items-center md:flex-row flex-col gap-2 mt-2">
                    <span className="font-semibold">{
                        adjustmentOption === "add"? "Stock Added Successfully!":"Stock Reduced Successfully!"
                        }</span>
                    {/* <span className="font-semibold text-secondary_color">
                        NatSay.com.mm
                    </span> */}
                </div>
                <div className="mt-6 rounded-xl  flex flex-col items-center gap-4 p-4">
                {/* <div>
                    <SquareCheck fill="#796f6f" size={20} color="white" strokeWidth={1.25} />
                </div> */}
                <span className="text-xs text-secondary_color">
                    {
                       `The stock level for ${product} has been updated to ${quantity}.`
                    }
                </span>
                <Button onClick={() => setIsDialogOpen(false)} className="rounded-lg mt-10">Ok</Button>
            </div>
            </div>
            
        </div>
        </DialogContent>
    </Dialog>
  );
}
export default StockSuccessPopUp
