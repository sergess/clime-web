import { ReactElement } from 'react';
import Image from 'next/image';

import { ICONS_NAMES_MAP } from './constants';
import { doesHaveNightIconName } from './utils';
import { WeatherStateIconProps } from './types';

export const WeatherStateIcon = ({
  stateId,
  night,
  width = 40,
  height = 40,
}: WeatherStateIconProps): ReactElement | null => {
  if (!stateId) return null;

  const iconName = ICONS_NAMES_MAP[stateId];

  if (!iconName) return null;

  const nightIconName = doesHaveNightIconName(stateId)
    ? `${iconName}-night`
    : iconName;

  return (
    <Image
      src={`/icons/${night ? nightIconName : iconName}.svg`}
      width={width}
      height={height}
      alt={iconName}
    />
  );
};

export default WeatherStateIcon;
