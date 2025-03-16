import { init } from "@fullstacksjs/eslint-config";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...eslintPluginAstro.configs.base,
  ...init({
    react: false, // It thinks that .astro files are react files. so let's just disable it.
    tailwind: false, // At the moment it doesn't support tailwind v4.
  }),
  globalIgnores([".astro"]),
  {
    rules: {
      // We'll wait for @fullstacksjs' astro support
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^astro:.*"],
        },
      ],
    },
  },
]);
