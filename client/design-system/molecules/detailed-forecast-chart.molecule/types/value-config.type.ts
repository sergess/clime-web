export type ValueConfig = {
  getValue: (item: any) => number | string;
  strokeColor?: string;
};

export default ValueConfig;
