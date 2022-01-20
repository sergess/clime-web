import { createContext } from 'react';

import { AppConfig } from 'common/types';

export const AppConfigContext = createContext<AppConfig | null>(null);

export const AppConfigProvider = AppConfigContext.Provider;

export default AppConfigContext;
