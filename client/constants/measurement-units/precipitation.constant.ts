import { INCH, MM } from './values.constant';

export const PRECIPITATION_UNITS = {
  INCH,
  MM,
} as const;

export const PRECIPITATION_UNIT_VALUES = [
  PRECIPITATION_UNITS.INCH,
  PRECIPITATION_UNITS.MM,
];

export default PRECIPITATION_UNITS;
