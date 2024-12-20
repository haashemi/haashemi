import "./globals.css";

import "remark-github-alerts/styles/github-colors-dark-class.css";
import "remark-github-alerts/styles/github-base.css";

import type { Metadata, Viewport } from "next";

import { Space_Grotesk } from "next/font/google";

import { Header } from "./_components/header";
import { cn } from "./_lib/cn";

const font = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "Ali Hashemi's personal website",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#09090b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("antialiased dark:bg-zinc-950", font.className)}>
        <div className="relative mx-auto w-full max-w-prose">
          <Header />
          {children}
          <div className="h-20" />

          <div className="fixed left-0 top-0 h-10 w-full bg-gradient-to-b from-zinc-950 to-transparent" />
          <div className="fixed bottom-0 left-0 h-10 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>
      </body>
    </html>
  );
}
