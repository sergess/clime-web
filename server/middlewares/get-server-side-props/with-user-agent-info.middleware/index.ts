import { GetServerSidePropsContext } from 'next';
import parser from 'ua-parser-js';
import toLower from 'ramda/src/toLower';
import when from 'ramda/src/when';

import { UserAgentInfo } from 'common/types';
import { isString } from 'common/utils';

import { DEVICE_TYPE, OS_NAME } from './constants';

const toLowerSafely = when<string | undefined, string | undefined>(
  isString,
  toLower
);

export const withUserAgentInfo = (
  context: GetServerSidePropsContext
): UserAgentInfo => {
  const userAgentHeader = context.req.headers['user-agent'];
  const userAgent = parser(userAgentHeader);
  const osName = toLowerSafely(userAgent.os.name);

  return {
    mobile: toLowerSafely(userAgent.device.type) === DEVICE_TYPE.MOBILE,
    iOS: osName === OS_NAME.iOS,
    android: osName === OS_NAME.ANDROID,
  };
};

export default withUserAgentInfo;
