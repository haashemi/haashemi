import "./globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import Header from "./_components/Header";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "Ali Hashemi's personal website. There's nothing special about it.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`min-h-screen bg-black font-sans ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
