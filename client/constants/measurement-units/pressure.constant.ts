import { INCH, MM, MBAR } from './values.constant';

export const PRESSURE_UNITS = {
  INCH,
  MM,
  MBAR,
} as const;

export const PRESSURE_UNIT_VALUES = [
  PRESSURE_UNITS.INCH,
  PRESSURE_UNITS.MM,
  PRESSURE_UNITS.MBAR,
];

export default PRESSURE_UNITS;
