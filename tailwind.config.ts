import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [typography],
  future: {
    hoverOnlyWhenSupported: true,
  },
} as Config;
