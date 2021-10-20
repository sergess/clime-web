import { GetServerSidePropsContext } from 'next';
import parser from 'ua-parser-js';
import toLower from 'ramda/src/toLower';
import when from 'ramda/src/when';

import { BrowserInfo } from 'common/types';
import { isString } from 'common/utils';

const toLowerSafely = when<string | undefined, string | undefined>(
  isString,
  toLower
);

export const withBrowserInfo = (
  context: GetServerSidePropsContext
): BrowserInfo => {
  const userAgentHeader = context.req.headers['user-agent'];
  const userAgent = parser(userAgentHeader);

  return {
    deviceType: toLowerSafely(userAgent.device.type) || null,
    osName: toLowerSafely(userAgent.os.name) || null,
  };
};

export default withBrowserInfo;
