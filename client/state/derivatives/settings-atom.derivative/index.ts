import { atom } from 'jotai';

import {
  distanceUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  temperatureUnitAtom,
  windSpeedUnitAtom,
  timeFormatAtom,
} from 'client/state/atoms';

import { Settings } from 'client/types';

export const settingsAtom = atom(
  (get) =>
    ({
      distance: get(distanceUnitAtom),
      precipitation: get(precipitationUnitAtom),
      pressure: get(pressureUnitAtom),
      temperature: get(temperatureUnitAtom),
      windSpeed: get(windSpeedUnitAtom),
      timeFormat: get(timeFormatAtom),
    } as Settings),
  (get, set, updatedSettings: Partial<Settings>) => {
    const {
      distance,
      precipitation,
      pressure,
      temperature,
      windSpeed,
      timeFormat,
    } = updatedSettings;

    if (distance) {
      set(distanceUnitAtom, distance);
    }

    if (precipitation) {
      set(precipitationUnitAtom, precipitation);
    }

    if (pressure) {
      set(pressureUnitAtom, pressure);
    }

    if (temperature) {
      set(temperatureUnitAtom, temperature);
    }

    if (windSpeed) {
      set(windSpeedUnitAtom, windSpeed);
    }

    if (timeFormat) {
      set(timeFormatAtom, timeFormat);
    }
  }
);

export default settingsAtom;
