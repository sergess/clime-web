import { ReactElement } from 'react';

export type DetailedForecastCarouselSlideProps = {
  main: ReactElement;
  heading: string;
  onSelect: () => void;
  selected: boolean;
  upperLabel: ReactElement;
  lowerLabel?: ReactElement;
};

export default DetailedForecastCarouselSlideProps;
