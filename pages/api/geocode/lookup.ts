import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import {
  withApiV3Service,
  withRequestMethod,
} from 'server/middlewares/api-handler';

export const lookupHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  service: Geocode
): Promise<void> => {
  const { countryCode, city, language } = req.query;

  if (!language || !countryCode || !city) {
    return res.status(400).end('Bad request');
  }

  const locationData = await service.getLocationDataByLocation({
    countryCode: countryCode as string,
    city: city as string,
    language: language as string,
  });

  return res.status(200).json(locationData);
};

export default withRequestMethod('GET')(
  withApiV3Service<Geocode>(Geocode)(lookupHandler)
);
