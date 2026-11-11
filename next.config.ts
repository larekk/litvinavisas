import type { NextConfig } from "next";

// Project Pages: https://user.github.io/repository/
// User/organization Pages: https://user.github.io/
// GitHub Actions determines this value from the repository name.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
