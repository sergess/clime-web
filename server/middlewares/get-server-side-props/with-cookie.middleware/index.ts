import { GetServerSidePropsContext } from 'next';

export const withCookie = (
  context: GetServerSidePropsContext,
  cookieName: string
): string | null => context.req.cookies?.[cookieName] ?? null;

export default withCookie;
