import { defineConfig } from "@fullstacksjs/eslint-config";

export default defineConfig({ esm: true, strict: true, tailwind: { entryPoint: "./styles/globals.css" } });
