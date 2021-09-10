export const isValidLatitude = (value: number): boolean =>
  Number.isFinite(value) && Math.abs(value) <= 90;

export default isValidLatitude;
