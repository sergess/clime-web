import take from 'ramda/src/take';

import { LocationData, DailyForecastCardData } from 'common/types';

import { formatUtcString } from 'server/utils';
import { ForecastFeed } from 'server/types';

export const withDailyForecastCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): DailyForecastCardData =>
  take(5, forecastFeed.dayConditions).map(
    ({ minTemperature, maxTemperature, stateId, dateTime }) => ({
      dateTime,
      minTemperature,
      maxTemperature,
      stateId,
      time: formatUtcString(dateTime, 'eee d', locationData?.timeZone),
    })
  );

export default withDailyForecastCard;
