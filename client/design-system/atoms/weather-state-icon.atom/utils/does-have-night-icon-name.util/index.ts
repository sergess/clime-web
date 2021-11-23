import includes from 'ramda/src/includes';
import { NIGHT_ICONS } from 'client/design-system/atoms/weather-state-icon.atom/constants';

export const doesHaveNightIconName = (icon: string) =>
  includes(icon, NIGHT_ICONS);

export default doesHaveNightIconName;
