import { SwitchSelectorOptions } from './switch-selector-options.type';

export type SwitchSelectorProps = {
  options: SwitchSelectorOptions[];
  name: string;
  value: string;
  onSelected: (value: string) => void;
};

export default SwitchSelectorProps;
