import { NextApiRequest, NextApiResponse } from 'next';

export const withApiV3Service =
  <T>(Service: new (...args: any) => T) =>
  (
    handler: (
      req: NextApiRequest,
      res: NextApiResponse,
      serviceInstance: T
    ) => Promise<void>
  ) =>
  (req: NextApiRequest, res: NextApiResponse): void | Promise<void> => {
    const serviceInstance = new Service({
      userAgentHeader: req.headers['user-agent'],
    });

    return handler(req, res, serviceInstance);
  };

export default withApiV3Service;
