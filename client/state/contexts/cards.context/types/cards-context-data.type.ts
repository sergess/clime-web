import {
  TodayCardData,
  HourlyForecastCardData,
  SummaryCardData,
} from 'common/types/cards';

export type CardsContextData = {
  today?: TodayCardData;
  hourlyForecast?: HourlyForecastCardData;
  summary?: SummaryCardData;
};

export default CardsContextData;
