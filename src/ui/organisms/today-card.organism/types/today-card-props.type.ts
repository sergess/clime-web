import { WeatherStateId } from 'src/types';

export type TodayCardProps = {
  locationExact: boolean;
  location: string;
  time: string;
  weatherStateId: WeatherStateId;
  currentTemperature: number | null;
  feelsLikeTemperature: number | null;
  minTemperature: number | null;
  maxTemperature: number | null;
  stateText: string | null;
  windDegree: number | null;
  windSpeed: number | null;
  windSpeedUnit: string;
  precipitationChance: number | null;
  precipitation: number | null;
  precipitationUnit: string;
  uvIndex: number | null;
  humidity: number | null;
  pressure: number | null;
  pressureUnit: string;
};

export default TodayCardProps;
