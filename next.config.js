/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["admin.babue.me"],
  },
};

module.exports = nextConfig;
