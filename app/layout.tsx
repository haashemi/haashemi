import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { Header } from "./_components/header";
import { cn } from "./_lib/cn";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "Ali Hashemi's personal website",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("antialiased bg-black font-sans", poppins.variable)}>
        <div className="min-h-screen w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
