import { Azimuth } from '../azimuth.type';
import { WeatherStateId } from '../weather-state-id.type';
import { HourConditionVariant } from '../hour-condition-variant.type';

export type HourlyDetailedForecastCardData = Array<{
  night: boolean;
  stateId: WeatherStateId | null;
  variant: HourConditionVariant;
  time: string;
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

export default HourlyDetailedForecastCardData;
