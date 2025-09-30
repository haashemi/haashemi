import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { allBlogs, allCvs } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: `${site.url}/blog/${post._meta.path}`,
    priority: 0.8,
  }));

  const cvs: MetadataRoute.Sitemap = allCvs.map((post) => ({
    url: `${site.url}/cv/${post._meta.path}`,
    priority: 0.5,
  }));

  return [...blogs, ...cvs];
}
