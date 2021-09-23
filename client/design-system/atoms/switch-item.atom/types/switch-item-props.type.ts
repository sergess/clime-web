import { ReactElement } from 'react';

export type SwitchItemProps = {
  content: ReactElement | string;
  onSelect: () => void;
  selected: boolean;
};

export default SwitchItemProps;
