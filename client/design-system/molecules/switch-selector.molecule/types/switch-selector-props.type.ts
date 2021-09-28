import { SwitchSelectorOptionsProps } from './switch-selector-options-props.type';

export type SwitchSelectorProps = {
  options: SwitchSelectorOptionsProps[];
  name: string;
  defaultValue: string;
  onSelected: (value: string) => void;
};

export default SwitchSelectorProps;
