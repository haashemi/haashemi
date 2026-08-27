import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { site } from "@/config/site";

export default defineConfig({
  site: site.url,

  session: false,

  redirects: Object.fromEntries(Object.entries(site.urls).map(([key, destination]) => [`/urls/${key}`, destination])),

  integrations: [sitemap()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--font-space-mono",
      weights: [400, 700],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],

  markdown: {
    processor: satteri(),
    shikiConfig: { theme: "github-dark" },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
