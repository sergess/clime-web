import {
  TodayCardData,
  HourlyForecastCardData,
  SummaryCardData,
  DailyDetailedForecastCardData,
} from 'common/types/cards';

export type CardsContextData = {
  today?: TodayCardData;
  hourlyForecast?: HourlyForecastCardData;
  summary?: SummaryCardData;
  dailyDetailedForecast?: DailyDetailedForecastCardData;
};

export default CardsContextData;
