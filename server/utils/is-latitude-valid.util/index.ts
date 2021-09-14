export const isLatitudeValid = (value: number): boolean =>
  Number.isFinite(value) && Math.abs(value) <= 90;

export default isLatitudeValid;
