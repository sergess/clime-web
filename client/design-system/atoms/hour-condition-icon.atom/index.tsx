import { ReactElement } from 'react';

import { SUNSET, SUNRISE, WEATHER_STATE } from 'common/constants';

import { SunriseIcon, SunsetIcon } from '../ui-icon.atom';
import { WeatherStateIcon } from '../weather-state-icon.atom';

import { HourConditionIconProps } from './types';

export const HourConditionIcon = ({
  variant,
  night,
  stateId,
  ...iconProps
}: HourConditionIconProps): ReactElement | null => {
  if (!variant) return null;

  switch (variant) {
    case SUNRISE:
      return <SunriseIcon {...iconProps} />;
    case SUNSET:
      return <SunsetIcon {...iconProps} />;
    case WEATHER_STATE:
    default:
      return (
        <WeatherStateIcon night={night} stateId={stateId} {...iconProps} />
      );
  }
};

export default HourConditionIcon;
