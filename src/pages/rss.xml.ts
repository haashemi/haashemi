import type { APIRoute } from "astro";

import { SITE } from "@/app/consts";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const items = await getCollection("blog");

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site ?? SITE.URL,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.pubDate,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
};
