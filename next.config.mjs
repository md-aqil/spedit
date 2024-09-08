// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "out",
  assetPrefix: "/spedit",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    transpilePackages: ["@sjmc11/tourguidejs"], // Ensure the package is transpiled
  },
};

export default nextConfig;
