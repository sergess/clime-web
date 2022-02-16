import React, { ReactElement, useRef } from 'react';
import { Box, Portal, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';

import {
  LAYOUT_HORIZONTAL_PADDING,
  MOBILE_HEADER_HEIGHT,
} from 'client/constants';

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

export const Radar = (): ReactElement => {
  const radarContainerRef = useRef(null);
  const center = useCenterPoint();

  useFetchConfig();

  return (
    <Box
      ref={radarContainerRef}
      h={{ base: `calc(75vh - ${MOBILE_HEADER_HEIGHT}px)`, lg: '100%' }}
      w="full"
      position="relative"
      minH={{ base: `calc(75vh - ${MOBILE_HEADER_HEIGHT}px)`, lg: '792px' }}
    >
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
            zIndex="control"
            bottom="260px"
            right={LAYOUT_HORIZONTAL_PADDING}
          />

          <FullscreenControl
            pos="absolute"
            zIndex="control"
            bottom="140px"
            right={LAYOUT_HORIZONTAL_PADDING}
          />

          <PlayerControl
            pos="absolute"
            zIndex="control"
            w="full"
            bottom="52px"
            px={LAYOUT_HORIZONTAL_PADDING}
          />

          <LegendControl pos="absolute" zIndex="control" w="full" bottom={0} />
        </Portal>
        <Markers />
        <Layers />
      </MapContainer>
    </Box>
  );
};

export default Radar;
