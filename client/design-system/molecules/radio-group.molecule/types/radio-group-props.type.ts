import { OptionsRadioGroupProps } from './options-radio-group-props.type';
import { SettingsRadioGroupProps } from './settings-radio-group-props.type';

export type RadioGroupProps = {
  options: OptionsRadioGroupProps[];
  settings: SettingsRadioGroupProps;
  onSelected: (value: string) => void;
};

export default RadioGroupProps;
