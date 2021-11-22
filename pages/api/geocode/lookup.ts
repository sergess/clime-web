import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';
import { getExactLocationFromCookies } from 'server/utils';

export const lookupHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { slug, language } = req.query;

  if (!language || !slug) {
    return res.status(400).end('Bad request');
  }

  const geocodeService = new Geocode({
    userAgentHeader: req.headers['user-agent'],
    locationFromCookies: getExactLocationFromCookies(req.cookies),
  });
  const locationData = await geocodeService.getLocationDataBySlug({
    slug: slug as string,
    language: language as string,
  });

  return res.status(200).json(locationData);
};

export default withRequestMethod('GET')(lookupHandler);
