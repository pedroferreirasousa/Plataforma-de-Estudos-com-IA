import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    silenceDeprecations: ['legacy-js-api'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
  assetPrefix: '/videos', 
};

export default nextConfig;