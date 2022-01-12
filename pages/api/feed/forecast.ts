import { NextApiRequest, NextApiResponse } from 'next';
import isNil from 'ramda/src/isNil';

import { isString } from 'common/utils';

import { Forecast } from 'server/services';
import { isNumeric } from 'server/utils';
import { withRequestMethod } from 'server/middlewares/api-handler';

export const forecastHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { forecastZoneId, language } = req.query;

  if (!isNumeric(forecastZoneId) || !isString(language) || !language) {
    return res.status(400).end('Bad request');
  }

  const forecastService = new Forecast({
    userAgentHeader: req.headers['user-agent'],
  });
  const forecastFeed = await forecastService.getForecastFeed({
    forecastZoneId: Number(forecastZoneId),
    language: language as string,
  });

  if (isNil(forecastFeed)) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(forecastFeed);
};

export default withRequestMethod('GET')(forecastHandler);
