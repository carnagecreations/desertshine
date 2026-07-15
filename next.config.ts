import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export has no image optimization server, so next/image must be
  // unoptimized — otherwise /_next/image requests 404 (e.g. the header logo).
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
