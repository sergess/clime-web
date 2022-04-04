import React, { FC, ReactElement } from 'react';
import { useAtomValue } from 'jotai/utils';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { activePrimaryLayerAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId } from 'common/types';

import { Radar } from './variants';

export const Player: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement | null => {
  const activePrimaryLayer = useAtomValue(activePrimaryLayerAtom);

  let playerComponent = null;

  if (activePrimaryLayer === RadarLayerId.RADAR) {
    playerComponent = <Radar />;
  }

  return playerComponent && <Box {...componentStyles}>{playerComponent}</Box>;
};

export default Player;
