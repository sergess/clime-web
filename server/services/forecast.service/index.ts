import isNil from 'ramda/src/isNil';

import BaseApiV3Service from 'server/services/base-api-v3.service';
import { ForecastFeed } from 'server/types';

import { ForecastFeedFromApi, GetForecastFeedArguments } from './types';
import {
  convertConditionFromApiToHourCondition,
  convertDayConditionFromApiToDayCondition,
  getUpToDateHourConditions,
  getUpToDateDayConditionsFromApi,
  buildHourConditionsFeed,
  buildDaySummaryConditionsFeed,
} from './utils';

export class Forecast extends BaseApiV3Service {
  public async getForecastFeed({
    forecastZoneId,
    language,
  }: GetForecastFeedArguments): Promise<ForecastFeed | null> {
    if (!forecastZoneId) return null;

    const forecastFeedFromApi = await this.callAsync<ForecastFeedFromApi>(
      `/feed/forecast/${language}/${forecastZoneId}`
    );

    if (isNil(forecastFeedFromApi)) {
      return null;
    }

    const upToDateDayConditionsFromApi = getUpToDateDayConditionsFromApi(
      forecastFeedFromApi.frst
    );

    const dayConditions = upToDateDayConditionsFromApi.map(
      convertDayConditionFromApiToDayCondition
    );
    const currentDayCondition = dayConditions[0];

    const currentHourCondition = convertConditionFromApiToHourCondition(
      forecastFeedFromApi.cur,
      currentDayCondition.sunrise,
      currentDayCondition.sunset
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
