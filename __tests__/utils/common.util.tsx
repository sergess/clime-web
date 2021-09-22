import { FC, ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

import climeTheme from 'client/theme';

const Providers: FC = ({ children }) => (
  <ChakraProvider theme={climeTheme}>{children}</ChakraProvider>
);

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
