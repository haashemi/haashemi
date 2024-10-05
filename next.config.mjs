import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

export default withContentCollections(nextConfig);
