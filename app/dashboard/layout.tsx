import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen bg-black">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Separator
            orientation={"horizontal"}
            className="h-[2px] bg-[#33383F] mt-1"
          />
          <Navbar />
          <Separator
            orientation={"horizontal"}
            className="h-[2px] bg-[#33383F]"
          />
          <main className="h-full">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
