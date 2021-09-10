import { NextApiRequest, NextApiResponse } from 'next';

import { Utility } from 'src/services';
import { withRequestMethod } from 'src/middlewares/api-handler';

export const locationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const utilityService = new Utility();
  const location = await utilityService.getLocation();

  return res.status(200).json(location);
};

export default withRequestMethod('GET')(locationHandler);
