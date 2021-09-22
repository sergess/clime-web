import { GetServerSidePropsContext } from 'next';

import { parseJsonSafely } from 'server/utils';

import { withCookie } from '../with-cookie.middleware';

export const withParsedCookie = <T>(
  context: GetServerSidePropsContext,
  cookieName: string
): T | null => {
  const cookie = withCookie(context, cookieName);

  return cookie ? parseJsonSafely<T>(cookie) : null;
};

export default withParsedCookie;
