import {
  TodayCardData,
  HourlyForecastCardData,
  BrowserInfo,
} from 'common/types';

export type WeatherTodayPageProps = {
  todayCardData: TodayCardData;
  hourlyForecastCardData: HourlyForecastCardData;
  browserInfo: BrowserInfo;
};

export default WeatherTodayPageProps;
