import { Roboto, Roboto_Mono } from "next/font/google";

export const fontSans = Roboto({
  variable: "--next-font-sans",
  subsets: ["latin"],
});

export const fontMono = Roboto_Mono({
  variable: "--next-font-mono",
  subsets: ["latin"],
});
