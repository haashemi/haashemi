import type { MetadataRoute } from "next";

import { APP_HOST } from "./_lib/config.server";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${APP_HOST}/sitemap.xml`,
  };
}
