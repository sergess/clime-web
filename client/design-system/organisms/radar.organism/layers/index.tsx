import React, { ReactElement } from 'react';
import { LayerGroup } from 'react-leaflet';

import { Map } from './map.layer';
import { Radar } from './radar.layer';

export const Layers = (): ReactElement => (
  <LayerGroup pane="tilePane">
    <Map />
    <Radar />
  </LayerGroup>
);

export default Layers;
