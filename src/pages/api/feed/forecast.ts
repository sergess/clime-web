import { NextApiRequest, NextApiResponse } from 'next';

import { Forecast } from 'src/services';
import { isString, isNumeric } from 'src/utils';
import {
  withApiV3Service,
  withRequestMethod,
} from 'src/middlewares/api-handler';

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
