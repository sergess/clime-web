export const calculateOppositeAngle = (degree: number | null): number =>
  degree !== null ? (degree + 180) % 360 : 0;

export default calculateOppositeAngle;
