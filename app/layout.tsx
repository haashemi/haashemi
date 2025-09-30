import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { SITE } from "@/config/constants";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    url: SITE.URL,
    title: "Ali Hashemi",
    images: { url: `${SITE.URL as string}/images/haashemi.png` },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hashemi",
    images: { url: `${SITE.URL as string}/images/haashemi.png` },
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`mx-auto my-16 flex w-full max-w-prose flex-col gap-8 px-3 font-sans antialiased dark:bg-zinc-950 ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
