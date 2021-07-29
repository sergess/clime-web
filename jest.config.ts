import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.ts'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^tests(.*)$': '<rootDir>/tests$1',
  },
};

export default config;
