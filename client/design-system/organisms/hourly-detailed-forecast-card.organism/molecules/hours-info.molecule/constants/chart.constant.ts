import climeTheme from 'client/theme';

import { HourlyDetailedForecastItem } from 'client/design-system/organisms/hourly-detailed-forecast-card.organism/types';

export const X_VALUE_CONFIG = {
  getValue: (item: HourlyDetailedForecastItem): string => item.dateTime,
};
export const Y_VALUE_CONFIG = [
  {
    getValue: (item: HourlyDetailedForecastItem): string | number =>
      item.temperature,
    strokeColor: climeTheme.colors.orange[400],
  },
];
