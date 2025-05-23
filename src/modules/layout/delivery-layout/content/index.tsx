"use client";

import { cn } from "@/lib/utils";

interface ContentProps {
  isSidebarOpen: boolean;
  children: React.ReactNode;
}

export default function Content({ isSidebarOpen, children }: ContentProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-auto p-4 sm:p-6 transition-all duration-300",
        isSidebarOpen ? "sm:ml-64" : "ml-0"
      )}
    >
      {children}
    </main>
  );
}