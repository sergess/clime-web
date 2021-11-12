import {
  TodayCardData,
  HourlyForecastCardData,
  SummaryCardData,
  DailyDetailedForecastCardData,
  DailyForecastCardData,
  HourlyDetailedForecastCardData,
} from 'common/types/cards';

export type CardsContextData = {
  today?: TodayCardData;
  hourlyForecast?: HourlyForecastCardData;
  summary?: SummaryCardData;
  dailyDetailedForecast?: DailyDetailedForecastCardData;
  dailyForecast?: DailyForecastCardData;
  hourlyDetailedForecast?: HourlyDetailedForecastCardData;
};

export default CardsContextData;
