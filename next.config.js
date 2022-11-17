/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'assets.website-files.com',
      'ik.imagekit.io',
      'placeimg.com',
      'website-files.com',
      'tse3.mm.bing.net',
      'images.unsplash.com',
      'media.istockphoto.com',
      'images.pexels.com',
    ],
  },
};

module.exports = nextConfig;
