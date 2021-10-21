import { GetServerSidePropsContext } from 'next';

import { ForecastFeed } from 'server/types';
import { Forecast } from 'server/services';

import { withApiV3Service } from '../with-api-v3-service.middleware';

export const withForecastFeed = async (
  context: GetServerSidePropsContext
): Promise<ForecastFeed | null> => {
  const forecastService = withApiV3Service<Forecast>(context, Forecast);

  const { query, locale, defaultLocale } = context;

  const forecastFeed = await forecastService.getForecastFeed({
    forecastZoneId: query.forecastZoneId as string,
    language: locale || (defaultLocale as string),
  });

  return forecastFeed;
};

export default withForecastFeed;
