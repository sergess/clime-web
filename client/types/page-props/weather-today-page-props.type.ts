import {
  TodayCardData,
  HourlyForecastCardData,
  SummaryCardData,
} from 'common/types';

export type WeatherTodayPageProps = {
  todayCardData: TodayCardData;
  hourlyForecastCardData: HourlyForecastCardData;
  summaryCardData: SummaryCardData;
};

export default WeatherTodayPageProps;
