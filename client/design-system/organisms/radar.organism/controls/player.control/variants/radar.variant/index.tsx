import React, { useState, ReactElement, useCallback, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';

import { activeFrameIndexAtom } from 'client/design-system/organisms/radar.organism/state/atoms';
import { RadarLayerId } from 'common/types';
import { useLayer } from 'client/design-system/organisms/radar.organism/hooks';
import { SliderPlayer } from 'client/design-system/molecules';
import { useInterval } from 'client/hooks';

import { NowLabel } from './molecules';

export const Radar = (): ReactElement | null => {
  const { t } = useTranslation('radar');
  const [playing, setPlaying] = useState(false);

  const layer = useLayer(RadarLayerId.RADAR);
  const [activeFrameIndex, setActiveFrameIndex] = useAtom(activeFrameIndexAtom);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(activeFrameIndex);

  const onPlayToggle = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  const onNextFrameIndexChange = useCallback(
    (prevIndex) => {
      if (!layer) return prevIndex;

      if (prevIndex >= layer.frames.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    },
    [layer]
  );

  useEffect(
    () => () => {
      setActiveFrameIndex(0);
    },
    []
  );

  useInterval(
    () => {
      setCurrentFrameIndex(onNextFrameIndexChange);
      setActiveFrameIndex(onNextFrameIndexChange);
    },
    playing && !!layer ? 1000 : null
  );

  if (!layer) return null;

  return (
    <SliderPlayer
      playing={playing}
      onPlayToggle={onPlayToggle}
      value={currentFrameIndex}
      step={1}
      min={0}
      max={layer.frames.length - 1}
      onChange={setCurrentFrameIndex}
      onChangeEnd={setActiveFrameIndex}
      nowLabel={<NowLabel />}
      endLabel={
        <Text textStyle="12-medium" color="gray.600">
          {t('now')}
        </Text>
      }
    />
  );
};

export default Radar;
