import { useState } from 'react';

import { Location } from 'common/types';

import { useClientEffect } from '../use-client-effect.hook';

export const useBrowserLocation = (): Location | null => {
  const [browserLocation, setBrowserLocation] = useState<Location | null>(null);

  useClientEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setBrowserLocation({ latitude, longitude });
    });
  }, []);

  return browserLocation;
};

export default useBrowserLocation;
