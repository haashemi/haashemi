/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 3600, // an hour
    }
};

export default nextConfig;
