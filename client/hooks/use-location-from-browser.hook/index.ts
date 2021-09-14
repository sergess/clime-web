import { useState } from 'react';

import { useClientEffect } from 'client/hooks/use-client-effect.hook';

import { Location } from 'common/types';

import { UseLocationFromBrowserType } from './types';

export const useLocationFromBrowser = ({
  skip = false,
}: UseLocationFromBrowserType): Location | null => {
  const [browserLocation, setBrowserLocation] = useState<Location | null>(null);

  useClientEffect(() => {
    if (skip) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const location = { latitude, longitude } as Location;

      setBrowserLocation(location);
    });
  }, []);

  return browserLocation;
};

export default useLocationFromBrowser;
