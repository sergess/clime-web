import { Today, LocationData } from 'common/types';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
  formatUtcString,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

export const mapTodayCard = (
  forecastFeed: ForecastFeed,
  locationData: LocationData | null
): Today => {
  const currentHourCondition = forecastFeed.hourConditions[0];
  const todayDayCondition = forecastFeed.dayConditions[0];

  const windDirection = currentHourCondition.windDirection || 0;

  const currentDate = new Date();

  return {
    date: formatUtcString(currentDate, 'h:mmaaa', locationData?.timeZone),
    night: currentHourCondition.night,
    stateText: currentHourCondition.night
      ? currentHourCondition.stateNightText || currentHourCondition.stateText
      : currentHourCondition.stateText,
    temperature: currentHourCondition.temperature,
    stateId: currentHourCondition.stateId,
    feelsLikeTemperature: currentHourCondition.feelsLikeTemperature,
    precipitationChance: currentHourCondition.precipitationChance,
    windSpeed: currentHourCondition.windSpeed,
    precipitationLevel: currentHourCondition.precipitationLevel,
    humidity: currentHourCondition.humidity,
    pressure: currentHourCondition.pressure,
    maxTemperature: todayDayCondition.maxTemperature,
    minTemperature: todayDayCondition.minTemperature,
    uvIndex: todayDayCondition.uvIndex,
    windAzimuth: convertWindDegreeToAzimuth(windDirection),
    windDirectionAngle: calculateOppositeAngle(windDirection),
    visibility: currentHourCondition.visibility,
  };
};

export default mapTodayCard;
