import take from 'ramda/src/take';

import { Daily, LocationData } from 'common/types';

import { formatUtcString, isUtcStringNight } from 'server/utils';
import { ForecastFeed } from 'server/types';

export const mapDailyCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): Daily => {
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
        time: formatUtcString(dateTime, 'eee d', locationData?.timeZone),
      };
    }
  );
};

export default mapDailyCard;
