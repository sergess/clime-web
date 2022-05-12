import React, { ReactElement, useEffect, useMemo } from 'react';
import { Box, chakra } from '@chakra-ui/react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import { useAtom } from 'jotai';
import Leaflet from 'leaflet';

import {
  MOBILE_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
  LAYOUT_HORIZONTAL_PADDING,
} from 'client/constants';

import { mapFullscreenOnAtom } from 'client/state/atoms';
import { useWindowDimensions } from 'client/hooks';
import { trackEvent } from 'client/services';
import { MAP_SWIPE } from 'client/services/analytics.service/constants';

import { useCenterPoint, useFetchConfig } from './hooks';
import {
  Legend,
  MapboxAttribution,
  Zoom,
  Fullscreen,
  Player,
} from './controls';
import { Markers } from './markers';
import { Layers } from './layers';
import { mapAtom } from './state/atoms';

import 'leaflet/dist/leaflet.css';

const MapContainer = chakra(LeafletMapContainer);

const bounds = Leaflet.latLngBounds([-90, -190], [90, 190]);

export const Radar = (): ReactElement => {
  const [map, setMap] = useAtom(mapAtom);
  const [mapFullscreenOn, setMapFullscreenOn] = useAtom(mapFullscreenOnAtom);
  const center = useCenterPoint();

  const { innerHeight: height } = useWindowDimensions();

  const radarHeight = useMemo(
    () =>
      !mapFullscreenOn
        ? { base: `calc(75vh - ${MOBILE_HEADER_HEIGHT}px)`, lg: 'full' }
        : {
            base: `calc(${height}px - ${MOBILE_HEADER_HEIGHT}px)`,
            lg: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px)`,
          },
    [mapFullscreenOn, height]
  );

  useFetchConfig();

  useEffect(() => {
    map?.invalidateSize();
    map?.on('dragstart', () => trackEvent(MAP_SWIPE));
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
      overflow="hidden"
      borderRadius={!mapFullscreenOn ? '2xl' : '0'}
      zIndex={1}
      boxShadow="radar-map"
      display="flex"
      flexDirection="column"
    >
      <Box
        flex={1}
        position="relative"
        sx={{
          '.leaflet-bottom': {
            left: { base: 0, md: 'auto' },
            w: { base: 'full', md: 'unset' },

            '.leaflet-control-attribution': {
              background: 'rgba(255, 255, 255, 0.5)',
              color: '#4264FB',
              fontWeight: 500,
              lineHeight: '12px',
              fontSize: '0.625rem',
              p: 1,
              w: { base: 'full', md: 'unset' },
              textAlign: { base: 'right', md: 'left' },

              '> a': {
                color: '#4264FB',
              },
            },
          },
        }}
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

        <Zoom
          pos="absolute"
          zIndex="control"
          bottom="210px"
          right={LAYOUT_HORIZONTAL_PADDING}
        />

        <Fullscreen
          pos="absolute"
          zIndex="control"
          bottom={{ base: '110px', md: '30px' }}
          right={LAYOUT_HORIZONTAL_PADDING}
        />

        <Player
          pos="absolute"
          zIndex="player"
          w="full"
          bottom="30px"
          px={LAYOUT_HORIZONTAL_PADDING}
        />

        <MapboxAttribution
          pos="absolute"
          zIndex="control"
          h="20px"
          w="90px"
          bottom={{ base: 'auto', md: 2 }}
          left={{ base: 'auto', md: 2 }}
          top={{ base: 2.5, md: 'auto' }}
          right={{ base: 2.5, md: 'auto' }}
        />
      </Box>

      <Legend w="full" />
    </Box>
  );
};

export default Radar;
