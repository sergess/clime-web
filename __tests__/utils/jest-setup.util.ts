/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

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

beforeAll(() => {
  // mock current date
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 9, 20, 11, 30));
});

afterAll(() => {
  jest.useRealTimers();
});
