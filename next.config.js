const path = require('path');

const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ONE_YEAR = 365 * 24 * 60 * 60;

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  i18n,
  webpack(config) {
    const { alias } = config.resolve;
    alias.public = path.join(__dirname, 'public/');

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*(svg|jpg|png|ico|txt|mp4)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, must-revalidate`,
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: `max-age=${ONE_YEAR}; includeSubDomains; preload`,
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
});
