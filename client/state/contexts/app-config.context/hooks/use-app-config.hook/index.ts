import { useContext } from 'react';

import { AppConfigContext } from 'client/state/contexts';

import { AppConfig } from 'common/types';

export const useAppConfig = (): AppConfig | null => {
  const config = useContext(AppConfigContext);

  return config;
};

export default useAppConfig;
