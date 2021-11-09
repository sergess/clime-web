import {
  TodayCardData,
  HourlyForecastCardData,
  SummaryCardData,
  DailyDetailedForecastCardData,
  DailyForecastCardData,
} from 'common/types/cards';

export type CardsContextData = {
  today?: TodayCardData;
  hourlyForecast?: HourlyForecastCardData;
  summary?: SummaryCardData;
  dailyDetailedForecast?: DailyDetailedForecastCardData;
  dailyForecast?: DailyForecastCardData;
};

export default CardsContextData;
