import { GetServerSidePropsContext } from 'next';
import applySpec from 'ramda/src/applySpec';

import { ForecastCards, LocationData } from 'common/types';

import { Forecast } from 'server/services';

import { ForecastCardsSpec } from './types';

export const withForecastCards =
  (spec: ForecastCardsSpec, locationData: LocationData) =>
  async (context: GetServerSidePropsContext): Promise<ForecastCards | null> => {
    if (!spec) {
      return null;
    }

    const { locale, defaultLocale } = context;

    const userAgentHeader = context?.req?.headers?.['user-agent'];
    const language = locale || (defaultLocale as string);

    const forecastService = new Forecast({ userAgentHeader });
    const forecastFeed = await forecastService.getForecastFeed({
      forecastZoneId: locationData.forecastZoneId,
      language,
    });

    if (!forecastFeed) {
      return null;
    }

    return applySpec(spec)(forecastFeed, locationData);
  };

export * from './utils';

export default withForecastCards;
