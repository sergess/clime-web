import { Azimuth, DayPeriod, WeatherStateId } from 'common/types';

export type ChartPoint = {
  visible: boolean;
  period: DayPeriod;
  night: boolean;
  stateId: WeatherStateId | null;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
  precipitationLevel: number | null;
  y: number | null;
};

export default ChartPoint;
