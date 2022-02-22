import React, { ReactElement } from 'react';
import { LayerGroup } from 'react-leaflet';

import { Pin } from './pin.marker';

export const Markers = (): ReactElement => (
  <LayerGroup pane="markerPane">
    <Pin />
  </LayerGroup>
);

export default Markers;
