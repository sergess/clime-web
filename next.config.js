const path = require('path');

const { i18n } = require('./next-i18next.config');

module.exports = {
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
};
