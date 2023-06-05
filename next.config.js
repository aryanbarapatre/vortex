/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withVideos = require('next-videos');

module.exports = withVideos({
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
          esModule: false,
        },
      },
    });

    return config;
  },
});

