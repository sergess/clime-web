import { DailyDetailedForecastItem } from 'client/design-system/organisms/daily-detailed-forecast-card.organism/types';

export type DaysInfoProps = {
  data: DailyDetailedForecastItem[];
  selectedSlideIndex: number;
  onSetSelectedSlideIndex: (index: number) => void;
};

export default DaysInfoProps;
