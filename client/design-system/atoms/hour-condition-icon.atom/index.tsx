import { ReactElement } from 'react';
import Image from 'next/image';

import { SUNSET, SUNRISE, WEATHER_STATE } from 'common/constants';

import { WeatherStateIcon } from '../weather-state-icon.atom';

import { HourConditionIconProps } from './types';

export const HourConditionIcon = ({
  variant,
  night,
  stateId,
  width = 40,
  height = 40,
}: HourConditionIconProps): ReactElement | null => {
  if (!variant) return null;

  switch (variant) {
    case SUNRISE:
      return (
        <Image
          src="/icons/sunrise.svg"
          width={width}
          height={height}
          alt="sunrise"
        />
      );
    case SUNSET:
      return (
        <Image
          src="/icons/sunset.svg"
          width={width}
          height={height}
          alt="sunset"
        />
      );
    case WEATHER_STATE:
    default:
      return (
        <WeatherStateIcon
          night={night}
          stateId={stateId}
          width={width}
          height={height}
        />
      );
  }
};

export default HourConditionIcon;
