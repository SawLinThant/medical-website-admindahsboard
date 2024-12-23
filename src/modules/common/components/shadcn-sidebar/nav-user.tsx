"use client";

import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

interface User {
  id?: string;
  username: string;
  email: string;
  logo?: string;
}

export function NavUser({ username, email, logo }: User) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <SidebarMenu className="mb-2">
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-10 w-10 rounded-full border border-gray-400">
            <AvatarImage src={logo} alt={username} />
            <AvatarFallback className="rounded-lg">
              {username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{username}</span>
            <span className="truncate text-xs">{email}</span>
          </div>
          <LogOut onClick={handleLogout} className="ml-auto size-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
