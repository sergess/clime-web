import { MI, KM } from './values.constant';

export const DISTANCE_UNITS = {
  MI,
  KM,
} as const;

export const DISTANCE_UNIT_VALUES = [DISTANCE_UNITS.MI, DISTANCE_UNITS.KM];

export default DISTANCE_UNITS;
