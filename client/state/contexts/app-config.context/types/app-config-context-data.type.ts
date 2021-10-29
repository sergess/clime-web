import { BrowserInfo, LocationData } from 'common/types';

export type AppConfigContextData = {
  locationData: LocationData | null;
  browserInfo: BrowserInfo | null;
};

export default AppConfigContextData;
