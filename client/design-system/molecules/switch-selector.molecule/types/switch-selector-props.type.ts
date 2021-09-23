import { ReactElement } from 'react';
import { RenderButtonProps } from 'client/design-system/molecules/switch-selector.molecule/types/render-button-props.type';

export type SwitchSelectorProps<T> = {
  data: T[];
  renderButton: (item: RenderButtonProps<T>) => ReactElement;
};
export default SwitchSelectorProps;
