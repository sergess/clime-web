import requestIp from 'request-ip';

import type { IncomingMessage } from 'http';

const MOCKED_IP_FOR_DEV_ENV = '3.24.68.1';

export const getClientIp = (
  req: IncomingMessage,
  autolocation: boolean
): string | null => {
  if (process.env.NODE_ENV === 'production') {
    return autolocation ? requestIp.getClientIp(req) : null;
  }

  return MOCKED_IP_FOR_DEV_ENV;
};

export default getClientIp;
