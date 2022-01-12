import { ImageProps } from 'next/image';

import { WeatherStateId } from 'common/types';

export type WeatherStateIconProps = Omit<ImageProps, 'src'> & {
  night?: boolean;
  stateId: WeatherStateId | null;
};

export default WeatherStateIconProps;
