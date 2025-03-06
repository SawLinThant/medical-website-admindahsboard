import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Success from "../success-pop-up";

interface PopupProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (value:boolean) => void
}

const OrderPopUp:React.FC<PopupProps> =({isDialogOpen,setIsDialogOpen}) => {
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
          <Success label="Order has been successfully updated" />
        </DialogContent>
    </Dialog>
  );
}
export default OrderPopUp
