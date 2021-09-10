import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import { isString, isValidLatitude, isValidLongitude } from 'server/utils';
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

  if (
    !latitude ||
    !longitude ||
    !language ||
    !isValidLatitude(+latitude) ||
    !isValidLongitude(+longitude) ||
    !isString(language)
  ) {
    return res.status(400).end('Bad request');
  }

  const locationData = await service.getLocationDataByCoordinates({
    latitude: +latitude,
    longitude: +longitude,
    language: language as string,
  });

  return res.status(200).json(locationData);
};

export default withRequestMethod('GET')(
  withApiV3Service<Geocode>(Geocode)(reverseHandler)
);
