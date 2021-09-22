import { WeatherStateId } from 'client/types';

export type InfoBlockWeatherProps = {
  weatherStateId: WeatherStateId;
  temperature?: number | string | null;
  time?: string;
  date?: string;
  maxTemperature?: number | null;
  minTemperature?: number | null;
};

export default InfoBlockWeatherProps;
