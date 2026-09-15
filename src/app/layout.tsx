import type { Metadata } from "next";
import "./globals.css";

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
    <html>
      <body>{children}</body>
    </html>
  );
}