import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
    },
  },
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
