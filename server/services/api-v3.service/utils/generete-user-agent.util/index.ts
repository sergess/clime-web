import parser from 'ua-parser-js';

/**
 * 'User-Agent' API v3.0 HTTP header.
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=User-Agent+HTTP+Header
 */
export const generateUserAgent = (userAgent: string | undefined): string => {
  const parsedUserAgent = parser(userAgent);
  const version = process.env.npm_package_version;

  return `web//com.clime.web//${version}////${
    parsedUserAgent?.os?.version ?? ''
  }//${parsedUserAgent?.browser?.name ?? ''}//${process.env.API_KEY}////`;
};

export default generateUserAgent;
