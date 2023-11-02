/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    nextScriptWorkers: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Set resolve fallback properties
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
  images: {
    domains: [
      'assets.website-files.com',
      'ik.imagekit.io',
      'website-files.com',
    ],
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
//   swcMinify: true,
//   experimental: {
//     // Required:
//     appDir: true,
//     nextScriptWorkers: true,
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     },
//     config.resolve.fallback = {
//       fs: false,
//       net: false,
//       dns: false,
//       child_process: false,
//       tls: false,
//     }
//     );

//     return config;
//   },
//   images: {
//     domains: [
//       'assets.website-files.com',
//       'ik.imagekit.io',
//       'website-files.com',
//     ],
//     loader: 'custom',
//     loaderFile: './lib/imageLoader.ts',
//     formats: ['image/avif', 'image/webp'],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = nextConfig;

