import { ReactElement } from 'react';

import { SUNSET, SUNRISE, WEATHER_STATE } from 'common/constants';
import {
  SunriseIcon,
  SunsetIcon,
  WeatherStateIcon,
} from 'client/design-system/atoms';

import { IconProps } from './types';

export const Icon = ({
  variant,
  night,
  stateId,
  ...iconProps
}: IconProps): ReactElement | null => {
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

export default Icon;
