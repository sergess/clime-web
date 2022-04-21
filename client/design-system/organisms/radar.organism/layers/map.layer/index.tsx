import React, { FC, ReactElement, useMemo } from 'react';
import { TileLayer } from 'react-leaflet';
import { useAtomValue } from 'jotai/utils';

import { mapStyleAtom } from 'client/design-system/organisms/radar.organism/state/atoms';
import { MapStyle } from 'client/design-system/organisms/radar.organism/types';

import { MapLayerStyle, MapTileLayerProps } from './types';

const MapTileLayerComponent: FC<MapTileLayerProps> = TileLayer;

export const Map = (): ReactElement => {
  const mapStyle = useAtomValue(mapStyleAtom);

  const mapLayerStyle = useMemo(() => {
    if (mapStyle === MapStyle.MAP) {
      return MapLayerStyle.MAP;
    }

    if (mapStyle === MapStyle.SATELLITE) {
      return MapLayerStyle.SATELLITE;
    }

    if (mapStyle === MapStyle.HYBRID) {
      return MapLayerStyle.HYBRID;
    }

    return MapLayerStyle.MAP;
  }, [mapStyle]);

  return (
    <MapTileLayerComponent
      crossOrigin
      style={mapLayerStyle}
      url={process.env.NEXT_PUBLIC_RADAR_MAP_URL as string}
      accessToken={process.env.NEXT_PUBLIC_RADAR_MAP_ACCESS_TOKEN}
      attribution='&copy <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
    />
  );
};

export default Map;
