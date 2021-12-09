import take from 'ramda/src/take';

import { Hourly, LocationData } from 'common/types';
import { WEATHER_STATE } from 'common/constants';

import { formatUtcString } from 'server/utils';
import { ForecastFeed } from 'server/types';

export const mapHourlyCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): Hourly =>
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

export default mapHourlyCard;
