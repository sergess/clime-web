import { ReactElement } from 'react';

import { extractValidWeatherStateId } from 'client/utils';
import { WeatherStateId } from 'client/types';

import { WeatherStateIconProps, weatherStateIconDefaultProps } from './types';
import variants from './variants';

export const WeatherStateIcon = ({
  stateId,
  night,
  ...iconProps
}: WeatherStateIconProps): ReactElement | null => {
  const validStateId = extractValidWeatherStateId(stateId) as WeatherStateId;
  const IconComponent = variants[validStateId];

  if (!IconComponent) return null;

  return <IconComponent night={night} {...iconProps} />;
};

WeatherStateIcon.defaultProps = weatherStateIconDefaultProps;

export default WeatherStateIcon;
