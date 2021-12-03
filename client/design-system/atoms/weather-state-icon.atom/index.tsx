import { ReactElement } from 'react';
import Image from 'next/image';

import { ICONS_NAMES_MAP } from 'client/constants';
import { doesHaveNightIconName } from 'client/utils';

import { WeatherStateIconProps } from './types';

export const WeatherStateIcon = ({
  stateId,
  night,
  width = 40,
  height = 40,
  ...imageProps
}: WeatherStateIconProps): ReactElement | null => {
  if (!stateId) return null;

  const iconName = ICONS_NAMES_MAP[stateId];

  if (!iconName) return null;

  const nightIconName = doesHaveNightIconName(stateId)
    ? `${iconName}-night`
    : iconName;

  return (
    <Image
      {...imageProps}
      src={`/icons/${night ? nightIconName : iconName}.svg`}
      width={width}
      height={height}
      alt={iconName}
    />
  );
};

export default WeatherStateIcon;
