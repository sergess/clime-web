import React, { ReactElement } from 'react';
import { Box, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import { useUpdateAtom } from 'jotai/utils';

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
    <Box h="full" w="full" position="relative">
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
