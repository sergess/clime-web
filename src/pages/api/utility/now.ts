import { NextApiRequest, NextApiResponse } from 'next';

import { Utility } from 'src/services';
import { withRequestMethod } from 'src/middlewares/api-handler';

export const nowHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const utilityService = new Utility();
  const now = await utilityService.getNow();

  return res.status(200).json(now);
};

export default withRequestMethod('GET')(nowHandler);
