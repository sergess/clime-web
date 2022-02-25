import React, { ReactElement, useEffect } from 'react';
import { Box, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import { MOBILE_HEADER_HEIGHT, DESKTOP_HEADER_HEIGHT } from 'client/constants';

import { mapFullscreenMode } from 'client/state/atoms';

import { useCenterPoint, useFetchConfig } from './hooks';
import { Controls } from './controls';
import { Markers } from './markers';
import { Layers } from './layers';
import { mapAtom } from './state/atoms';

import 'leaflet/dist/leaflet.css';

const MapContainer = chakra(LeafletMapContainer);

export const Radar = (): ReactElement => {
  const setMap = useUpdateAtom(mapAtom);
  const center = useCenterPoint();

  useFetchConfig();

  const mapFullscreen = useAtomValue(mapFullscreenMode);

  const map = useAtomValue(mapAtom);

  useEffect(() => {
    map?.invalidateSize();
  }, [mapFullscreen]);

  return (
    <Box
      h={
        !mapFullscreen
          ? { base: `calc(75vh - ${MOBILE_HEADER_HEIGHT}px)`, lg: 'full' }
          : {
              base: `calc(100vh - ${MOBILE_HEADER_HEIGHT}px)`,
              lg: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px)`,
            }
      }
      w="full"
      position="relative"
      overflow="hidden"
      borderRadius={!mapFullscreen ? '2xl' : '0'}
      boxShadow="radar-map"
    >
      <MapContainer
        h="full"
        w="full"
        center={center}
        zoomControl={false}
        zoom={9}
        minZoom={3}
        maxZoom={12}
        whenCreated={setMap}
      >
        <Markers />
        <Layers />
      </MapContainer>

      <Controls />
    </Box>
  );
};

export default Radar;
