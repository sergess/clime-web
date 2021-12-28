import { useContext } from 'react';

import { AppConfigContext } from 'client/state/contexts';
import { AppConfigProps } from './types';

export const useAppConfig = (): AppConfigProps => {
  const config = useContext(AppConfigContext);
  return config;
};

export default useAppConfig;
