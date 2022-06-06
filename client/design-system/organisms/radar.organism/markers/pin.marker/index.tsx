import { ReactElement } from 'react';
import { Icon, Point } from 'leaflet';
import { Marker } from 'react-leaflet';

import { useCenterPoint } from 'client/design-system/organisms/radar.organism/hooks';

const pinIcon = new Icon({
  iconUrl: '/icons/pin-map.svg',
  iconSize: new Point(40, 40),
  iconAnchor: new Point(20, 40),
});

export const Pin = (): ReactElement => {
  const center = useCenterPoint();

  return <Marker position={center} icon={pinIcon} />;
};

export default Pin;
