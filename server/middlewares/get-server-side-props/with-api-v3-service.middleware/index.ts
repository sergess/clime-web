import { GetServerSidePropsContext } from 'next';

export const withApiV3Service = <T>(
  context: GetServerSidePropsContext,
  Service: new (...args: any) => T
): T => {
  const serviceInstance = new Service({
    userAgentHeader: context.req.headers['user-agent'],
  });

  return serviceInstance;
};

export default withApiV3Service;
