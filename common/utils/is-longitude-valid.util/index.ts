export const isLongitudeValid = (value: number): boolean =>
  Number.isFinite(value) && Math.abs(value) <= 180;

export default isLongitudeValid;
