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
      time: get(timeFormatAtom),
    } as Settings),
  (get, set, updatedSettings: Partial<Settings>) => {
    const { distance, precipitation, pressure, temperature, windSpeed, time } =
      updatedSettings;

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

    if (time) {
      set(timeFormatAtom, time);
    }
  }
);

export default settingsAtom;
