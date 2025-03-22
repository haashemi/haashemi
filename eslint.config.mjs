import { defineConfig } from "@fullstacksjs/eslint-config";

export default defineConfig({
  tailwind: false, // Temporarily disabled until v4 support
  rules: {
    // I just don't get it...
    "@typescript-eslint/restrict-template-expressions": "off",
  },
});
