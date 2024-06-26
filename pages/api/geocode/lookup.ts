import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';

export const lookupHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { slug, language } = req.query;

  const geocodeService = new Geocode({
    userAgentHeader: req.headers['user-agent'],
  });
  const locationData = await geocodeService.getLocationDataBySlug({
    slug: slug as string,
    language: language as string,
  });

  if (!locationData) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(locationData);
};

export default withRequestMethod('GET')(lookupHandler);
