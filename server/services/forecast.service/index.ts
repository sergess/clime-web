import BaseApiV3Service from 'server/services/base-api-v3.service';

import { ForecastFeed } from 'common/types';

import { ForecastFeedArguments } from './types';

export class Forecast extends BaseApiV3Service {
  public async getForecastFeed({
    forecastZoneId,
    language,
  }: ForecastFeedArguments): Promise<ForecastFeed | null> {
    if (!forecastZoneId) return null;

    const forecastFeed = await this.callAsync<ForecastFeed>(
      `/feed/forecast/${language}/${forecastZoneId}`
    );

    return forecastFeed;
  }
}

export * from './types';

export default Forecast;
