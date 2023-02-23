import { createProxyMiddleware } from 'http-proxy-middleware';

import {
  generateTimestamp,
  generateUserAgent,
  generateSignature,
} from 'server/services/api-v3.service/utils';

const TWO_HOURS = process.env.NODE_ENV === 'production' ? 2 * 60 * 60 : 0;

export const tileHandler = createProxyMiddleware({
  logLevel: process.env.NODE_ENV === 'production' ? 'silent' : 'warn',
  target: `${
    process.env.NODE_ENV === 'production'
      ? 'https://api.weatherlive.info'
      : 'https://api-new.weatherlive.info'
  }`,
  headers: {
    Connection: 'keep-alive',
  },
  pathRewrite: (_, req) => {
    const { c, frame, updated, layer, x, y, z } = req.query;
    return `/${
      process.env.NODE_ENV === 'production' ? 'meteoradar' : 'meteoradartest'
    }/map/frc/tile/${layer}/${z}/${x}/${y}/${frame}/${updated}/${c}`;
  },
  changeOrigin: true,
  onError(err, _, res) {
    console.error('[tileHandler]: ', err);

    return res.end();
  },
  onProxyReq(proxyReq, req, res) {
    if (req.method !== 'GET') {
      res.end('Bad request');
    }

    const userAgentHeader = req.headers['user-agent'];
    const userAgent = generateUserAgent(userAgentHeader);
    const timestamp = generateTimestamp();

    proxyReq.setHeader('X-Timestamp', timestamp);
    proxyReq.setHeader('User-Agent', userAgent);
    proxyReq.setHeader(
      'X-Signature',
      generateSignature(proxyReq.path, userAgent, timestamp)
    );
  },
  onProxyRes(proxyRes) {
    // eslint-disable-next-line no-param-reassign
    proxyRes.headers[
      'Cache-Control'
    ] = `max-age=${TWO_HOURS}, s-maxage=${TWO_HOURS}`;
  },
});

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default tileHandler;
