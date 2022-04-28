import take from 'ramda/src/take';

import { Daily } from 'common/types';

import { isUtcStringNight } from 'server/utils';
import { ForecastFeed } from 'server/types';

export const mapDailyCard = (forecastFeed: ForecastFeed): Daily => {
  const now = new Date().toISOString();
  return take(5, forecastFeed.dayConditions).map(
    (
      { minTemperature, maxTemperature, stateId, dateTime, sunrise, sunset },
      index
    ) => {
      const night =
        index === 0 ? isUtcStringNight(now, sunrise, sunset) : false;

      return {
        night,
        dateTime,
        minTemperature,
        maxTemperature,
        stateId,
      };
    }
  );
};

export default mapDailyCard;
