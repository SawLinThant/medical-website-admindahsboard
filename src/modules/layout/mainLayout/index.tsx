import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/modules/common/components/shadcn-sidebar/app-sidebar";
import { LayoutWithChildren } from "@/types/utils";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <SidebarProvider className="">
      <div className="w-screen md:flex lg:flex flex-row sm:hidden">
        <AppSidebar />
        <div className="w-full h-screen lg:hidden md:hidden flex items-center justify-center">
          <h2>Sorry! this feature is not avaiable for mobile devices</h2>
        </div>
        <main className="w-full lg:flex md:flex hidden items-start justify-center p-4">
          <div className="w-full flex flex-col items-center min-h-32">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
export default Layout;
