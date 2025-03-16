import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js options
  reactStrictMode: true, // Ensures React runs in strict mode
  swcMinify: true, // Enables faster production builds

  // Server-side dependencies (Prisma)
  serverExternalPackages: [
    "@prisma/client",
    "prisma"
  ],

  // Other experimental features, if needed
  experimental: {
    esmExternals: false, // Example of an experimental option; optional
  },
};

export default nextConfig;
