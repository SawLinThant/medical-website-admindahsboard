"use client";

import { toast } from "@/hooks/use-toast";
import { useGetDeliveryUserByUid } from "@/lib/hooks/useQuery/delivery-users/useGetDeliveryUsers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Content from "./content";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { deliveryUser, loading, error } = useGetDeliveryUserByUid();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && !deliveryUser && !localStorage.getItem("userUid")) {
      toast({
        variant: "destructive",
        description: "Please log in to access the dashboard",
      });
      router.push("/login");
    } else if (!loading && error) {
      toast({
        variant: "destructive",
        description: "Failed to fetch user details",
      });
      router.push("/login");
    }
  }, [loading, deliveryUser, error, router]);

//   if (loading) return <div className="flex h-screen items-center justify-center text-base">Loading...</div>;
  if (!deliveryUser) return null;

  return (
    <div className="flex h-screen flex-col">
      <Navbar
        username={deliveryUser.name}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Content isSidebarOpen={isSidebarOpen}>{children}</Content>
    </div>
  );
}