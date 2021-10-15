import { NextApiRequest, NextApiResponse } from 'next';

import { Location } from 'common/types';
import { isString, isLocationValid } from 'common/utils';

import { Geocode } from 'server/services';
import {
  withApiV3Service,
  withRequestMethod,
} from 'server/middlewares/api-handler';

export const reverseHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  service: Geocode
): Promise<void> => {
  const { latitude, longitude, language } = req.query;
  const location: Location = { latitude: +latitude, longitude: +longitude };

  if (!language || !isLocationValid(location) || !isString(language)) {
    return res.status(400).end('Bad request');
  }

  const locationData = await service.getLocationDataByCoordinates({
    ...location,
    language: language as string,
  });

  return res.status(200).json(locationData);
};

export default withRequestMethod('GET')(
  withApiV3Service<Geocode>(Geocode)(reverseHandler)
);
