import { NextApiRequest, NextApiResponse } from 'next';

import { Location } from 'common/types';

import { Geocode } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';

export const reverseHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { latitude, longitude, language } = req.query;
  const location: Location = { latitude: +latitude, longitude: +longitude };

  const geocodeService = new Geocode({
    userAgentHeader: req.headers['user-agent'],
  });
  const locationData = await geocodeService.getLocationDataByCoordinates({
    location,
    language: language as string,
  });

  if (!locationData) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(locationData);
};

export default withRequestMethod('GET')(reverseHandler);
