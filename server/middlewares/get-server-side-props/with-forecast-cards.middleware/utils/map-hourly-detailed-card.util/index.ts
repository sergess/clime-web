import take from 'ramda/src/take';

import { HourlyDetailed, LocationData } from 'common/types';
import { WEATHER_STATE } from 'common/constants';

import {
  formatUtcString,
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

import { getNumberOfHourConditionsToTake } from './utils';

export const mapHourlyDetailedCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
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
    }) => {
      const degree = windDirection || 0;

      return {
        night,
        dateTime,
        stateId,
        variant,
        time: formatUtcString(
          dateTime,
          variant === WEATHER_STATE ? 'haaa' : 'h:mmaaa',
          locationData?.timeZone
        ),
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
