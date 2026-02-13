/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    domains: ['placehold.co'],
  },
  webpack: (config, { dev, isServer }) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    // Deshabilitar HMR en producción
    if (!dev) {
      config.optimization.minimize = true;
    }

    return config;
  },
};

module.exports = nextConfig;
