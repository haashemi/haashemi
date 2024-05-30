import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "Ali Hashemi's personal website. There's nothing special about it.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-slate-950 font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  );
}
