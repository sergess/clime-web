import React, { ReactElement, useRef } from 'react';
import { Box, Portal, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';

import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

import { useCenterPoint, useFetchConfig } from './hooks';
import {
  Zoom as ZoomControl,
  Legend as LegendControl,
  Player as PlayerControl,
  Fullscreen as FullscreenControl,
} from './controls';
import { Markers } from './markers';
import { Layers } from './layers';

import 'leaflet/dist/leaflet.css';

const MapContainer = chakra(LeafletMapContainer);

// [todo] move zIndex to constants ABOVE_THE_MAP, MAP, SETTINGS, еtс
export const Radar = (): ReactElement => {
  const radarContainerRef = useRef(null);
  const center = useCenterPoint();

  useFetchConfig();

  return (
    <Box ref={radarContainerRef} h="full" w="full" position="relative">
      <MapContainer
        h="full"
        w="full"
        center={center}
        zoomControl={false}
        zoom={9}
        minZoom={3}
        maxZoom={12}
      >
        <Portal containerRef={radarContainerRef}>
          <ZoomControl
            pos="absolute"
            zIndex={1200}
            bottom="260px"
            right={LAYOUT_HORIZONTAL_PADDING}
          />

          <FullscreenControl
            pos="absolute"
            zIndex={1200}
            bottom="140px"
            right={LAYOUT_HORIZONTAL_PADDING}
          />

          <PlayerControl
            pos="absolute"
            zIndex={1200}
            w="full"
            bottom="52px"
            px={LAYOUT_HORIZONTAL_PADDING}
          />

          <LegendControl pos="absolute" zIndex={1200} w="full" bottom={0} />
        </Portal>

        <Markers />
        <Layers />
      </MapContainer>
    </Box>
  );
};

export default Radar;
