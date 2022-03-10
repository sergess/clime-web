import {
  MI,
  KM,
  INCH,
  MM,
  MBAR,
  MPH,
  KMH,
  MS,
  C,
  F,
} from 'client/constants/measurement-units/values.constant';

import { H12, H24 } from 'client/constants';

export const SETTINGS_LABELS = {
  [MI]: 'miles',
  [KM]: 'kilometers',
  [INCH]: 'inches',
  [MM]: 'mm',
  [MBAR]: 'mbar',
  [C]: 'C',
  [F]: 'F',
  [MPH]: 'mph',
  [KMH]: 'km/h',
  [MS]: 'm/s',
  [H24]: '24 h',
  [H12]: '12 h',
};

export default SETTINGS_LABELS;
