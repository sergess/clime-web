import { LocationData } from 'common/types';

export type UseLocationDataByIpResponse = {
  locationData: LocationData | null;
  error: any;
};

export default UseLocationDataByIpResponse;
