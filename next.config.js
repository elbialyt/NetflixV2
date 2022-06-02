/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["imgix.bustle.com", "image.tmdb.org"],
  },
};
