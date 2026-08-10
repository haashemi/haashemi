import type { Metadata, Viewport } from "next";

import { Space_Mono } from "next/font/google";

import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ali Hashemi",
  openGraph: {
    type: "website",
    url: site.url,
    title: "Ali Hashemi",
    images: { url: `${site.url}/open-graph.jpg` },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hashemi",
    images: { url: `${site.url}/open-graph.jpg` },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", spaceMono.variable)} suppressHydrationWarning>
      <body>
        <div className="mx-auto flex min-h-svh w-full max-w-prose flex-col sm:sm:border-x">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
