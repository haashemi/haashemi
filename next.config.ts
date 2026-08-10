import type { NextConfig } from "next";

import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  cacheComponents: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withContentCollections(nextConfig);
