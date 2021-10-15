import { GetServerSidePropsContext } from 'next';

export const withCookie = (
  context: GetServerSidePropsContext,
  cookieName: string
): string | undefined => context.req.cookies?.[cookieName];

export default withCookie;
