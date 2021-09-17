export type RenderItemProps<T> = {
  onSelect: (data: number) => void;
  selectedItem: number;
  index: number;
  item: T;
};

export default RenderItemProps;
