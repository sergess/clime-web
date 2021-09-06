import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: `jsdom`,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/__tests__/utils',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/utils/jest-setup.util.ts'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^public(.*)$': '<rootDir>/public$1',
    '^__tests__(.*)$': '<rootDir>/__tests__$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/utils/file-transformer.util.js',
  },
  transformIgnorePatterns: ['/node_modules/'],
};

export default config;
