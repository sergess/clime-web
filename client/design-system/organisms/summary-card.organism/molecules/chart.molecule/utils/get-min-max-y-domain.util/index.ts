const PADDING_СOEFFICIENT = 1.5;

export const getMinMaxYDomain = (
  min: number,
  max: number
): [number, number] => {
  const padding = Math.abs(max - min) * PADDING_СOEFFICIENT;

  return [min - padding, max + padding];
};

export default getMinMaxYDomain;
