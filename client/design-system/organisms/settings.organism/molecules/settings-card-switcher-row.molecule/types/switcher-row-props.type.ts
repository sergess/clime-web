import { SwitcherOption } from './switcher-option.type';

export type SwitcherRowProps<T> = {
  first?: boolean;
  title: string;
  value: string;
  options: SwitcherOption[];
  onValueChange: (value: T) => void;
};

export default SwitcherRowProps;
