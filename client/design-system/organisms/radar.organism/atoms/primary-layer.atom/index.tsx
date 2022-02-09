import React, { ReactElement, FC } from 'react';
import { useAtomValue } from 'jotai/utils';

import { activePrimaryLayerAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId } from 'common/types';

export const PrimaryLayer: FC<{ layer: RadarLayerId }> = ({
  layer,
  children,
}): ReactElement | null => {
  const activePrimaryLayer = useAtomValue(activePrimaryLayerAtom);

  if (activePrimaryLayer !== layer) return null;

  return <>{children}</>;
};

export default PrimaryLayer;
