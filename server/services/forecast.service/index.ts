import ApiV3Service from 'server/services/api-v3.service';
import { ForecastFeed } from 'server/types';

import { ForecastFeedFromApi, GetForecastFeedArguments } from './types';
import {
  mapConditionFromApiToHourCondition,
  mapDayConditionFromApiToDayCondition,
  getUpToDateHourConditions,
  getUpToDateDayConditionsFromApi,
  buildHourConditionsFeed,
  buildDaySummaryConditionsFeed,
} from './utils';

/**
 * Forecast service.
 * @see https://confluence.jabodo.com:8443/display/AWS/Forecast+Feed
 */
export class Forecast extends ApiV3Service {
  public async getForecastFeed({
    forecastZoneId,
    language,
  }: GetForecastFeedArguments): Promise<ForecastFeed | null> {
    const { ok, data: forecastFeedFromApi } =
      await this.callAsync<ForecastFeedFromApi>(
        `/feed/forecast/${language}/${forecastZoneId}`
      );

    if (!ok || !forecastFeedFromApi) return null;

    const upToDateDayConditionsFromApi = getUpToDateDayConditionsFromApi(
      forecastFeedFromApi.frst
    );

    const dayConditions = upToDateDayConditionsFromApi.map(
      mapDayConditionFromApiToDayCondition
    );
    const currentDayCondition = dayConditions[0];

    const currentHourCondition = mapConditionFromApiToHourCondition(
      forecastFeedFromApi.cur,
      currentDayCondition.sunrise,
      currentDayCondition.sunset,
      0
    );

    const hourConditionsFeed = buildHourConditionsFeed(dayConditions);

    return {
      dayConditions,
      hourConditions: getUpToDateHourConditions(
        currentHourCondition,
        hourConditionsFeed
      ),
      daySummaryConditions: buildDaySummaryConditionsFeed(dayConditions),
    };
  }
}

export default Forecast;
