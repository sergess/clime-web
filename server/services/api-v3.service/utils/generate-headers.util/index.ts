import type { Headers } from './types';

import { generateSignature } from '../generate-signature.util';
import { generateTimestamp } from '../generete-timestamp.util';
import { generateUserAgent } from '../generete-user-agent.util';

/**
 * Each API call should include the following HTTP headers: 'X-Timestamp', 'User-Agent', 'X-Signature'
 * More info could be found below:
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Timestamp+HTTP+Header
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=User-Agent+HTTP+Header
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?spaceKey=AWS&title=X-Signature+HTTP+Header
 */
export const generateHeaders = (
  uri: string,
  userAgentHeader: string | undefined
): Headers => {
  const userAgent = generateUserAgent(userAgentHeader);
  const timestamp = generateTimestamp();

  return {
    'X-Timestamp': timestamp,
    'X-Signature': generateSignature(uri, userAgent, timestamp),
    'User-Agent': userAgent,
  };
};

export default generateHeaders;
