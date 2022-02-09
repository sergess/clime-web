import React, { ReactElement, FC } from 'react';
import { useAtomValue } from 'jotai/utils';
import { TileLayer } from 'react-leaflet';
import type { LatLngBoundsExpression } from 'leaflet';

import { forecaPidAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

import { RadarLayerId } from 'common/types';

import { ForecaTileLayerProps } from './types';

const ForecaTileLayerComponent: FC<ForecaTileLayerProps> = TileLayer;

export const ForecaTileLayer: FC<{
  layer: RadarLayerId;
  frame: number;
  updated: string;
  bounds?: LatLngBoundsExpression;
}> = ({ layer, frame, updated, bounds }): ReactElement | null => {
  const forecaPid = useAtomValue(forecaPidAtom);

  if (!forecaPid) return null;

  return (
    <ForecaTileLayerComponent
      key={frame}
      url="/api/radar/tile?z={z}&x={x}&y={y}&layer={layer}&frame={frame}&updated={updated}&c={c}"
      c={forecaPid.c}
      layer={layer}
      frame={frame}
      updated={updated}
      bounds={bounds}
    />
  );
};

export default ForecaTileLayer;
