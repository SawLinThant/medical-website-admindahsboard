import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/modules/common/components/shadcn-sidebar/app-sidebar";
import SideBar from "@/modules/common/components/sidebar";
import { LayoutWithChildren } from "@/types/utils";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <SidebarProvider>
    <div className="w-screen flex flex-row">
      <AppSidebar/>
      {/* <SideBar /> */}
      <main className="w-full flex items-start justify-center p-4">
        <div className="w-full flex flex-col items-center min-h-32">
          {children}
        </div>
      </main>
    </div>
    </SidebarProvider>
  );
};
export default Layout;
