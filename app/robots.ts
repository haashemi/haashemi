import type { MetadataRoute } from "next";

import { config } from "./_lib/config.server";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${config.get("appHost")}/sitemap.xml`,
  };
}
