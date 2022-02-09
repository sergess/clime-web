import { LatLngTuple } from 'leaflet';

import { useLocationData } from 'client/hooks';

export const useCenterPoint = (): LatLngTuple => {
  const locationData = useLocationData();

  return [locationData?.latitude ?? 0, locationData?.longitude ?? 0];
};

export default useCenterPoint;
