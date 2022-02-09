import { useAtomValue } from 'jotai/utils';

import { layersAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId, RadarLayers, ValueOf } from 'common/types';

export const useLayer = (
  layerId: RadarLayerId
): ValueOf<RadarLayers> | null => {
  const layers = useAtomValue(layersAtom);

  return layers?.[layerId] ?? null;
};

export default useLayer;
