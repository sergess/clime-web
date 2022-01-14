import { ReactNode } from 'react';
import { ComponentDefaultProps } from '@chakra-ui/react';

export type LocationInfoRowProps = {
  date: ReactNode;
  heading?: ReactNode | null;
  componentStyles: ComponentDefaultProps;
};

export default LocationInfoRowProps;
