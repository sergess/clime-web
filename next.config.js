const path = require('path');

const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const THREE_DAYS = 3 * 24 * 60 * 60;
const ONE_YEAR = 365 * 24 * 60 * 60;

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
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
            value: `public, max-age=${THREE_DAYS}, must-revalidate`,
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
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/uni/:slug*',
        destination: '/getapplication',
        permanent: true,
      },
      {
        source: '/app',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://app.adjust.com/ydpm2fv_m5xq9id',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://app.adjust.com/89d3346_mpcu14f',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://app.adjust.com/ht7wyld_gy6iyj2',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://app.adjust.com/bfnn1sb_wj034q2',
        permanent: true,
      },
    ];
  },
});
