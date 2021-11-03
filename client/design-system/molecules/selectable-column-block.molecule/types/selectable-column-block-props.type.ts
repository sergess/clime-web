import { ReactElement } from 'react';

export type SelectableColumnBlockProps = {
  main: ReactElement;
  footer?: ReactElement;
  heading?: ReactElement;
  onSelect: () => void;
  selected: boolean;
};

export default SelectableColumnBlockProps;
