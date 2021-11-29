import take from 'ramda/src/take';

import { LocationData, DailyForecastCardData } from 'common/types';

import { formatUtcString, isUtcStringNight } from 'server/utils';
import { ForecastFeed } from 'server/types';

export const withDailyForecastCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): DailyForecastCardData => {
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
        date: formatUtcString(dateTime, 'MMM d', locationData?.timeZone),
      };
    }
  );
};

export default withDailyForecastCard;
