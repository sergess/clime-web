import { C, F } from './values.constant';

export const TEMPERATURE_UNITS = {
  C,
  F,
} as const;

export const TEMPERATURE_UNIT_VALUES = [
  TEMPERATURE_UNITS.F,
  TEMPERATURE_UNITS.C,
];

export default TEMPERATURE_UNITS;
