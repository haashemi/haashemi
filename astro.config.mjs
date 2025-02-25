// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  site: "https://www.haashemi.dev",

  devToolbar: { enabled: false },

  experimental: {
    contentIntellisense: true,
  },

  markdown: {
    remarkPlugins: [remarkAlert],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), robotsTxt(), sitemap()],
});
