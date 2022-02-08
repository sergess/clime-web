import take from 'ramda/src/take';

import { Hourly } from 'common/types';

import { ForecastFeed } from 'server/types';

export const mapHourlyCard = (forecastFeed: ForecastFeed): Hourly =>
  take(5, forecastFeed.hourConditions).map(
    ({ variant, night, temperature, stateId, dateTime }) => ({
      dateTime,
      variant,
      night,
      stateId,
      temperature,
      time: dateTime,
      // time: formatUtcString(
      //   dateTime,
      //   variant === WEATHER_STATE ? 'haaa' : 'h:mmaaa',
      //   locationData?.timeZone
      // ),
    })
  );

export default mapHourlyCard;
