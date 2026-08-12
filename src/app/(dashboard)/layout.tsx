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
      {/* Shared Dashboard Header across all roles */}
    
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
          <Sidebar />
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}