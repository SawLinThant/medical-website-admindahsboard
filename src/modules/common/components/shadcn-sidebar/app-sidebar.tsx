"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import React from "react";
import { SidebarContents } from "./content";
import { ADMIN_SIDEBAR_ROUTES, SIDEBAR_ROUTES } from "@/lib/constant";
import { SearchForm } from "./search-form";
import { NavUser } from "./nav-user";
import { useAccount } from "@/lib/context/account-context";
import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { useQuery } from "@apollo/client";
import { useGetShopById } from "@/lib/hooks/useGetQuery";
import Image from "next/image";


const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const {role} = useAccount();
  const Routes = role === "admin"? ADMIN_SIDEBAR_ROUTES:SIDEBAR_ROUTES;
  const {userId} = useAccount();
      const {data:userInfo} = useQuery(GET_USER_BY_ID,{
          variables:{
              id: userId
          }
      })
  const user = userInfo? userInfo.users?.[0] : [];
   const { shop } = useGetShopById(user.shop_id);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full min-h-32 p-4 flex items-center justify-center">
          <div className="w-full h-full rounded flex items-center justify-center">
             <Image className="object-contain" width={50} height={25} src="/images/logo.png" alt="logo"/>
          </div>
        </div>
      </SidebarHeader>
      <SearchForm />
      <SidebarContent className="px-4 mt-6">
        <SidebarContents items={Routes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser logo={shop?.logo || ""} email={user.email || ""} username={user.username || ""}/>
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
