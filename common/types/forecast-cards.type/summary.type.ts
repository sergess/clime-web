import { Azimuth } from '../azimuth.type';
import { DayPeriod } from '../day-period.type';
import { WeatherStateId } from '../weather-state-id.type';

export type Summary = Array<{
  night: boolean;
  stateId: WeatherStateId | null;
  period: DayPeriod;
  temperature: number | null;
  windSpeed: number | null;
  precipitationLevel: number | null;
  precipitationChance: number | null;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
}>;

export default Summary;
