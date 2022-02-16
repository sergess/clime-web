import React, { ReactElement } from 'react';
import { Box, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import { useUpdateAtom } from 'jotai/utils';

import { MOBILE_HEADER_HEIGHT } from 'client/constants';

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

  return (
    <Box
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
