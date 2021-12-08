import {
  createContext,
  ProviderProps,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import { LocationData } from 'common/types';

import { LocationDataContextValue } from './types';

export const LocationDataContext = createContext<LocationDataContextValue>({
  locationData: null,
  setLocationData: () => {},
});

export const LocationDataProvider = ({
  children,
  value,
}: ProviderProps<LocationData>): ReactElement => {
  const [locationData, setLocationData] = useState(value);

  useEffect(() => {
    setLocationData(value);
  }, [value]);

  return (
    <LocationDataContext.Provider
      value={{
        locationData,
        setLocationData,
      }}
    >
      {children}
    </LocationDataContext.Provider>
  );
};

export default LocationDataContext;
