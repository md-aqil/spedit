const isDev = process.env.NODE_ENV === "development";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: isDev ? undefined : "out",
  basePath: isDev ? undefined : "/spedit",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
