import { ReactElement } from 'react';

export type SelectableColumnBlockProps = {
  main: ReactElement;
  footer?: ReactElement | null;
  heading?: ReactElement;
  onSelect: () => void;
  selected: boolean;
};

export default SelectableColumnBlockProps;
