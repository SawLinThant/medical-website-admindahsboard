"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton : React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="w-full h-full">
      <Button
        onClick={handleBack}
        className="w-full h-full p-2 flex flex-row items-center justify-center rounded-md bg-gray-50 border border-gray-400"
      >
        <ArrowLeft color="gray" size={30}/>
      </Button>
    </div>
  );
};
export default BackButton;
