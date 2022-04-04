/**
 * 'X-Timestamp' API v3.0 HTTP header.
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Timestamp+HTTP+Header
 */
export const generateTimestamp = (): string =>
  `${Math.floor(new Date().getTime() / 1000)}`;

export default generateTimestamp;
