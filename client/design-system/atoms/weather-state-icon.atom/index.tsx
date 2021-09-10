import { ReactElement } from 'react';

import { WeatherStateIconProps, weatherStateIconDefaultProps } from './types';
import variants from './variants';

export const WeatherStateIcon = ({
  stateId,
  night,
  ...iconProps
}: WeatherStateIconProps): ReactElement | null => {
  const IconComponent = variants[stateId];

  if (!IconComponent) return null;

  return <IconComponent night={night} {...iconProps} />;
};

WeatherStateIcon.defaultProps = weatherStateIconDefaultProps;

export default WeatherStateIcon;
