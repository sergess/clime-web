import { ReactElement } from 'react';
import { useAtomValue } from 'jotai/utils';

import {
  PrimaryLayer,
  ForecaTileLayer,
} from 'client/design-system/organisms/radar.organism/atoms';
import { useLayer } from 'client/design-system/organisms/radar.organism/hooks';
import { activePlayerFrameIndexAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId } from 'common/types';

import {
  AU_COVERAGE,
  EU_COVERAGE,
  JP_COVERAGE,
  US_COVERAGE,
} from './constants';

export const Radar = (): ReactElement | null => {
  const layer = useLayer(RadarLayerId.RADAR);
  const activePlayerFrameIndex = useAtomValue(activePlayerFrameIndexAtom);

  if (!layer) return null;

  return (
    <PrimaryLayer layer={RadarLayerId.RADAR}>
      {/* [todo] do we need LayerGroup here? */}
      <>
        <ForecaTileLayer
          layer={RadarLayerId.RADAR}
          frame={layer.frames[activePlayerFrameIndex]}
          updated={layer.updateTime}
          bounds={AU_COVERAGE}
        />
        <ForecaTileLayer
          layer={RadarLayerId.RADAR}
          frame={layer.frames[activePlayerFrameIndex]}
          updated={layer.updateTime}
          bounds={EU_COVERAGE}
        />
        <ForecaTileLayer
          layer={RadarLayerId.RADAR}
          frame={layer.frames[activePlayerFrameIndex]}
          updated={layer.updateTime}
          bounds={JP_COVERAGE}
        />
        <ForecaTileLayer
          layer={RadarLayerId.RADAR}
          frame={layer.frames[activePlayerFrameIndex]}
          updated={layer.updateTime}
          bounds={US_COVERAGE}
        />
      </>
    </PrimaryLayer>
  );
};

export default Radar;
