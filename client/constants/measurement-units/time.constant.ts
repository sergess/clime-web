import { H12, H24 } from './values.constant';

export const TIME_FORMATS = {
  H12,
  H24,
} as const;

export const TIME_FORMAT_VALUES = [TIME_FORMATS.H24, TIME_FORMATS.H12];

export default TIME_FORMATS;
