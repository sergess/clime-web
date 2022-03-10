import { ReactElement, Fragment, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai/utils';
import take from 'ramda/src/take';
import { useMap } from 'react-leaflet';

import {
  PrimaryLayer,
  ForecaTileLayer,
} from 'client/design-system/organisms/radar.organism/atoms';
import { useLayer } from 'client/design-system/organisms/radar.organism/hooks';
import { activeFrameIndexAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId } from 'common/types';

import {
  AU_COVERAGE,
  EU_COVERAGE,
  JP_COVERAGE,
  US_COVERAGE,
} from './constants';

export const Radar = (): ReactElement | null => {
  const layer = useLayer(RadarLayerId.RADAR);
  const activeFrameIndex = useAtomValue(activeFrameIndexAtom);
  const [frames, setFrames] = useState<number[]>([]);
  const map = useMap();

  const currentBounds = map.getBounds();

  useEffect(() => {
    if (!layer) return;

    setFrames((previousFrames) => {
      if (previousFrames.length === layer.frames.length) return previousFrames;

      const numberOfFramesToShow = activeFrameIndex + 3;

      return take(numberOfFramesToShow, layer.frames);
    });
  }, [layer, activeFrameIndex]);

  if (!layer) return null;

  return (
    <PrimaryLayer layer={RadarLayerId.RADAR}>
      {frames.map((frame: number, index) => {
        const layerProps = {
          layer: RadarLayerId.RADAR,
          frame,
          updated: layer.updateTime,
          opacity: index === activeFrameIndex ? 1 : 0,
        };

        return (
          <Fragment key={frame}>
            {currentBounds.intersects(US_COVERAGE) && (
              <ForecaTileLayer {...layerProps} bounds={US_COVERAGE} />
            )}
            {currentBounds.intersects(AU_COVERAGE) && (
              <ForecaTileLayer {...layerProps} bounds={AU_COVERAGE} />
            )}
            {currentBounds.intersects(EU_COVERAGE) && (
              <ForecaTileLayer {...layerProps} bounds={EU_COVERAGE} />
            )}
            {currentBounds.intersects(JP_COVERAGE) && (
              <ForecaTileLayer {...layerProps} bounds={JP_COVERAGE} />
            )}
          </Fragment>
        );
      })}
    </PrimaryLayer>
  );
};

export default Radar;
