import { HourlyDetailedForecastItem } from 'client/design-system/organisms/hourly-detailed-forecast-card.organism/types';

export type HoursInfoProps = {
  data: HourlyDetailedForecastItem[];
  selectedSlideIndex: number;
  onSetSelectedSlideIndex: (index: number) => void;
};

export default HoursInfoProps;
