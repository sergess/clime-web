import { useEffect } from 'react';
import { useUpdateAtom } from 'jotai/utils';

import { settingsAtom } from 'client/state/derivatives';
import { getUserLocale } from 'client/utils';
import {
  DistanceUnit,
  PrecipitationUnit,
  PressureUnit,
  SpeedUnit,
  TemperatureUnit,
} from 'client/types';
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
        distance: DistanceUnit.MI,
        precipitation: PrecipitationUnit.INCH,
        pressure: PressureUnit.INCH,
        temperature: TemperatureUnit.F,
        windSpeed: SpeedUnit.MPH,
      });
    } else {
      setSettings({
        distance: DistanceUnit.KM,
        precipitation: PrecipitationUnit.MM,
        pressure: PressureUnit.MM,
        temperature: TemperatureUnit.C,
        windSpeed: SpeedUnit.KMH,
      });
    }
  }, []);
};

export default useInitialSettings;
