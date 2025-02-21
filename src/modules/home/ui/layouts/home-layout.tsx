import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../components/home-navbar/home-navbar";

interface homeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: homeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        {children}
      </div>
    </SidebarProvider>
  );
};
