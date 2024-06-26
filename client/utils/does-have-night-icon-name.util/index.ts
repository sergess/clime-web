import includes from 'ramda/src/includes';

import { NIGHT_ICONS } from 'client/constants';

export const doesHaveNightIconName = (icon: string): boolean =>
  includes(icon, NIGHT_ICONS);

export default doesHaveNightIconName;
