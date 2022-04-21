import { ReactElement, Fragment, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai/utils';

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

const NUMBER_OF_FRAMES_TO_SHOW = 3;

export const Radar = (): ReactElement | null => {
  const layer = useLayer(RadarLayerId.RADAR);
  const activeFrameIndex = useAtomValue(activeFrameIndexAtom);
  const [frames, setFrames] = useState<number[]>([]);

  useEffect(() => {
    if (!layer) return;

    const nextFramesToShow = layer.frames.slice(
      activeFrameIndex,
      activeFrameIndex + NUMBER_OF_FRAMES_TO_SHOW
    );
    const framesToShow =
      nextFramesToShow.length < NUMBER_OF_FRAMES_TO_SHOW
        ? [
            ...nextFramesToShow,
            ...layer.frames.slice(
              0,
              NUMBER_OF_FRAMES_TO_SHOW - nextFramesToShow.length
            ),
          ]
        : nextFramesToShow;

    setFrames(framesToShow);
  }, [activeFrameIndex, layer]);

  if (!layer) return null;

  return (
    <PrimaryLayer layer={RadarLayerId.RADAR}>
      {frames.map((frame: number, index) => {
        const layerProps = {
          layer: RadarLayerId.RADAR,
          frame,
          updated: layer.updateTime,
          opacity: index === 0 ? 1 : 0,
        };

        return (
          <Fragment key={frame}>
            <ForecaTileLayer {...layerProps} bounds={US_COVERAGE} />
            <ForecaTileLayer {...layerProps} bounds={AU_COVERAGE} />
            <ForecaTileLayer {...layerProps} bounds={EU_COVERAGE} />
            <ForecaTileLayer {...layerProps} bounds={JP_COVERAGE} />
          </Fragment>
        );
      })}
    </PrimaryLayer>
  );
};

export default Radar;
