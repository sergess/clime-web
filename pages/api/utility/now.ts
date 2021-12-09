import { NextApiRequest, NextApiResponse } from 'next';

import { Utility } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';

export const nowHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const utilityService = new Utility();
  const now = await utilityService.getNow();

  if (!now) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(now);
};

export default withRequestMethod('GET')(nowHandler);
