import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// 1. Heading Font
const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// 2. Body / Interface Font (Variable Font)
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "MPOWERHER | Empowering Girls Through Education",
  description: "Digital learning platform for menstrual health and hygiene education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="mpowerher"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      {/* Set default body font to Manrope */}
      <body className="font-sans min-h-full flex flex-col bg-base-100 text-base-content">
        
        {children}
        
      </body>
    </html>
  );
}