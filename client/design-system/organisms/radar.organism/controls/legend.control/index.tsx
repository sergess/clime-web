import React, { FC, ReactElement } from 'react';
import { useAtomValue } from 'jotai/utils';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { activePrimaryLayerAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId } from 'common/types';

import { Radar } from './variants';

export const Legend: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement | null => {
  const activePrimaryLayer = useAtomValue(activePrimaryLayerAtom);

  let legendComponent = null;

  if (activePrimaryLayer === RadarLayerId.RADAR) {
    legendComponent = <Radar />;
  }

  return legendComponent && <Box {...componentStyles}>{legendComponent}</Box>;
};

export default Legend;
