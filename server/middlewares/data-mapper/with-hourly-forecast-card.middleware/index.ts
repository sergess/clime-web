import take from 'ramda/src/take';

import { LocationData, HourlyForecastCardData } from 'common/types';
import { WEATHER_STATE } from 'common/constants';

import { formatUtcString } from 'server/utils';
import { ForecastFeed } from 'server/types';

export const withHourlyForecastCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): HourlyForecastCardData =>
  take(5, forecastFeed.hourConditions).map(
    ({ variant, night, temperature, stateId, dateTime }) => ({
      dateTime,
      variant,
      night,
      stateId,
      temperature,
      time: formatUtcString(
        dateTime,
        variant === WEATHER_STATE ? 'haaa' : 'h:mmaaa',
        locationData?.timeZone
      ),
    })
  );

export default withHourlyForecastCard;
