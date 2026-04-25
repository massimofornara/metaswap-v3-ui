/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 0,
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
