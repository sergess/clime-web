import { NextApiRequest, NextApiResponse } from 'next';

import { isString } from 'common/utils';

import { Forecast } from 'server/services';
import { isNumeric } from 'server/utils';
import {
  withApiV3Service,
  withRequestMethod,
} from 'server/middlewares/api-handler';

export const forecastHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  service: Forecast
): Promise<void> => {
  const { forecastZoneId, language } = req.query;

  if (!isNumeric(forecastZoneId) || !isString(language) || !language) {
    return res.status(400).end('Bad request');
  }

  const forecastFeed = await service.getForecastFeed({
    forecastZoneId: forecastZoneId as string,
    language: language as string,
  });

  return res.status(200).json(forecastFeed);
};

export default withRequestMethod('GET')(
  withApiV3Service<Forecast>(Forecast)(forecastHandler)
);
