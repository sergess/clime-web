import { ReactElement } from 'react';

export type SwitchItemProps = {
  content: ReactElement | string;
  onClick: () => void;
  selected: boolean;
};

export default SwitchItemProps;
