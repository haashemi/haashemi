import { init } from "@fullstacksjs/eslint-config";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...init(),
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro", "**/*.ts"],
    rules: {
      "import/no-unresolved": ["error", { ignore: ["astro:content", "astro:transitions"] }],
    },
  },
];
