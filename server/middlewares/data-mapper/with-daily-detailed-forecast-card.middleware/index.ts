import take from 'ramda/src/take';

import { LocationData, DailyDetailedForecastCardData } from 'common/types';

import {
  formatUtcString,
  isUtcStringNight,
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

export const withDailyDetailedForecastCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): DailyDetailedForecastCardData => {
  const now = new Date().toISOString();

  return take(10, forecastFeed.dayConditions).map(
    (
      {
        stateId,
        dateTime,
        sunrise,
        sunset,
        minTemperature,
        maxTemperature,
        stateText,
        stateNightText,
        precipitationChance,
        uvIndex,
        humidity,
        pressure,
        dewPoint,
        windDirection,
        windSpeed,
      },
      index
    ) => {
      const degree = windDirection || 0;
      const night =
        index === 0 ? isUtcStringNight(now, sunrise, sunset) : false;

      return {
        night,
        stateId,
        uvIndex,
        humidity,
        pressure,
        dewPoint,
        windSpeed,
        minTemperature,
        maxTemperature,
        // [TODO] Remove 0 when https://jira.jabodo.com:8443/browse/WT-823 is ready
        precipitationLevel: 0,
        precipitationChance,
        stateText: night ? stateNightText || stateText : stateText,
        day: formatUtcString(dateTime, 'E dd', locationData?.timeZone),
        windAzimuth: convertWindDegreeToAzimuth(degree),
        windDirectionAngle: calculateOppositeAngle(degree),
      };
    }
  );
};

export default withDailyDetailedForecastCard;
