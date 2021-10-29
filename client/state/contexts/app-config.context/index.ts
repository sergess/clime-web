import { createContext } from 'react';

import { AppConfigContextData } from './types';

export const AppConfigContext = createContext<AppConfigContextData>({
  locationData: null,
  browserInfo: null,
});

export default AppConfigContext;
