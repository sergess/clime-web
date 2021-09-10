import BaseApiV3Service from 'src/services/base-api-v3.service';

import { ForecastFeedArguments, ForecastFeedResponse } from './types';

export class Forecast extends BaseApiV3Service {
  public async getForecastFeed({
    forecastZoneId,
    language,
  }: ForecastFeedArguments): Promise<ForecastFeedResponse | null> {
    const forecastFeed = await this.callAsync<ForecastFeedResponse>(
      `/feed/forecast/${language}/${forecastZoneId}`
    );

    return forecastFeed;
  }
}

export * from './types';

export default Forecast;
