export const toFixedN =
  (n: number) =>
  (value: number): number =>
    Number(value.toFixed(n));

export default toFixedN;
