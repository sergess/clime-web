import { useAtom } from 'jotai';
import { renderHook, act } from '@testing-library/react-hooks';
import mergeDeepRight from 'ramda/src/mergeDeepRight';
import mergeLeft from 'ramda/src/mergeLeft';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import { forecastItemsAtom } from 'client/state/derivatives';

import {
  TemperatureUnit,
  SpeedUnit,
  PrecipitationUnit,
  PressureUnit,
  DistanceUnit,
} from 'client/types';

import dayConditionsMock from '__mocks__/day-conditions.mock';

// Reset all convertible units to default units which we receive from API
beforeEach(() => {
  const { result: temperatureUnit } = renderHook(() =>
    useAtom(temperatureUnitAtom)
  );

  const { result: windSpeedUnit } = renderHook(() =>
    useAtom(windSpeedUnitAtom)
  );

  const { result: precipitationUnit } = renderHook(() =>
    useAtom(precipitationUnitAtom)
  );

  const { result: pressureUnit } = renderHook(() => useAtom(pressureUnitAtom));

  const { result: distanceUnit } = renderHook(() => useAtom(distanceUnitAtom));

  act(() => {
    temperatureUnit.current[1](TemperatureUnit.F);
    windSpeedUnit.current[1](SpeedUnit.KMH);
    precipitationUnit.current[1](PrecipitationUnit.MM);
    pressureUnit.current[1](PressureUnit.MBAR);
    distanceUnit.current[1](DistanceUnit.KM);
  });
});

describe('Forecast items atom', () => {
  test('should convert all temperature values to C', () => {
    const { result: temperatureUnit } = renderHook(() =>
      useAtom(temperatureUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      temperatureUnit.current[1](TemperatureUnit.C);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          fl: -16.6667,
          dp: -16.1111,
          tmn: -16.6667,
          tmx: -14.4444,
          hly: dayCondition.hly.map(
            mergeLeft({
              t: -14.4444,
              fl: -16.6667,
              dp: -16.1111,
            })
          ),
          smr: {
            day: {
              t: -14.4444,
            },
            evng: {
              t: -15,
            },
            nght: {
              t: -16.6667,
            },
          },
        })
      )
    );
  });

  test('should convert all speed values to MPH', () => {
    const { result: windSpeedUnit } = renderHook(() =>
      useAtom(windSpeedUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      windSpeedUnit.current[1](SpeedUnit.MPH);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          ws: 8.0778,
          wg: 5.5923,
          hly: dayCondition.hly.map(
            mergeLeft({
              ws: 8.0778,
              wg: 16.1557,
            })
          ),
          smr: {
            day: {
              ws: 8.0778,
            },
            evng: {
              ws: 7.4565,
            },
            nght: {
              ws: 6.2137,
            },
          },
        })
      )
    );
  });

  test('should convert all speed values to MS', () => {
    const { result: windSpeedUnit } = renderHook(() =>
      useAtom(windSpeedUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      windSpeedUnit.current[1](SpeedUnit.MS);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          ws: 3.6111,
          wg: 2.5,
          hly: dayCondition.hly.map(
            mergeLeft({
              ws: 3.6111,
              wg: 7.2222,
            })
          ),
          smr: {
            day: {
              ws: 3.6111,
            },
            evng: {
              ws: 3.3333,
            },
            nght: {
              ws: 2.7778,
            },
          },
        })
      )
    );
  });

  test('should convert all precipitation values to INCH', () => {
    const { result: precipitationUnit } = renderHook(() =>
      useAtom(precipitationUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      precipitationUnit.current[1](PrecipitationUnit.INCH);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          hly: dayCondition.hly.map(
            mergeLeft({
              pr: 0.0787,
            })
          ),
          smr: {
            day: {
              pr: 0.1181,
            },
            evng: {
              pr: 0.1575,
            },
            nght: {
              pr: 0.1969,
            },
          },
        })
      )
    );
  });

  test('should convert all pressure values to MM', () => {
    const { result: pressureUnit } = renderHook(() =>
      useAtom(pressureUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      pressureUnit.current[1](PressureUnit.MM);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          p: 22.5023,
          hly: dayCondition.hly.map(
            mergeLeft({
              p: 22.5023,
            })
          ),
        })
      )
    );
  });

  test('should convert all pressure values to INCH', () => {
    const { result: pressureUnit } = renderHook(() =>
      useAtom(pressureUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      pressureUnit.current[1](PressureUnit.INCH);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          p: 0.8859,
          hly: dayCondition.hly.map(
            mergeLeft({
              p: 0.8859,
            })
          ),
        })
      )
    );
  });

  test('should convert all distance values to MI', () => {
    const { result: distanceUnit } = renderHook(() =>
      useAtom(distanceUnitAtom)
    );

    const { result: forecastItems } = renderHook(() =>
      useAtom(forecastItemsAtom)
    );

    act(() => {
      distanceUnit.current[1](DistanceUnit.MI);
    });

    expect(forecastItems.current[0]).toEqual(
      dayConditionsMock.map((dayCondition) =>
        mergeDeepRight(dayCondition, {
          v: 1.2427,
          hly: dayCondition.hly.map(
            mergeLeft({
              v: 0.6214,
            })
          ),
        })
      )
    );
  });
});
