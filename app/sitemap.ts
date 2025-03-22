import type { MetadataRoute } from "next";

import { SITE } from "@hx/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.URL}/product/11`,
    },
  ];
}
