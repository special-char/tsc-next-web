/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    domains: [
      'assets.website-files.com',
      'ik.imagekit.io',
      'tse3.mm.bing.net',
      'images.unsplash.com',
      'media.istockphoto.com',
    ],
  },
};

module.exports = nextConfig;
