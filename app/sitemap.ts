import type { MetadataRoute } from "next";

import { allBlogs, allExperiences } from "@/.content-collections/generated";

import { config } from "./_lib/config.server";

export default function sitemap(): MetadataRoute.Sitemap {
  const appHost = config.get("appHost");

  return [
    { url: appHost, priority: 1 },

    ...(allBlogs
      .filter((v) => v.publishedAt)
      .map((v) => ({
        url: `${appHost}/blog/${v._meta.path}`,
        priority: 0.8,
      })) satisfies MetadataRoute.Sitemap),

    ...(allExperiences.map((v) => ({
      url: `${appHost}/exp/${v._meta.path}`,
      priority: 0.6,
    })) satisfies MetadataRoute.Sitemap),
  ];
}
