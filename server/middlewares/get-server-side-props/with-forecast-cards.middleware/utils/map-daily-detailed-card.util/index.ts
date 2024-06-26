import take from 'ramda/src/take';

import { DailyDetailed } from 'common/types';

import {
  isUtcStringNight,
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

export const mapDailyDetailedCard = (
  forecastFeed: ForecastFeed
): DailyDetailed => {
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
        precipitationLevel,
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
        dateTime,
        stateId,
        uvIndex,
        humidity,
        pressure,
        dewPoint,
        windSpeed,
        minTemperature,
        maxTemperature,
        precipitationLevel,
        precipitationChance,
        stateText: night ? stateNightText || stateText : stateText,
        windAzimuth: convertWindDegreeToAzimuth(degree),
        windDirectionAngle: calculateOppositeAngle(degree),
      };
    }
  );
};

export default mapDailyDetailedCard;
