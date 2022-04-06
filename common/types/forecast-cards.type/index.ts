import { ForecastCard } from '../forecast-card.type';

import { DailyDetailed } from './daily-detailed.type';
import { Daily } from './daily.type';
import { HourlyDetailed } from './hourly-detailed.type';
import { Hourly } from './hourly.type';
import { Summary } from './summary.type';
import { Today } from './today.type';

export * from './daily-detailed.type';
export * from './hourly-detailed.type';
export * from './hourly.type';
export * from './summary.type';
export * from './today.type';
export * from './daily.type';

export type ForecastCards = {
  [ForecastCard.DAILY_DETAILED]?: DailyDetailed;
  [ForecastCard.DAILY]?: Daily;
  [ForecastCard.HOURLY_DETAILED]?: HourlyDetailed;
  [ForecastCard.HOURLY]?: Hourly;
  [ForecastCard.SUMMARY]?: Summary;
  [ForecastCard.TODAY]?: Today;
};
