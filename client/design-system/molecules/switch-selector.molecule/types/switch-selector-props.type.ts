export type SwitchSelectorProps<T> = {
  data: T[];
  onSelect: (item: number) => void;
};
export default SwitchSelectorProps;
