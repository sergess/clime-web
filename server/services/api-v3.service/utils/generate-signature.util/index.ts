import md5 from 'md5';

/**
 * 'X-Signature' API v3.0 HTTP header.
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Signature+HTTP+Header
 */
export const generateSignature = (
  uri: string,
  userAgent: string,
  timestamp: string
): string => md5(`${uri}${userAgent}${timestamp}${process.env.API_SECRET_KEY}`);

export default generateSignature;
