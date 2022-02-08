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
  H12,
  H24,
} from 'client/constants/measurement-units/values.constant';

export const MEASUREMENT_UNIT_LABELS = {
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

export default MEASUREMENT_UNIT_LABELS;
