import { MPH, KMH, MS } from './values.constant';

export const SPEED_UNITS = {
  MPH,
  KMH,
  MS,
} as const;

export const SPEED_UNIT_VALUES = [
  SPEED_UNITS.MPH,
  SPEED_UNITS.KMH,
  SPEED_UNITS.MS,
];

export default SPEED_UNITS;
