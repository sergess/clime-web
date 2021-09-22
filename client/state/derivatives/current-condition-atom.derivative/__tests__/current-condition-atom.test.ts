import { useAtom } from 'jotai';
import { renderHook, act } from '@testing-library/react-hooks';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import { currentConditionAtom } from 'client/state/derivatives';

import {
  TemperatureUnit,
  SpeedUnit,
  PrecipitationUnit,
  PressureUnit,
  DistanceUnit,
} from 'client/types';

import currentConditionMock from '__mocks__/current-condition.mock';

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

describe('Current condition atom', () => {
  test('should convert all temperature values to C', () => {
    const { result: temperatureUnit } = renderHook(() =>
      useAtom(temperatureUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      temperatureUnit.current[1](TemperatureUnit.C);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      t: 6.1111,
      fl: 1.1111,
      dp: 2.7778,
    });
  });

  test('should convert all speed values to MPH', () => {
    const { result: windSpeedUnit } = renderHook(() =>
      useAtom(windSpeedUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      windSpeedUnit.current[1](SpeedUnit.MPH);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      wg: 25.4762,
      ws: 14.2915,
    });
  });

  test('should convert all speed values to MS', () => {
    const { result: windSpeedUnit } = renderHook(() =>
      useAtom(windSpeedUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      windSpeedUnit.current[1](SpeedUnit.MS);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      wg: 11.3889,
      ws: 6.3889,
    });
  });

  test('should convert all precipitation values to INCH', () => {
    const { result: precipitationUnit } = renderHook(() =>
      useAtom(precipitationUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      precipitationUnit.current[1](PrecipitationUnit.INCH);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      pr: 0.0169,
    });
  });

  test('should convert all pressure values to MM', () => {
    const { result: pressureUnit } = renderHook(() =>
      useAtom(pressureUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      pressureUnit.current[1](PressureUnit.MM);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      p: 761.8662,
    });
  });

  test('should convert all pressure values to INCH', () => {
    const { result: pressureUnit } = renderHook(() =>
      useAtom(pressureUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      pressureUnit.current[1](PressureUnit.INCH);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      p: 29.9943,
    });
  });

  test('should convert all distance values to MI', () => {
    const { result: distanceUnit } = renderHook(() =>
      useAtom(distanceUnitAtom)
    );

    const { result: currentCondition } = renderHook(() =>
      useAtom(currentConditionAtom)
    );

    act(() => {
      distanceUnit.current[1](DistanceUnit.MI);
    });

    expect(currentCondition.current[0]).toMatchObject({
      ...currentConditionMock,
      v: 4.4242,
    });
  });
});
