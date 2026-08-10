import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { allBlogPosts } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${site.url}/blog/${post._meta.path}`,
    priority: 0.8,
  }));

  return [
    //
    { url: `${site.url}/`, priority: 1 },
    ...posts,
  ];
}
