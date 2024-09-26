import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

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
  themeColor: "#09090b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("antialiased dark:bg-zinc-950 font-sans", poppins.variable)}>
        <div className="mx-auto w-full max-w-prose">{children}</div>
      </body>
    </html>
  );
}
