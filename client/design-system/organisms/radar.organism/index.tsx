import React, { ReactElement, useEffect, useMemo } from 'react';
import { Box, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import { useAtom } from 'jotai';
import Leaflet from 'leaflet';

import { MOBILE_HEADER_HEIGHT, DESKTOP_HEADER_HEIGHT } from 'client/constants';

import { mapFullscreenOnAtom } from 'client/state/atoms';

import { useCenterPoint, useFetchConfig } from './hooks';
import { Controls } from './controls';
import { Markers } from './markers';
import { Layers } from './layers';
import { mapAtom } from './state/atoms';

import 'leaflet/dist/leaflet.css';

const MapContainer = chakra(LeafletMapContainer);

export const Radar = (): ReactElement => {
  const bounds = Leaflet.latLngBounds([-90, -190], [90, 190]);

  const [map, setMap] = useAtom(mapAtom);
  const [mapFullscreenOn, setMapFullscreenOn] = useAtom(mapFullscreenOnAtom);
  const center = useCenterPoint();

  const radarHeight = useMemo(
    () =>
      !mapFullscreenOn
        ? { base: `calc(75vh - ${MOBILE_HEADER_HEIGHT}px)`, lg: 'full' }
        : {
            base: `calc(100vh - ${MOBILE_HEADER_HEIGHT}px)`,
            lg: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px)`,
          },
    [mapFullscreenOn]
  );

  useFetchConfig();

  useEffect(() => {
    map?.invalidateSize();
  }, [map, mapFullscreenOn]);

  useEffect(
    () => () => {
      setMap(null);
      setMapFullscreenOn(false);
    },
    []
  );

  return (
    <Box
      h={radarHeight}
      w="full"
      position="relative"
      overflow="hidden"
      borderRadius={!mapFullscreenOn ? '2xl' : '0'}
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
        maxBoundsViscosity={1.0}
        maxBounds={bounds}
      >
        <Markers />
        <Layers />
      </MapContainer>

      <Controls />
    </Box>
  );
};

export default Radar;
