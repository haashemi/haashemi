import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { site } from "@/config/site";

export async function GET() {
  const posts = (await getCollection("blogPosts")).toSorted(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: site.title,
    description: site.description,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/post/${post.id}/`,
    })),
  });
}
