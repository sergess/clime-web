import { NextApiRequest, NextApiResponse } from 'next';

import { ForecaMap } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';

export const configHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const forecaMapService = new ForecaMap({
    userAgentHeader: req.headers['user-agent'],
  });
  const config = await forecaMapService.getConfig();

  if (!config) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(config);
};

export default withRequestMethod('GET')(configHandler);
