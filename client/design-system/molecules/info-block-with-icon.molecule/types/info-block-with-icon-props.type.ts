import { ReactNode } from 'react';

export type InfoBlockWithIconProps = {
  icon: ReactNode;
  label: string;
  text: string | number | null;
};

export default InfoBlockWithIconProps;
