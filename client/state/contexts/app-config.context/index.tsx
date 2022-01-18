import {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
  ReactNode,
  useCallback,
} from 'react';
import { RemoteConfig, Value } from 'firebase/remote-config';

import { isNumber, isString } from 'common/utils';
import { APP_DEFAULT_CONFIG } from './constants';

export const AppConfigContext = createContext({});

export const AppConfigProvider = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const defaultConfig: RemoteConfig['defaultConfig'] = APP_DEFAULT_CONFIG;
  const [config, setConfig] = useState<RemoteConfig['defaultConfig']>({});

  const onError = useCallback(() => {
    setConfig(defaultConfig);
  }, [defaultConfig]);

  useEffect(() => {
    Promise.all([
      import('firebase/remote-config'),
      import('client/services/firebase.service'),
      import('ramda/src/pick'),
      import('ramda/src/mapObjIndexed'),
    ])
      .then(
        ([remoteConfigUtils, appModule, pickModule, mapObjIndexedModule]) => {
          const app = appModule.default;
          const { fetchAndActivate, getAll, getRemoteConfig } =
            remoteConfigUtils;

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

                const mapObjIndexed = mapObjIndexedModule.default;
                const pick = pickModule.default;

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
            .catch(onError);
        }
      )
      .catch(onError);
  }, []);

  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};

export default AppConfigProvider;
