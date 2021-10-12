import { HourConditionVariant, HourCondition } from 'client/types';

export const generateEmptyHourCondition = (
  dateTime: string,
  variant: HourConditionVariant
): HourCondition => ({
  variant,
  dateTime,
  night: false,
  stateId: null,
  stateText: null,
  stateNightText: null,
  temperature: null,
  feelsLikeTemperature: null,
  dewPoint: null,
  windSpeed: null,
  windDirection: null,
  windGust: null,
  precipitationLevel: null,
  precipitationChance: null,
  visibility: null,
  humidity: null,
  pressure: null,
});

export default generateEmptyHourCondition;
