import { createContext } from 'react';

import { AppContextValues } from './types';

export const AppConfigContext = createContext<AppContextValues>({
  locationData: null,
  browserInfo: null,
});

export default AppConfigContext;
