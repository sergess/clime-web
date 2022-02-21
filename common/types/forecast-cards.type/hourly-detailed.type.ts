import { Azimuth } from '../azimuth.type';
import { WeatherStateId } from '../weather-state-id.type';
import { HourConditionVariant } from '../hour-condition-variant.type';

export type HourlyDetailed = Array<{
  night: boolean;
  dateTime: string;
  stateId: WeatherStateId | null;
  variant: HourConditionVariant;
  date: string;
  relatedDayConditionIndex: number;
  humidity: number | null;
  temperature: number | null;
  feelsLikeTemperature: number | null;
  stateText: string | null;
  precipitationLevel: number | null;
  precipitationChance: number | null;
  pressure: number | null;
  windAzimuth: Azimuth;
  windSpeed: number | null;
  windDirectionAngle: number;
  uvIndex: number | null;
}>;

export default HourlyDetailed;
