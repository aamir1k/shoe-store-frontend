/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // used to get access cloudinery images
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
