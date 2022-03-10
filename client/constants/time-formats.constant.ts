export const FORMAT_H12_SHORT = 'haaa';
export const FORMAT_H12 = 'h:mmaaa';
export const FORMAT_H24 = 'H:mm';
export const H24 = '24';
export const H12 = '12';

export const TIME_FORMATS = {
  H12,
  H24,
} as const;

export const TIME_FORMAT_VALUES = [TIME_FORMATS.H24, TIME_FORMATS.H12];

export default TIME_FORMATS;
