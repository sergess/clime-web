export type RenderButtonProps<T> = {
  onSelect: (data: number) => void;
  selectedItem: number;
  index: number;
  item: T;
};

export default RenderButtonProps;
