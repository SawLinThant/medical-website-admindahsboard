"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface NavbarProps {
  username: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function Navbar({ username, isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.removeItem("userUid");
        router.push("/delivery/login");
    }
  return (
    <>
      <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            className="h-10 w-10"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <span className="text-base sm:text-lg font-semibold">{username}</span>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleLogout} variant="outline" asChild className="h-10 text-base">
            <span>Logout</span>
          </Button>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 sm:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-full sm:w-64 transform border-r bg-background transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4 sm:px-6">
          <span className="text-base sm:text-lg font-semibold">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
            className="h-10 w-10"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <Button variant="ghost" asChild className="h-12 text-base justify-start">
            <Link href="/delivery/home">Current Orders</Link>
          </Button>
          <Button variant="ghost" asChild className="h-12 text-base justify-start">
            <Link href="/delivery/history">
              History
            </Link>
          </Button>
        </nav>
      </aside>
    </>
  );
}