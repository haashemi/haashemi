import type { NextConfig } from "next";

import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600, // an hour
  },
};

export default withContentCollections(nextConfig);
