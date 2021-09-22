import { useState, useEffect } from 'react';

import { Location } from 'common/types';

import { UseLocationFromBrowserType } from './types';

import { useHasMounted } from '../use-has-mounted.hook';

export const useLocationFromBrowser = ({
  skip = false,
}: UseLocationFromBrowserType): Location | null => {
  const [browserLocation, setBrowserLocation] = useState<Location | null>(null);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || skip) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const location = { latitude, longitude } as Location;

      setBrowserLocation(location);
    });
  }, [hasMounted, skip]);

  return browserLocation;
};

export default useLocationFromBrowser;
