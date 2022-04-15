import take from 'ramda/src/take';

import { HourlyDetailed } from 'common/types';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

import { getNumberOfHourConditionsToTake } from './utils';

export const mapHourlyDetailedCard = (
  forecastFeed: ForecastFeed
): HourlyDetailed => {
  const numberOfHourConditionsToTake = getNumberOfHourConditionsToTake(
    forecastFeed.hourConditions
  );

  return take(numberOfHourConditionsToTake, forecastFeed.hourConditions).map(
    ({
      night,
      stateId,
      dateTime,
      variant,
      temperature,
      feelsLikeTemperature,
      stateText,
      stateNightText,
      precipitationLevel,
      precipitationChance,
      humidity,
      pressure,
      windDirection,
      windSpeed,
      uvIndex,
      relatedDayConditionIndex,
    }) => {
      const degree = windDirection || 0;

      return {
        night,
        dateTime,
        stateId,
        variant,
        relatedDayConditionIndex,
        humidity,
        temperature,
        feelsLikeTemperature,
        stateText: night ? stateNightText || stateText : stateText,
        precipitationLevel,
        precipitationChance,
        pressure,
        windSpeed,
        windAzimuth: convertWindDegreeToAzimuth(degree),
        windDirectionAngle: calculateOppositeAngle(degree),
        uvIndex,
      };
    }
  );
};

export default mapHourlyDetailedCard;
