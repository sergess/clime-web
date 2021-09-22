/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { useUpdateAtom } from 'jotai/utils';
import { renderHook } from '@testing-library/react-hooks';

import { forecastFeedAtom } from 'client/state/atoms';
import forecastFeedMock from '__mocks__/forecast-feed.mock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;

  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();

  return DynamicComponent;
});

// eslint-disable-next-line
// @ts-ignore
global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

// update atoms with mocked data before all tests
beforeAll(() => {
  renderHook(() => {
    const setForecastFeed = useUpdateAtom(forecastFeedAtom);
    // eslint-disable-next-line
    // @ts-ignore
    setForecastFeed(forecastFeedMock);
  });
});
