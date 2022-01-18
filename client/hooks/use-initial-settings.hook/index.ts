import { useEffect } from 'react';
import { useUpdateAtom } from 'jotai/utils';

import { settingsAtom } from 'client/state/derivatives';
import { getUserLocale } from 'client/utils';
import {
  DISTANCE_UNITS,
  PRECIPITATION_UNITS,
  PRESSURE_UNITS,
  SPEED_UNITS,
  TEMPERATURE_UNITS,
} from 'client/constants/measurement-units';
import { EN_US, EN } from 'client/constants';

import { areSettingsEmpty } from './utils';

export const useInitialSettings = (): void => {
  const setSettings = useUpdateAtom(settingsAtom);

  useEffect(() => {
    const settingsEmpty = areSettingsEmpty();

    if (!settingsEmpty) return;

    const userLocale = getUserLocale()?.toLowerCase();

    if (
      userLocale === EN_US?.toLowerCase() ||
      userLocale === EN?.toLowerCase()
    ) {
      setSettings({
        distance: DISTANCE_UNITS.MI,
        precipitation: PRECIPITATION_UNITS.INCH,
        pressure: PRESSURE_UNITS.INCH,
        temperature: TEMPERATURE_UNITS.F,
        windSpeed: SPEED_UNITS.MPH,
      });
    } else {
      setSettings({
        distance: DISTANCE_UNITS.KM,
        precipitation: PRECIPITATION_UNITS.MM,
        pressure: PRESSURE_UNITS.MM,
        temperature: TEMPERATURE_UNITS.C,
        windSpeed: SPEED_UNITS.KMH,
      });
    }
  }, []);
};

export default useInitialSettings;
