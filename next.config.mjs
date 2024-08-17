/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "out", // Where to export all pages
  assetPrefix: "/spedit",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
