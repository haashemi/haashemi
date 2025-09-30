import type { MetadataRoute } from "next";

import { SITE } from "@/config/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.URL}/product/11`,
    },
  ];
}
