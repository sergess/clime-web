import {
  TodayCardData,
  HourlyForecastCardData,
  BrowserInfo,
} from 'common/types';

export type IndexPageProps = {
  todayCardData: TodayCardData;
  hourlyForecastCardData: HourlyForecastCardData;
  browserInfo: BrowserInfo;
};

export default IndexPageProps;
