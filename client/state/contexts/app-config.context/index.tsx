import {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
  ReactNode,
} from 'react';
import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
  RemoteConfig,
  Value,
} from 'firebase/remote-config';
import pick from 'ramda/src/pick';
import mapObjIndexed from 'ramda/src/mapObjIndexed';

import { app } from 'client/services';
import { isNumber, isString } from 'common/utils';
import { APP_DEFAULT_CONFIG } from './constants';

export const AppConfigContext = createContext({});

export const AppConfigProvider = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const defaultConfig: RemoteConfig['defaultConfig'] = APP_DEFAULT_CONFIG;
  const [config, setConfig] = useState(defaultConfig);

  useEffect(() => {
    const remoteConfig = getRemoteConfig(app);

    remoteConfig.defaultConfig = defaultConfig;

    fetchAndActivate(remoteConfig)
      .then(() => {
        const convertByType = (value: Value, key: string) => {
          const defaultValue = defaultConfig[key];

          if (isNumber(defaultValue)) {
            return value.asNumber();
          }

          if (isString(defaultValue)) {
            return value.asString();
          }

          return value.asBoolean();
        };

        setConfig((currentConfig) => {
          const remoteListConfig = getAll(remoteConfig);
          const whiteListKeys = Object.keys(defaultConfig);

          const whiteListConfig = mapObjIndexed(
            convertByType,
            pick(whiteListKeys, remoteListConfig)
          );

          return {
            ...currentConfig,
            ...whiteListConfig,
          };
        });
      })
      .catch((err) => {
        // [TODO] error handling
        console.error(err);
      });
  }, []);

  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};

export default AppConfigProvider;
