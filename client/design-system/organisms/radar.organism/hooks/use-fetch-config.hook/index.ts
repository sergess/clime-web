import { useEffect } from 'react';
import { useUpdateAtom } from 'jotai/utils';
import useSWR from 'swr';

import { useLocationData } from 'client/hooks';
import {
  layersAtom,
  forecaPidAtom,
} from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarConfig } from 'common/types';

export const useFetchConfig = (): void => {
  const locationData = useLocationData();

  const setLayers = useUpdateAtom(layersAtom);
  const setForecaPid = useUpdateAtom(forecaPidAtom);

  const { data: config } = useSWR<RadarConfig>(
    `/api/radar/config?timezone=${locationData?.timeZone}`,
    null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    if (config) {
      const { frc, layers } = config;

      setForecaPid(frc);
      setLayers(layers);
    }
  }, [config, setForecaPid, setLayers]);
};

export default useFetchConfig;
