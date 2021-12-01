import climeTheme from 'client/theme';

import { DailyDetailedForecastItem } from 'client/design-system/organisms/daily-detailed-forecast-card.organism/types';

export const X_VALUE_CONFIG = {
  getValue: (item: DailyDetailedForecastItem): string => item.date,
};
export const Y_VALUE_CONFIG = [
  {
    getValue: (item: DailyDetailedForecastItem): string | number =>
      item.maxTemperature,
    strokeColor: climeTheme.colors.orange[400],
  },
  {
    getValue: (item: DailyDetailedForecastItem): string | number =>
      item.minTemperature,
    strokeColor: climeTheme.colors.blue[500],
  },
];
