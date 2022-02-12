/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = withImages({
  reactStrictMode: true,
  images: { disableStaticImages: true },
  name: '[name].[hash:base64:8].[ext]',
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg'],
  handleImages: ['jpeg', 'png', 'svg'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg?$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
      issuer: {
        and: [/\.(ts|tsx|js|jsx)$/],
      },
    });

    return config;
  },
});

module.exports = nextConfig;
