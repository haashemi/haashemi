import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";

import { SITE } from "./src/consts";

export default defineConfig({
  site: SITE.URL,
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkAlert],
    shikiConfig: { theme: "github-dark-default" },
  },
});
