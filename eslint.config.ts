import { defineConfig } from "@fullstacksjs/eslint-config";
import astro from "eslint-plugin-astro";

export default defineConfig(
  { esm: true, strict: true, tailwind: { entryPoint: "./src/styles/globals.css" } },
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "astro/no-set-html-directive": "off",
      "@stylistic/jsx-self-closing-comp": "off",
    },
  },
);
