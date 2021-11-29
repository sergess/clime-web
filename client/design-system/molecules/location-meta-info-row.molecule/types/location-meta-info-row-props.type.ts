import { ReactNode } from 'react';
import { ComponentDefaultProps } from '@chakra-ui/react';

export type LocationMetaInfoRowProps = {
  exact: boolean;
  name: string;
  date: ReactNode;
  componentStyles: ComponentDefaultProps;
};

export default LocationMetaInfoRowProps;
