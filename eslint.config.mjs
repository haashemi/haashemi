import { init } from "@fullstacksjs/eslint-config";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs["flat/recommended"],
  ...init(),
  {
    ignores: [".astro/*", "dist/*"],
  },
  {
    files: ["**/*.astro"],
    rules: {
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "error",
      "import/no-unresolved": ["error", { ignore: ["astro:content"] }],
    },
  },
];
