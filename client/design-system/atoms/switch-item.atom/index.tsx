import React, { ReactElement } from 'react';
import { Button } from '@chakra-ui/react';

import { SwitchItemProps } from './types';

export const SwitchItem = ({
  selected,
  content,
  onClick,
}: SwitchItemProps): ReactElement => (
  <Button variant="switch-item" disabled={selected && true} onClick={onClick}>
    {content}
  </Button>
);

export default SwitchItem;
