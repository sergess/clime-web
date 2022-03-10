import { TimeFormat } from 'client/types';

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
  [TimeFormat.H24]: '24 h',
  [TimeFormat.H12]: '12 h',
};

export default SETTINGS_LABELS;
