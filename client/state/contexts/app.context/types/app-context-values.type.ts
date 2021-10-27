import { BrowserInfo, LocationData } from 'common/types';

export type AppContextValues = {
  locationData: LocationData | null;
  browserInfo: BrowserInfo | null;
};

export default AppContextValues;
