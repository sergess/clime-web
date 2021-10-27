import {
  TodayCardData,
  HourlyForecastCardData,
  SummaryCardData,
} from 'common/types';

export type IndexPageProps = {
  todayCardData: TodayCardData;
  hourlyForecastCardData: HourlyForecastCardData;
  summaryCardData: SummaryCardData;
};

export default IndexPageProps;
