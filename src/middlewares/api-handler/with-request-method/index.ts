import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const withRequestMethod =
  (method: string) =>
  (handler: NextApiHandler) =>
  (req: NextApiRequest, res: NextApiResponse): void | Promise<void> => {
    if (req.method !== method) {
      return res.status(400).end('Bad request');
    }

    return handler(req, res);
  };

export default withRequestMethod;
