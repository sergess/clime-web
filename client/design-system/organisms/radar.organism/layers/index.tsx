import React, { ReactElement } from 'react';

import { Map } from './map.layer';
import { Radar } from './radar.layer';

export const Layers = (): ReactElement => (
  <>
    <Map />
    <Radar />
  </>
);

export default Layers;
