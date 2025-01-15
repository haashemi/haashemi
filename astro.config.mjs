import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  site: "https://haashemi.dev",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkAlert],
  },
});
