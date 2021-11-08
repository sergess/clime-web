import take from 'ramda/src/take';

import { LocationData, HourlyDetailedForecastCardData } from 'common/types';
import { WEATHER_STATE } from 'common/constants';

import {
  formatUtcString,
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

import { getNumberOfHourConditionsToTake } from './utils';

export const withHourlyDetailedForecastCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): HourlyDetailedForecastCardData => {
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
        stateId,
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

export default withHourlyDetailedForecastCard;
