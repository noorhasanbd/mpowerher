// app/(dashboard)/layout.tsx
// Or your shared dashboard header

import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
    
      

      
      <div className="flex-1 flex">
        {/* Shared Dashboard Header across all roles */}
        <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
