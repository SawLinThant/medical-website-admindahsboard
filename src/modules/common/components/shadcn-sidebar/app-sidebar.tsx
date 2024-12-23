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

const DUMMY_USER = {
  name: "Axra",
  email: "axra@example.com",
  avatar: "/avatars/shadcn.jpg",
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const {role} = useAccount();
  const Routes = role === "admin"? ADMIN_SIDEBAR_ROUTES:SIDEBAR_ROUTES
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full min-h-32 p-4 flex items-center justify-center">
          <div className="w-full h-full bg-inputlabel rounded border flex items-center justify-center border-gray-500">
            <h1 className="font-extrabold text-white">Medical</h1>
          </div>
        </div>
      </SidebarHeader>
      <SearchForm />
      <SidebarContent className="px-4 mt-6">
        <SidebarContents items={Routes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={DUMMY_USER} />
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
