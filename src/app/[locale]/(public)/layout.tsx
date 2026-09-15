import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-800 font-sans selection:bg-pink-100 selection:text-[#C01C5C]">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1">{children}</main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}